/*
 * categorias.js — categorias de conteúdo exibidas na página inicial.
 * "Pensadores", "Escolas filosóficas" e "Correntes filosóficas" estão disponíveis; as demais aparecem como "em breve".
 * "pagina" é o caminho a partir da raiz do projeto.
 */
(function (ns) {
  "use strict";

  ns.data = ns.data || {};

  ns.data.categorias = [
    { id: "pensadores", titulo: "Pensadores", descricao: "Biografias e ideias centrais dos filósofos.", pagina: "pages/pensadores.html" },
    { id: "escolas", titulo: "Escolas filosóficas", descricao: "Tradições com mestres, discípulos ou instituições.", pagina: "pages/escolas.html" },
    { id: "correntes", titulo: "Correntes filosóficas", descricao: "Famílias de ideias e métodos reunidas ao longo do tempo.", pagina: "pages/correntes.html" },
    { id: "obras", titulo: "Obras", descricao: "Textos fundamentais, com contexto e importância." },
    { id: "historia", titulo: "História da Filosofia", descricao: "Os grandes períodos e as conexões entre eles." }
  ];
})((window.PalasAtena = window.PalasAtena || {}));
