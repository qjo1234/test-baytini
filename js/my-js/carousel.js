const photosCarousel = document.querySelector(".nonloop-block-13");
const carouselNavBox = document.querySelector(".owl-custom-direction");
let timer = null;
let canAutoPlay = false;
let isMainSectionEntered = false;

const owlCarouselAuotPlay = (timePeriod) => {
  if (!canAutoPlay) return;
  timer = setTimeout(() => {
    $(".nonloop-block-13").trigger("next.owl.carousel");
    owlCarouselAuotPlay(timePeriod);
  }, timePeriod);
};

const startAutoPlay = () => {
  canAutoPlay = true;
  owlCarouselAuotPlay(5000);
};

const stopAutoPlay = () => {
  if (timer) {
    clearTimeout(timer);
  }
  canAutoPlay = false;
};

$("main").on("mouseover", function (e) {
  if (isMainSectionEntered) return;

  isMainSectionEntered = true;
  startAutoPlay();
});

photosCarousel.addEventListener("mousedown", (e) => {
  stopAutoPlay();
});

photosCarousel.addEventListener("mouseover", (e) => {
  stopAutoPlay();
});

carouselNavBox.addEventListener("mouseover", (e) => {
  stopAutoPlay();
});

photosCarousel.addEventListener("mouseleave", (e) => {
  startAutoPlay();
});

carouselNavBox.addEventListener("mouseleave", (e) => {
  startAutoPlay();
});
