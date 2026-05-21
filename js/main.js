(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMobile');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    menu.addEventListener('click', function (e) {
      var t = e.target;
      if (t && (t.tagName === 'A' || (t.closest && t.closest('a')))) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
      }
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
