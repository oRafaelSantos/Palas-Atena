/* navigation.js — comportamento do menu no celular (abrir, fechar, teclado). */
(function (ns) {
  "use strict";

  function init() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.getElementById("menu-principal");
    if (!toggle || !menu) return;

    function setOpen(isOpen) {
      menu.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  ns.navigation = { init: init };
})(window.PalasAtena);
