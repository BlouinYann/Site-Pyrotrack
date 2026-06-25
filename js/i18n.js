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
    nav_faq:      'Q&A',
    nav_contact:  'Contact',
    nav_download: 'Download',
    /* Footer */
    footer_mentions: 'Legal Notice',
    footer_cgu:      'Terms of Use',
    footer_cgv:      'Sales Terms',
    footer_right:   '© 2026 PyroTrack System. All rights reserved.',

    faq_page_title: 'FAQ — PyroTrack System',
 
faq_hero_label: 'Frequently asked questions',
faq_hero_title: 'FAQ & Support',
faq_hero_sub: 'Everything you need to know before downloading and using PyroTrack System.',
 
faq_toc_title: 'Categories',
faq_toc_compat: 'Compatibility & technical',
faq_toc_licence: 'License & version',
faq_toc_features: 'Features',
faq_toc_field: 'Field use',
faq_toc_support: 'Support & bugs',
 
// 01 — Compatibility & technical
faq_compat_title: 'Compatibility & technical',
 
faq_compat_q1: 'Which operating system does PyroTrack System run on?',
faq_compat_a1: 'PyroTrack System is developed and tested on Windows 11. The software also work on Windows 10 in principle. Compatibility with macOS and Linux is not guaranteed at this stage.',
 
faq_compat_q2: 'Which DMX adapters are compatible?',
faq_compat_a2: 'PyroTrack System is compatible with any DMX adapter that has a DMX input (DMX In). The software also supports receiving the ArtNet and sACN protocols. No specific brand is required.',
 
faq_compat_q3: 'Does PyroTrack System send DMX?',
faq_compat_a3: 'No. PyroTrack System is a DMX frame reading software only. It receives the DMX signal from your console or control software to extract consumption data. It does not write DMX and does not control devices.',
 
faq_compat_q4: 'Do I need to install additional drivers?',
faq_compat_a4: 'No. Everything the software needs is included in the installer. No additional download or installation is required.',
 
faq_compat_q5: 'Can the software be used without a connected DMX signal?',
faq_compat_a5: 'The software requires an active DMX source (USB, ArtNet or sACN) for consumption tracking to work. Without an incoming signal, the live view will not receive any data.',
 
faq_compat_q6: 'Can multiple DMX universes be managed simultaneously?',
faq_compat_a6: 'Yes. PyroTrack System supports managing multiple DMX universes simultaneously via ArtNet and sACN.',
 
// 02 — License & version
faq_licence_title: 'License & version',
 
faq_licence_q1: 'What are the limitations of the beta version?',
faq_licence_a1: 'The beta version is limited to 10 fixtures, 20 minutes of consumption calculation per session, and PDF export is disabled. The full version will lift all of these limitations.',
 
faq_licence_q2: 'Is the license per machine or per user?',
faq_licence_a2: 'The license can be configured by number of seats. You can purchase a license for a single seat or for a defined number of machines depending on your needs.',
 
faq_licence_q3: 'Does the software work without an internet connection?',
faq_licence_a3: 'Yes. PyroTrack System works offline. License activation requires an internet connection, and a periodic check is performed when a connection is available. The software remains usable between these checks.',
 
// 03 — Features
faq_features_title: 'Features',
 
faq_features_q1: 'What types of effects are supported?',
faq_features_a1: 'PyroTrack System is designed for any stage effect with measurable consumption. Currently supported: flame, smoke, CO₂, sparks, bubbles and confetti. The software is not limited to pyrotechnics — any FX effect with consumption can be tracked.',
 
faq_features_q2: 'How many fixtures can be managed in the full version?',
faq_features_a2: 'The full version has no limit on the number of fixtures.',
 
faq_features_q3: 'Can fixtures be imported from other software (MVR, GDTF…)?',
faq_features_a3: 'MVR or GDTF import is not available at this stage. Fixture management is done entirely from within the software. If a product is missing from the library, you can request it via the contact page, specifying the desired model.',
 
faq_features_q4: 'What is the .pts format?',
faq_features_a4: 'The .pts (PyroTrack Session) format is PyroTrack System\'s proprietary file format. It contains all the data of your project: fixtures, groups, session history. It can only be opened by PyroTrack System.',
 
faq_features_q5: 'Are PDF reports customizable?',
faq_features_a5: 'Not yet. PDF export generates a standardized report. Customization (logo, header) is not available at this time.',
 
// 04 — Field use
faq_field_title: 'Field use',
 
faq_field_q1: 'Is the software tested in real conditions?',
faq_field_a1: 'Yes. PyroTrack System has been used and validated during real show conditions, on a stage laptop.',
 
faq_field_q2: 'Can consumption be tracked from a device other than the main PC?',
faq_field_a2: 'Yes. PyroTrack System includes a password-protected monitoring web page accessible from any device connected to the same local network. This allows a secondary operator (control room, stage) to view consumption in real time without accessing the main PC.',
 
faq_field_q3: 'Does the software support multi-station networking?',
faq_field_a3: 'No, there isn\'t a multi-station mode as such. A single PC runs the software. Other devices on the network can only view the data via the monitoring web page (read-only).',
 
// 05 — Support & bugs
faq_support_title: 'Support & bugs',
 
faq_support_q1: 'Is there documentation or a user manual?',
faq_support_a1: 'Not yet. Documentation is planned. In the meantime, feel free to ask your questions via the contact page.',
 
faq_support_q2: 'How do I report a bug?',
faq_support_a2: 'Send your report via the contact page with BUG — at the start of the subject line. Specify your Windows version, the software version, and the steps to reproduce the issue.',
 
faq_support_q3: 'Is there a community or forum?',
faq_support_a3: 'No forum or Discord yet. You can follow us on Instagram: "https://www.instagram.com/pyrotracksystem" for announcements and updates.',
 
// CTA contact
faq_cta_text: 'Can\'t find your answer? Contact us directly, we respond to every request.',
faq_cta_btn: 'Contact us',
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
