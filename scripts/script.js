const galleries = document.querySelectorAll(".gallery");

const gallery = galleries[1];

const paginationIndicators = gallery.querySelectorAll(
  ".gallery__page-indicator"
);
const sliderWrap = gallery.querySelector(".gallery__slides-wrap");
const slides = gallery.querySelectorAll(".gallery__slide");

function getPosition(number) {
  const slideWidth = slides[0].getBoundingClientRect().width;
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

////////////////

function checkDirection() {
  if (sliderWrap.scrollLeft < 180) {
    setActiveIndicator(paginationIndicators, 0);
  }

  if (sliderWrap.scrollLeft > 180 && sliderWrap.scrollLeft < 550) {
    setActiveIndicator(paginationIndicators, 1);
  }

  if (sliderWrap.scrollLeft > 550) {
    setActiveIndicator(paginationIndicators, 2);
  }
}

gallery.addEventListener("touchend", checkDirection);

// galleries.forEach((item) => {
//   item.addEventListener("touchstart", (e) => {
//     touchstartX = e.changedTouches[0].screenX;
//   });

//   item.addEventListener("touchend", (e) => {
//     touchendX = e.changedTouches[0].screenX;
//     checkDirection();
//   });
// });
