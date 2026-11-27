/*
 * components.js — componentes compartilhados: cabeçalho (com menu e botão de tema) e rodapé.
 * Eles são montados por JavaScript em vez de carregados com fetch(), porque
 * fetch() não funciona em arquivos abertos direto do celular (file://).
 */
(function (ns) {
  "use strict";

  const paths = ns.paths;

  const NAV_ITEMS = [
    { id: "inicio", label: "Início", href: paths.home() },
    { id: "pensadores", label: "Pensadores", href: paths.catalog() },
    { id: "escolas", label: "Escolas filosóficas", href: paths.schoolsCatalog() },
    { id: "correntes", label: "Correntes filosóficas", href: paths.currentsCatalog() }
  ];

  // Cada página indica seu tipo em <body data-page>; o artigo de um verbete
  // pertence à seção do menu da sua categoria.
  const PAGE_TO_NAV_ID = {
    inicio: "inicio",
    pensadores: "pensadores",
    artigo: "pensadores",
    escolas: "escolas",
    "artigo-escola": "escolas",
    correntes: "correntes",
    "artigo-corrente": "correntes"
  };

  // Mesma coruja de assets/icons/logo.svg (aqui inline, para herdar a cor do tema).
  const LOGO_SVG =
    '<svg class="brand__logo" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false">' +
    '<path d="M6 8c3 0 6 2 10 2s7-2 10-2v11c0 6-5 9-10 9S6 25 6 19z"/>' +
    '<circle cx="12" cy="15" r="3"/><circle cx="20" cy="15" r="3"/>' +
    '<path d="M16 18l-1.5 3h3z" fill="currentColor"/></svg>';

  const THEME_ICON_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" focusable="false">' +
    '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>';

  function buildNavLinks(activeId) {
    return NAV_ITEMS.map(function (item) {
      const current = item.id === activeId ? ' aria-current="page"' : "";
      return '<li><a class="site-nav__link" href="' + item.href + '"' + current + ">" + item.label + "</a></li>";
    }).join("");
  }

  function buildHeader(activeId) {
    return (
      '<a class="skip-link" href="#conteudo">Ir para o conteúdo</a>' +
      '<div class="container site-header__inner">' +
      '<a class="brand" href="' + paths.home() + '" aria-label="PALAS ATENA, página inicial">' +
      LOGO_SVG +
      '<span class="brand__text"><span class="brand__name">PALAS ATENA</span>' +
      '<span class="brand__tagline">Enciclopédia Filosófica</span></span></a>' +
      '<div class="site-header__actions">' +
      '<button class="icon-button" type="button" data-theme-toggle>' + THEME_ICON_SVG + "</button>" +
      '<button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="menu-principal">Menu</button>' +
      "</div>" +
      '<nav class="site-nav" id="menu-principal" aria-label="Navegação principal">' +
      '<ul class="site-nav__list">' + buildNavLinks(activeId) + "</ul></nav>" +
      "</div>"
    );
  }

  function buildFooter() {
    return (
      '<div class="container">' +
      "<p><strong>PALAS ATENA</strong>, Enciclopédia Filosófica. Um espaço dedicado à história das ideias e ao pensamento humano.</p>" +
      "<p>Projeto educativo e sem fins comerciais. Os verbetes são introdutórios: distinguem, sempre que possível, fatos históricos de interpretações e não substituem a leitura das obras nem de fontes acadêmicas.</p>" +
      '<p>Referências gerais: <a href="https://plato.stanford.edu" target="_blank" rel="noopener">Stanford Encyclopedia of Philosophy</a> e ' +
      '<a href="https://iep.utm.edu" target="_blank" rel="noopener">Internet Encyclopedia of Philosophy</a>.</p>' +
      "</div>"
    );
  }

  function fill(selector, html) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  }

  function mountAll(pageId) {
    fill('[data-component="site-header"]', buildHeader(PAGE_TO_NAV_ID[pageId]));
    fill('[data-component="site-footer"]', buildFooter());
  }

  ns.components = { mountAll: mountAll };
})(window.PalasAtena);
