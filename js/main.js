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

  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section-head, .deal-card, .cat-card, .eco-card, .split-card, .steps li');
    sections.forEach(function (el) { el.classList.add('reveal'); });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    sections.forEach(function (el) { io.observe(el); });
  }
})();
