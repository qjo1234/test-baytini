/**
 *
 * @param {String} key
 * @param {String} val
 */
const setLocalStorage = (key, val) => {
  window.localStorage.setItem(key, val);
};

/**
 *
 * @param {String} key
 */
const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

const LANG_KEY = "lang-key";

const getLangFromLocalStorage = () => {
  const langFromLocalStorage = getLocalStorage(LANG_KEY);

  return langFromLocalStorage &&
    (langFromLocalStorage === ARABIC_LANG ||
      langFromLocalStorage === ENGLISH_LANG)
    ? langFromLocalStorage
    : ENGLISH_LANG;
};

const ARABIC_LANG = "arabic";
const ENGLISH_LANG = "englsih";

let currentLang = getLangFromLocalStorage();

const isEn = () => currentLang === ENGLISH_LANG;
const isAr = () => currentLang === ARABIC_LANG;
const getCurrentLang = () => currentLang;

const setLang = (language) => {
  currentLang =
    language === ARABIC_LANG || language === ENGLISH_LANG
      ? language
      : ENGLISH_LANG;

  setLocalStorage(LANG_KEY, language);
};

//***********************************************************************************************/
