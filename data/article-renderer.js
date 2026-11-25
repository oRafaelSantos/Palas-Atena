/*
 * article-renderer.js — monta a página de um verbete (pensador ou escola) a partir de data/.
 * O HTML de cada artigo só informa a coleção e o "slug" (data-kind, data-slug); todo o conteúdo vem dos dados.
 */
(function (ns) {
  "use strict";

  const paths = ns.paths;
  const WIDE_SCREEN = "(min-width: 56rem)";
  const REFERENCES_SECTION = { id: "referencias", titulo: "Referências" };

  function buildBreadcrumb(item, collection) {
    return (
      '<nav class="breadcrumb" aria-label="Você está em"><ol class="breadcrumb__list">' +
      '<li class="breadcrumb__item"><a href="' + paths.home() + '">Início</a></li>' +
      '<li class="breadcrumb__item"><a href="' + collection.catalogUrl + '">' + collection.catalogLabel + "</a></li>" +
      '<li class="breadcrumb__item" aria-current="page">' + item.nome + "</li></ol></nav>"
    );
  }

  function buildToc(sections) {
    const items = sections.map(function (section) {
      return '<li><a href="#' + section.id + '">' + section.titulo + "</a></li>";
    }).join("");
    return '<nav class="toc" aria-label="Neste verbete"><details><summary>Neste verbete</summary><ol>' + items + "</ol></details></nav>";
  }

  function buildParagraphs(paragraphs) {
    return (paragraphs || []).map(function (text) { return "<p>" + text + "</p>"; }).join("");
  }

  function buildDefinitions(items) {
    if (!items || items.length === 0) return "";
    const entries = items.map(function (item) {
      return '<div class="definition-list__item"><dt>' + item.termo + "</dt><dd>" + item.texto + "</dd></div>";
    }).join("");
    return '<dl class="definition-list">' + entries + "</dl>";
  }

  function buildSection(section) {
    return (
      '<section class="article__section" id="' + section.id + '">' +
      "<h2>" + section.titulo + "</h2>" +
      buildParagraphs(section.paragrafos) +
      buildDefinitions(section.itens) +
      "</section>"
    );
  }

  function buildReferences(references) {
    const items = references.map(function (reference) { return "<li>" + reference + "</li>"; }).join("");
    return (
      '<section class="article__section" id="' + REFERENCES_SECTION.id + '">' +
      "<h2>" + REFERENCES_SECTION.titulo + "</h2>" +
      '<ul class="reference-list">' + items + "</ul>" +
      '<p class="article__note">Leitura complementar: ' +
      '<a href="https://plato.stanford.edu" target="_blank" rel="noopener">Stanford Encyclopedia of Philosophy</a> e ' +
      '<a href="https://iep.utm.edu" target="_blank" rel="noopener">Internet Encyclopedia of Philosophy</a>. ' +
      "Este texto é um resumo introdutório; confira datas e interpretações nas fontes antes de citá-lo.</p>" +
      "</section>"
    );
  }

  // Cada referência é "colecao:slug" e pode apontar para outra categoria (ex.: um filósofo ligado a uma escola).
  function buildRelated(item) {
    const related = (item.relacionados || []).map(ns.collections.resolve).filter(Boolean);
    if (related.length === 0) return "";
    const chips = related.map(function (entry) {
      return (
        '<a class="chip" href="' + entry.collection.itemUrl(entry.item.slug) + '">' + entry.item.nome +
        ' <span class="chip__kind">' + entry.collection.tag + "</span></a>"
      );
    }).join("");
    return '<section class="article__section"><h2 class="visually-hidden">Ver também</h2><p><strong>Ver também:</strong> ' + chips + "</p></section>";
  }

  function buildArticle(item, collection) {
    const tocSections = item.secoes.concat([REFERENCES_SECTION]);
    return (
      '<article class="article">' +
      buildBreadcrumb(item, collection) +
      '<span class="article__tag">' + collection.tag + "</span>" +
      "<h1>" + item.nome + "</h1>" +
      '<p class="article__meta">' + item.periodo + ", " + item.local + "</p>" +
      '<p class="article__lead">' + item.resumo + "</p>" +
      buildToc(tocSections) +
      item.secoes.map(buildSection).join("") +
      buildReferences(item.referencias) +
      buildRelated(item) +
      "</article>"
    );
  }

  function buildNotFound(collection) {
    return (
      '<div class="notice"><h1>Verbete não encontrado</h1>' +
      '<p>Não há um verbete com este endereço. <a href="' + collection.catalogUrl + '">Veja a lista de ' +
      collection.catalogLabel.toLowerCase() + "</a>.</p></div>"
    );
  }

  // O navegador tenta rolar até o #hash antes de o texto existir; repetimos depois de montar.
  function scrollToHash() {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }

  function render(container, slug, collectionKey) {
    const collection = ns.collections.get(collectionKey);
    const item = ns.collections.findItem(collectionKey, slug);
    if (!item) {
      container.innerHTML = buildNotFound(collection);
      document.title = "Verbete não encontrado — PALAS ATENA";
      return;
    }

    container.innerHTML = buildArticle(item, collection);
    document.title = item.nome + " — PALAS ATENA";

    const toc = container.querySelector(".toc details");
    if (toc && window.matchMedia(WIDE_SCREEN).matches) toc.open = true;

    scrollToHash();
  }

  ns.article = { render: render };
})(window.PalasAtena);
