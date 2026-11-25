/*
 * collections.js — registro das coleções de verbetes (pensadores, escolas...).
 * Cada coleção diz como tratar seus itens: etiqueta, catálogo, endereço de cada
 * página e onde estão os dados. Os renderizadores usam este registro, então
 * uma nova categoria (correntes, obras) só precisa ser registrada aqui.
 */
(function (ns) {
  "use strict";

  const paths = ns.paths;

  const collections = {
    filosofo: {
      tag: "Filósofo",
      catalogLabel: "Pensadores",
      catalogUrl: paths.catalog(),
      itemUrl: paths.thinker,
      items: function () { return ns.data.filosofos; }
    },
    escola: {
      tag: "Escola filosófica",
      catalogLabel: "Escolas filosóficas",
      catalogUrl: paths.schoolsCatalog(),
      itemUrl: paths.school,
      items: function () { return ns.data.escolas; }
    }
  };

  function findItem(collectionKey, slug) {
    return collections[collectionKey].items().find(function (item) { return item.slug === slug; });
  }

  // Resolve uma referência no formato "colecao:slug" (ex.: "filosofo:platao").
  function resolve(reference) {
    const parts = reference.split(":");
    const collection = collections[parts[0]];
    const item = collection && findItem(parts[0], parts[1]);
    return item ? { collection: collection, item: item } : null;
  }

  ns.collections = { get: function (key) { return collections[key]; }, findItem: findItem, resolve: resolve };
})(window.PalasAtena);
