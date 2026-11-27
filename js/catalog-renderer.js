/*
 * catalog-renderer.js — desenha os cartões dos catálogos e das categorias.
 * Os dados vêm de data/; aqui há apenas apresentação.
 * Os textos dos dados são escritos por nós (não digitados por visitantes),
 * por isso podem ser inseridos como HTML.
 */
(function (ns) {
  "use strict";

  const paths = ns.paths;

  function buildItemCard(item, collection) {
    return (
      '<article class="card card--link">' +
      '<span class="card__tag">' + collection.tag + "</span>" +
      '<h3><a class="card__link" href="' + collection.itemUrl(item.slug) + '">' + item.nome + "</a></h3>" +
      '<p class="card__meta">' + item.periodo + ", " + item.local + "</p>" +
      '<p class="card__text">' + item.resumo + "</p>" +
      '<span class="card__action">Ler verbete</span>' +
      "</article>"
    );
  }

  function buildCategoryCard(category) {
    if (category.pagina) {
      return (
        '<article class="card card--link">' +
        '<h3><a class="card__link" href="' + paths.fromRoot(category.pagina) + '">' + category.titulo + "</a></h3>" +
        '<p class="card__text">' + category.descricao + "</p>" +
        '<span class="card__action">Abrir</span></article>'
      );
    }
    return (
      '<article class="card card--upcoming">' +
      "<h3>" + category.titulo + "</h3>" +
      '<p class="card__text">' + category.descricao + "</p>" +
      '<span class="card__meta">Em breve</span></article>'
    );
  }

  function renderCards(container, collectionKey) {
    const collection = ns.collections.get(collectionKey);
    container.innerHTML = collection.items().map(function (item) {
      return buildItemCard(item, collection);
    }).join("");
  }

  function renderCategories(container) {
    container.innerHTML = ns.data.categorias.map(buildCategoryCard).join("");
  }

  ns.catalog = { renderCards: renderCards, renderCategories: renderCategories };
})(window.PalasAtena);
