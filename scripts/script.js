const galleries = document.querySelectorAll(".gallery");

function getPosition(number, slides) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  return (slideWidth + 20) * number;
}

function setActiveIndicator(indicators, number) {
  indicators.forEach((item) => {
    item.classList.remove("gallery__page-indicator_active");
  });
  indicators[number].classList.add("gallery__page-indicator_active");
}

function setActiveIndicator(indicators, number) {
  indicators.forEach((item) => {
    item.classList.remove("gallery__page-indicator_active");
  });
  indicators[number].classList.add("gallery__page-indicator_active");
}

function setActiveIndicator(indicators, number) {
  indicators.forEach((item) => {
    item.classList.remove("gallery__page-indicator_active");
  });
  indicators[number].classList.add("gallery__page-indicator_active");
}

function slideToPosition(indicators, number, slides, wrap) {
  setActiveIndicator(indicators, number);
  const position = getPosition(number, slides);
  wrap.scrollLeft = position;
}

function checkDirection(wrap, indicators) {
  if (wrap.scrollLeft < 180) {
    setActiveIndicator(indicators, 0);
  }

  if (wrap.scrollLeft > 180 && wrap.scrollLeft < 550) {
    setActiveIndicator(indicators, 1);
  }

  if (wrap.scrollLeft > 550) {
    setActiveIndicator(indicators, 2);
  }
}

galleries.forEach((gallery) => {
  const paginationIndicators = gallery.querySelectorAll(
    ".gallery__page-indicator"
  );
  const sliderWrap = gallery.querySelector(".gallery__slides-wrap");
  const slides = gallery.querySelectorAll(".gallery__slide");

  gallery.addEventListener("touchend", () =>
    checkDirection(sliderWrap, paginationIndicators)
  );

  paginationIndicators.forEach((item, i, arr) => {
    item.addEventListener("click", () =>
      slideToPosition(arr, i, slides, sliderWrap)
    );
  });
});
