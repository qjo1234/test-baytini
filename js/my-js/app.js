// Add lang picker to mobile nav bar

const langPicker = document.querySelector("header .dropdown");
const cloneLangPicker = langPicker.cloneNode(true);
const mobileNavbar = document.querySelector(".site-mobile-menu-body");

mobileNavbar.appendChild(cloneLangPicker);

/****************************************/
// Language Picker

const englishBtns = document.querySelectorAll(".english-btn");
const arabicBtns = document.querySelectorAll(".arabic-btn");

for (const enBtn of englishBtns) {
  if (isEn()) enBtn.classList.add("active-language");
  enBtn.onclick = () => {
    if (isEn()) return;

    setLang(ENGLISH_LANG);
    location.reload();
    return false;
  };
}

for (const arBtn of arabicBtns) {
  if (isAr()) arBtn.classList.add("active-language");
  arBtn.onclick = () => {
    if (isAr()) return;

    setLang(ARABIC_LANG);
    location.reload();
    return false;
  };
}

//****************************************************** */

// Static Img

const staticImg = document.getElementById("static-img");

if (staticImg) {
  staticImg.src = isEn() ? "pics/static-en.png" : "pics/static-ar.png";
}
