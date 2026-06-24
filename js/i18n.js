/* -------------------------------------------------------------
   PyroTrack System — i18n engine
   Usage :
     - Ajouter data-i18n="clé" sur les éléments à traduire
     - data-i18n-html="clé" pour le innerHTML (balises incluses)
     - data-i18n-attr="title:clé,placeholder:clé2" pour les attributs
   ------------------------------------------------------------- */

/* Le français est la langue par défaut : le texte FR est directement dans le HTML.
   i18nApply() n'est appelée que pour 'en' — pas besoin d'un bloc fr ici. */

const I18N = {

  en: {
    _lang: 'en',

    page_title: 'PyroTrack System — Consumption Tracking Software',

    hero_eyebrow:   'Consumption tracking system',
    hero_sub:       'Nothing is lost, everything is tracked.',
    hero_download:  '⬇ Download',
    hero_discover:  'Discover →',

    about_eyebrow:    '01 — Overview',
    about_title_html: 'A <em>professional</em> tool<br>for pyrotechnic shows',
    about_p1: "PyroTrack System is a desktop application built for pyrotechnicians and show technicians. It provides real-time tracking of pyrotechnic product consumption, manages firing groups, and generates detailed reports for every session.",
    about_p2: "Designed with a precise dark interface, it integrates directly with your DMX setup and offers a live view of every firing station.",
    about_badge1: '🎯 Project management',
    about_badge2: '📡 DMX interface',
    about_badge3: '📊 PDF reports',

    mockup_active:   'Active products',
    mockup_consumed: 'Consumed',
    mockup_remaining:'Remaining',
    mockup_progress: 'Consumption progress',

    features_eyebrow:    '02 — Features',
    features_title_html: 'Everything you need,<br><em>nothing more.</em>',

    feat1_name: 'Project management',
    feat1_desc: 'Import, save and load your projects in <code>.pts</code> format. Instantly resume your last session.',
    feat1_tag:  'Projects',

    feat2_name: 'DMX integration',
    feat2_desc: 'Native connection via DMX/USB interface or ARTNET and SACN. Visualise every channel state, assign firing groups in real time.',
    feat2_tag:  'DMX512',

    feat3_name: 'Live view',
    feat3_desc: 'Real-time dashboard with arming state, session progress and instant visual alerts.',
    feat3_tag:  'Live',

    feat4_name: 'Firing groups',
    feat4_desc: 'Create and manage pyrotechnic groups with colour assignment, linked products and consumption counters.',
    feat4_tag:  'Groups',

    feat5_name: 'Detailed reports',
    feat5_desc: 'Full history of every session: consumed and remaining products, by group and by type. Export and archiving.',
    feat5_tag:  'Reports',

    feat6_name: 'Advanced settings',
    feat6_desc: 'Configure your COM port, display preferences and arming behaviour to match your hardware.',
    feat6_tag:  'Config',

    download_eyebrow:    '03 — Download',
    download_title_html: 'Beta<br><span class="accent">available.</span>',
    download_sub_html:   'The software is currently available as a free version only.<br>Limited to 10 fixtures, 20 minutes of consumption tracking and PDF exports disabled.',
    download_btn:        '⬇ Download for Windows',
    download_soon:       'Final version in development',

    contact_eyebrow:    '04 — Contact',
    contact_title_html: 'Get in<br><span class="accent">touch.</span>',
    contact_sub_html:   'For any questions about the software, its features,<br>or to report a bug, reach us via the form below.',
    contact_btn:        'Contact us',

    lang_btn:   'FR',
    lang_title: 'Passer en français',

    /* Download page */
    dl_title:     'Download Pyro<em>Track</em>System<br>for Windows.',
    dl_intro:     'The software is currently in beta and is available for Windows users.',
    dl_btn_loading: 'Loading...',
    dl_platform:  'Available for Windows (x64)',
    dl_changelog: 'See what\'s new',
    dl_old_title: 'Previous <em>Versions</em>',
    /* Contact page */
    ct_title:           'Contact Pyro<em>Track</em>System.',
    ct_intro:           'For any questions about the software, its features, or to report a bug, you can reach us via the form below.',
    ct_field_lastname:  'Last name',
    ct_field_firstname: 'First name',
    ct_field_email:     'Email address',
    ct_field_subject:   'Subject',
    ct_field_message:   'Message',
    ct_submit:          'Send',
    ct_iframe_loading:  'Loading…',
    /* Nav */
    nav_home:     'Home',
    nav_about:    'About',
    nav_features: 'Features',
    nav_contact:  'Contact',
    nav_download: 'Download'
  } 
};

/* -------------------------------------------------------------
   Moteur
   ------------------------------------------------------------- */

const COOKIE_NAME = 'pts_lang';
const COOKIE_DAYS = 365;

function i18nGetCookie() {
  const m = document.cookie.match('(^|;)\\s*' + COOKIE_NAME + '\\s*=\\s*([^;]+)');
  return m ? m.pop() : null;
}

function i18nSetCookie(val) {
  const d = new Date();
  d.setTime(d.getTime() + COOKIE_DAYS * 864e5);
  document.cookie = COOKIE_NAME + '=' + val + ';expires=' + d.toUTCString() + ';path=/';
}

function i18nApply(lang) {
  if (lang === 'fr') {
    /* Retour au français : restaurer les valeurs originales sauvegardées */
    document.documentElement.lang = 'fr';

    document.querySelectorAll('[data-i18n-orig]').forEach(el => {
      const svg = el.querySelector('svg');
  if (svg) {
    // Trouve ou crée le span label
    let label = el.querySelector('[data-lang-label]');
    if (label) label.textContent = el.getAttribute('data-i18n-orig');
  } else {
    el.textContent = el.getAttribute('data-i18n-orig');
  }
});
    document.querySelectorAll('[data-i18n-html-orig]').forEach(el => {
      el.innerHTML = el.getAttribute('data-i18n-html-orig');
    });
    document.querySelectorAll('[data-i18n-attr-orig]').forEach(el => {
      el.getAttribute('data-i18n-attr-orig').split(',').forEach(pair => {
        const [attr, val] = pair.trim().split(':');
        el.setAttribute(attr, val);
      });
    });
    const label = document.querySelector('[data-lang-label]');
    if (label) label.textContent = lang === 'fr' ? 'EN' : 'FR';
    return;
  }

  const t = I18N[lang];
  if (!t) return;

  document.documentElement.lang = t._lang;
  if (t.page_title) document.title = t.page_title;

  /* data-i18n → textContent */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    /* Sauvegarder l'original FR la première fois */
    if (!el.hasAttribute('data-i18n-orig')) {
      el.setAttribute('data-i18n-orig', el.textContent);
    }
    el.textContent = t[key];
  });

  /* data-i18n-html → innerHTML */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] === undefined) return;
    if (!el.hasAttribute('data-i18n-html-orig')) {
      el.setAttribute('data-i18n-html-orig', el.innerHTML);
    }
    el.innerHTML = t[key];
  });

  /* data-i18n-attr → attributs */
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const origParts = [];
    el.getAttribute('data-i18n-attr').split(',').forEach(pair => {
      const [attr, key] = pair.trim().split(':');
      if (t[key] === undefined) return;
      origParts.push(attr + ':' + (el.getAttribute(attr) || ''));
      el.setAttribute(attr, t[key]);
    });
    if (origParts.length && !el.hasAttribute('data-i18n-attr-orig')) {
      el.setAttribute('data-i18n-attr-orig', origParts.join(','));
    }
  });
}

function i18nToggle() {
  const current = i18nGetCookie() || 'fr';
  const next = current === 'fr' ? 'en' : 'fr';
  i18nSetCookie(next);
  i18nApply(next);
}

/* -- Init au chargement --
   On applique la langue sur le contenu de la page (sections, etc.)
   Le header est injecté de façon asynchrone par components.js,
   qui rappelle i18nApply() une fois le header dans le DOM. */
document.addEventListener('DOMContentLoaded', () => {
  const saved = i18nGetCookie();
  const lang = saved || (navigator.language.startsWith('en') ? 'en' : 'fr');
  if (!saved) i18nSetCookie(lang);
  i18nApply(lang); /* traduit le body — le header sera re-traduit par components.js */
});
