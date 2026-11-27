/*
 * search.js — busca da página inicial.
 * Nesta etapa a busca é apenas visual: o envio mostra um aviso.
 * A busca real substituirá o conteúdo deste arquivo em uma etapa posterior.
 */
(function (ns) {
  "use strict";

  function init() {
    const form = document.querySelector("[data-search-form]");
    if (!form) return;

    const status = form.querySelector("[data-search-status]");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      status.textContent = "A busca estará disponível em uma próxima etapa. Por enquanto, explore os pensadores abaixo.";
    });
  }

  ns.search = { init: init };
})(window.PalasAtena);
