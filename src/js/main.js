$(document).ready(function(){
  $('.reviews__slider').slick({
    dots: true,
    adaptiveHeight: true,
    dotsClass: 'slick-dots slider__dots',
    customPaging: function(slick, index) {
      var image = $(slick.$slides[index]).find('.slider__img').attr('src');
      return '<img src="' + image + '" alt="" /> '
    }
  });
});

(() => {
  const buttonSlider = {
    button: document.querySelectorAll('.slider__content-button'),
    readMore: document.querySelector('.slider__content-button--read'),
    hideText: document.querySelector('.slider__content-button--unread'),
    text: document.querySelector('.slider__more-text'),
    dots: document.querySelector('.slider-content_dots')
  };

  buttonSlider.button.addEventListener('click', toggleModal);

  function toggleModal() {
    buttonSlider.readMore.classList.toggle('slider__text--is-hidden');
    buttonSlider.dots.classList.toggle('slider__text--is-hidden');
    buttonSlider.text.classList.toggle('slider__text--is-show');
    buttonSlider.hideText.classList.toggle('slider__text--is-show');
  }
})();