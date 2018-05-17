import sayHello from './lib/sayHello.js';
import slick from 'slick-carousel';
$(document).ready(function() {
  sayHello();
  $('.js-slider').slick({
    variableWidth: true,
    appendArrows: $('.js-slider-nav')
  });

  $('.js-more-btn').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.js-more-parent').find('.js-more-text').slideToggle();
  });
});
