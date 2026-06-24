/**
 * components.js — Charge header.html et footer.html dans chaque page
 * Placer ce script AVANT la fermeture </body>, après i18n.js
 */
(function () {
  function loadComponent(selector, file, callback) {
    var el = document.querySelector(selector);
    if (!el) return;
    fetch(file)
      .then(function (r) {
        if (!r.ok) throw new Error('Impossible de charger ' + file);
        return r.text();
      })
      .then(function (html) {
        el.innerHTML = html;
        if (callback) callback();
      })
      .catch(function (e) { console.error(e); });
  }

  /* -- Header -- */
  loadComponent('#header-placeholder', '../header.html', function () {
    /* Ré-initialise le burger menu après injection */
    var burger = document.getElementById('burger');
    var menu   = document.getElementById('mobile-menu');
    if (burger && menu) {
      burger.addEventListener('click', function () {
        menu.classList.toggle('open');
        burger.classList.toggle('open');
      });
    }

    /* -- i18n : applique la langue sauvegardée APRÈS injection du header --
       Le header contient le bouton #lang-btn et ses data-i18n,
       il faut donc attendre qu'il soit dans le DOM avant d'appeler i18nApply. */
    if (typeof i18nApply === 'function') {
      var saved = i18nGetCookie ? i18nGetCookie() : null;
      var lang  = saved || (navigator.language.startsWith('en') ? 'en' : 'fr');
      i18nApply(lang);
    }
  });

  /* -- Footer -- */
  loadComponent('#footer-placeholder', '../footer.html');
})();
