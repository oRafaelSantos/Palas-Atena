/*
 * app.js — ponto de entrada. Carregado por último em todas as páginas.
 * Apenas coordena: monta os componentes, liga os comportamentos e pede
 * aos renderizadores que desenhem o conteúdo marcado com data-render.
 */
(function (ns) {
  "use strict";

  function mountComponents() {
    ns.components.mountAll(document.body.dataset.page);
  }

  function initBehaviors() {
    ns.navigation.init();
    ns.theme.bindToggle(document.querySelector("[data-theme-toggle]"));
    ns.search.init();
  }

  function renderContent() {
    document.querySelectorAll('[data-render="cards"]').forEach(function (container) {
      ns.catalog.renderCards(container, container.dataset.collection);
    });

    document.querySelectorAll('[data-render="categories"]').forEach(function (container) {
      ns.catalog.renderCategories(container);
    });

    const article = document.querySelector('[data-render="article"]');
    if (article) ns.article.render(article, article.dataset.slug, article.dataset.kind);
  }

  mountComponents();
  initBehaviors();
  renderContent();
})(window.PalasAtena);
