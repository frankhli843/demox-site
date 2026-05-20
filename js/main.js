(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (toggle && menu && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        menu.hidden = false;
      } else {
        menu.hidden = true;
      }
    });

    menu.addEventListener('click', function (e) {
      const target = e.target;
      if (target instanceof HTMLAnchorElement || (target instanceof HTMLElement && target.closest('a'))) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      }
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

})();
