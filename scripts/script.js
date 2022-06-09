const galleries = document.querySelectorAll(".gallery");

const gallery = galleries[1];

const paginationIndicators = gallery.querySelectorAll(
  ".gallery__page-indicator"
);
const sliderWrap = gallery.querySelector(".gallery__slides-wrap");
const slides = gallery.querySelectorAll(".gallery__slide");
const slideWidth = slides[1].getBoundingClientRect().width;

function getPosition(number) {
  return (slideWidth + 20) * number;
}

function setActiveIndicator(indicators, number) {
  indicators.forEach((item) => {
    item.classList.remove("gallery__page-indicator_active");
  });
  indicators[number].classList.add("gallery__page-indicator_active");
}

function slideToPosition(indicators, number) {
  setActiveIndicator(indicators, number);
  const position = getPosition(number);
  sliderWrap.scrollLeft = position;
}

paginationIndicators.forEach((item, i, arr) => {
  item.addEventListener("click", () => slideToPosition(arr, i));
});
