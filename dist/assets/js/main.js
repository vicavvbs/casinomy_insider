/* CasinoMY Insider — vanilla replacement for jQuery + theme main.js */
(function () {
  'use strict';

  /* ---- mobile menu ---- */
  var menu = document.getElementById('mobile-menu');
  var toggle = document.querySelector('.menu-toggle');
  var closeBtn = document.querySelector('.mobile-menu-close');
  var lastFocus = null;

  function openMenu() {
    if (!menu) return;
    lastFocus = document.activeElement;
    menu.classList.add('is-open');
    menu.removeAttribute('inert');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      var first = menu.querySelector('a, button');
      if (first) first.focus();
    });
  }

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('inert', '');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menu) {
    menu.addEventListener('click', function (e) { if (e.target === menu) closeMenu(); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) closeMenu();
  });

  /* ---- FAQ accordions ---- */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });
})();
