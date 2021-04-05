"use strict";

$(document).ready(function () {
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

let button = document.getElementsByClassName('slider__content-button');
let dots = document.getElementsByClassName('slider-content_dots');
let readMoreText = document.getElementsByClassName('slider__more-text');
let offBtn = document.getElementsByClassName('slider__content-button--active');
$(function () {
  $(button).click(function (e) {
    e.preventDefault();
    $(this).toggleClass('slider__content-button--active');
    $(dots).toggleClass('slider__text--is-hidden');
    $(readMoreText).toggleClass('slider__text--is-show');
    $('.slider__content-button--read').toggleClass('slider__text--is-hidden');
    $('.slider__content-button--unread').toggleClass('slider__text--is-show');
  });
});