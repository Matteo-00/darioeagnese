// Traduzioni del sito.
// L'italiano è il testo già scritto nelle pagine HTML: qui c'è l'inglese,
// più i messaggi creati da JavaScript in entrambe le lingue.
const TRANSLATIONS = {
  en: {
    // Titoli delle pagine
    'doc.home': 'Dario & Agnese – Our wedding',
    'doc.admin': 'Dario & Agnese – RSVPs',

    // Login
    'login.alt': 'Dario and Agnese',
    'login.text': 'Enter the password to continue',
    'login.error': 'Incorrect password',
    'login.button': 'Enter',

    // Apertura
    'hero.subtitle': 'Our wedding',
    'hero.date': '19 June 2027',

    // Introduzione
    'intro.title': 'With great joy',
    'intro.text': 'Sharing this new chapter of our lives with you makes it even more special.<br>\n      In this space we have lovingly gathered every detail, so that we can celebrate this very important moment together.',

    // Foto
    'photo.alt': 'Dario and Agnese',

    // Dettagli evento
    'details.title': 'Our special day',
    'details.date': 'Date',
    'details.dateText': '<strong>SATURDAY 19 JUNE 2027</strong><br>4:00 pm',
    'details.place': 'Venue',
    'details.ceremony': 'Ceremony',
    'details.reception': 'Reception',

    // Regalo
    'gift.title': 'A gift for us',
    'gift.text': 'Having you by our side will be the greatest gift of all, but if you would like to give us something, you can help us shape our plans and dreams.',
    'gift.holder': 'Account holder: Dario Cambiotti',
    'gift.copy': 'Copy IBAN',

    // RSVP
    'rsvp.title': 'Kindly RSVP',
    'rsvp.text': 'Please let us know whether you can join us by filling in the form',
    'rsvp.button': 'RSVP',
    'footer.text': "We can't wait to celebrate with you",

    // Modulo di conferma
    'form.personal': 'Your details',
    'form.firstName': 'First name *',
    'form.lastName': 'Last name *',
    'form.attendance': 'Attendance',
    'form.accept': 'Joyfully accept',
    'form.decline': 'Regretfully decline',
    'form.guests': 'Number of guests *',
    'form.guestNames': 'Full names of guests',
    'form.guestNamesPh': 'e.g. Mario Rossi, Giulia Bianchi',
    'form.message': 'Message for the couple (optional)',
    'form.messagePh': "We're sorry we can't be there...",
    'form.allergies': 'Allergies / intolerances / special menus',
    'form.yes': 'Yes',
    'form.no': 'No',
    'form.allergiesDetail': 'Describe your allergies, intolerances or special menu requests *',
    'form.allergiesPh': 'e.g. coeliac, vegetarian menu…',
    'form.submit': 'Send RSVP',
    'form.sending': 'Sending...',
    'form.sent': 'RSVP sent successfully! Thank you',
    'form.error': 'Something went wrong. Please try again.',

    // Pagina conferme
    'admin.title': 'Wedding RSVPs',
    'admin.subtitle': 'Dario & Agnese - Guest management',
    'admin.back': '← Back to site',
    'admin.searchAll': '🔍 Search all',
    'admin.byFirstName': 'Search by first name',
    'admin.firstName': 'First name',
    'admin.byLastName': 'Search by last name',
    'admin.lastName': 'Last name',
    'admin.attendance': 'Attendance',
    'admin.all': 'All',
    'admin.attending': 'Attending',
    'admin.notAttending': 'Not attending',
    'admin.allergies': 'Allergies',
    'admin.yes': 'Yes',
    'admin.no': 'No',
    'admin.sortBy': 'Sort by',
    'admin.sortDateDesc': 'Date (newest)',
    'admin.sortDateAsc': 'Date (oldest)',
    'admin.sortFirstAsc': 'First name (A-Z)',
    'admin.sortFirstDesc': 'First name (Z-A)',
    'admin.sortLastAsc': 'Last name (A-Z)',
    'admin.sortLastDesc': 'Last name (Z-A)',
    'admin.clear': 'Clear filters',
    'admin.statTotal': 'Total RSVPs',
    'admin.statAttending': 'Attending',
    'admin.statNotAttending': 'Not attending',
    'admin.statGuests': 'Number of guests',
    'admin.statAllergies': 'With allergies',
    'admin.loading': 'Loading data...',
    'admin.noResults': 'No results found',
    'admin.colFirstName': 'First name',
    'admin.colLastName': 'Last name',
    'admin.colAttendance': 'Attendance',
    'admin.colGuests': 'No. of guests',
    'admin.colGuestNames': 'Guest names',
    'admin.colMessage': 'Message',
    'admin.colAllergies': 'Allergies',
    'admin.colAllergyDetails': 'Allergy details',
    'admin.colDate': 'RSVP date',
    'admin.badgeYes': '✓ Yes',
    'admin.badgeNo': '✗ No',
    'admin.loadError': 'Error loading data. Please try again.',
    'admin.locale': 'en-GB'
  },

  // Solo i testi che non sono già scritti nelle pagine
  it: {
    'form.sending': 'Invio in corso...',
    'form.sent': 'Conferma inviata con successo! Grazie',
    'form.error': "Errore nell'invio. Riprova.",
    'admin.yes': 'Sì',
    'admin.no': 'No',
    'admin.badgeYes': '✓ Sì',
    'admin.badgeNo': '✗ No',
    'admin.loadError': 'Errore nel caricamento dei dati. Riprova.',
    'admin.locale': 'it-IT'
  }
};

let currentLang = 'it';
try {
  if (localStorage.getItem('lang') === 'en') currentLang = 'en';
} catch (e) { }

function t(key) {
  const value = TRANSLATIONS[currentLang][key];
  return value !== undefined ? value : (TRANSLATIONS.it[key] !== undefined ? TRANSLATIONS.it[key] : key);
}

// Sostituisce un attributo (o il contenuto) con la traduzione, ricordando l'originale italiano
function translateAttr(selector, dataKey, read, write) {
  document.querySelectorAll(selector).forEach(el => {
    const key = el.dataset[dataKey];
    const store = dataKey + 'It';
    if (el.dataset[store] === undefined) el.dataset[store] = read(el);
    const en = TRANSLATIONS.en[key];
    write(el, currentLang === 'en' && en !== undefined ? en : el.dataset[store]);
  });
}

function applyLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'it';
  try { localStorage.setItem('lang', currentLang); } catch (e) { }
  const root = document.documentElement;
  root.lang = currentLang;

  translateAttr('[data-i18n]', 'i18n', el => el.innerHTML, (el, v) => { el.innerHTML = v; });
  translateAttr('[data-i18n-placeholder]', 'i18nPlaceholder', el => el.placeholder, (el, v) => { el.placeholder = v; });
  translateAttr('[data-i18n-alt]', 'i18nAlt', el => el.alt, (el, v) => { el.alt = v; });
  translateAttr('[data-i18n-title]', 'i18nTitle', el => el.title, (el, v) => { el.title = v; });

  if (root.dataset.i18nDoc) {
    if (root.dataset.docIt === undefined) root.dataset.docIt = document.title;
    document.title = currentLang === 'en' ? TRANSLATIONS.en[root.dataset.i18nDoc] : root.dataset.docIt;
  }

  document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: currentLang }));
}

document.addEventListener('click', function (e) {
  const btn = e.target.closest('.lang-switch [data-lang]');
  if (btn) applyLang(btn.dataset.lang);
});
