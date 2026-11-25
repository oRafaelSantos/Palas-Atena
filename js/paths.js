/*
 * paths.js — monta endereços relativos à raiz do projeto.
 * Cada HTML informa a profundidade em <body data-root="../../">, assim os
 * mesmos scripts funcionam em qualquer página, mesmo abertas diretamente.
 */
(function (ns) {
  "use strict";

  const root = document.body.dataset.root || "./";

  ns.paths = {
    root: root,
    fromRoot: function (path) { return root + path; },
    home: function () { return root + "index.html"; },
    catalog: function () { return root + "pages/pensadores.html"; },
    thinker: function (slug) { return root + "pages/filosofos/" + slug + ".html"; },
    schoolsCatalog: function () { return root + "pages/escolas.html"; },
    school: function (slug) { return root + "pages/escolas/" + slug + ".html"; }
  };
})((window.PalasAtena = window.PalasAtena || {}));
