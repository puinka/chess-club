const galleries = document.querySelectorAll(".gallery");

const gallery = galleries[1];
const paginationIndicators = gallery.querySelectorAll(
  ".gallery__page-indicator"
);

const sliderWrap = gallery.querySelector(".gallery__slides-wrap");

function setActiveIndicator(indicators, number) {
  indicators.forEach((item) => {
    item.classList.remove("gallery__page-indicator_active");
  });
  indicators[number].classList.add("gallery__page-indicator_active");
}
