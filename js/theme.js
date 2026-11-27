/*
 * theme.js — tema claro/escuro.
 * Carregado no <head>, antes do corpo da página, para aplicar o tema salvo
 * sem que a página pisque com a cor errada.
 */
(function (ns) {
  "use strict";

  const STORAGE_KEY = "palas-atena-tema";
  const THEMES = ["dark", "light"];
  const DEFAULT_THEME = "dark";

  function readSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null; // O armazenamento pode estar bloqueado; o tema padrão resolve.
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // Sem armazenamento, o tema vale apenas para esta visita.
    }
  }

  function getTheme() {
    return document.documentElement.dataset.theme;
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
  }

  function toggleTheme() {
    const next = getTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
    return next;
  }

  function describeToggle(button) {
    const target = getTheme() === "dark" ? "claro" : "escuro";
    button.setAttribute("aria-label", "Ativar tema " + target);
    button.setAttribute("title", "Ativar tema " + target);
  }

  // Liga o botão do cabeçalho (criado depois por components.js).
  function bindToggle(button) {
    if (!button) return;
    describeToggle(button);
    button.addEventListener("click", function () {
      toggleTheme();
      describeToggle(button);
    });
  }

  const saved = readSavedTheme();
  applyTheme(THEMES.includes(saved) ? saved : DEFAULT_THEME);

  ns.theme = { get: getTheme, toggle: toggleTheme, bindToggle: bindToggle };
})((window.PalasAtena = window.PalasAtena || {}));
