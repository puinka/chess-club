const galleries = document.querySelectorAll(".gallery");
const headerButton = document.querySelector(".header__signup-button");
const footerButton = document.querySelector(".header__signup-button");
const signupPopup = document.querySelector(".popup");
const popupButton = signupPopup.querySelector(".popup__submit-button");

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

function openPopup() {
  signupPopup.classList.add("popup_open");
}

function closePopup() {
  signupPopup.classList.remove("popup_open");
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

headerButton.addEventListener("click", openPopup);
footerButton.addEventListener("click", openPopup);

popupButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  closePopup();
});
