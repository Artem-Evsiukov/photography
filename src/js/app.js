// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';
import burgerMenu from './components/burger-menu';
import swiperSlider from './components/slider';
import tabs from './components/tabs';
import initSelects from './components/select';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    tabs.init();
    burgerMenu.init();
    swiperSlider.init();
    initSelects();
  });
})(jQuery);

$(document).ready(function () {
  // for active element`s menu addClass('active')
  var pathname = window.location.pathname;
  $('.nav__list .nav__item a').each(function () {
    if ($(this).attr('href') == pathname) {
      $(this).parent('.nav__item').addClass('active');
    }
  });
  //for form focus input
  $('input').on('focus', function () {
    $(this).parent('.form-group').children('label').addClass('focus');
  });
  //for form focusout input
  $('input').focusout(function () {
    if ($(this).val() == '') {
      $(this).parent('.form-group').children('.validation-error').addClass('active');
      $(this).addClass('danger');
      $(this).parent('.form-group').children('label').removeClass('focus');
    } else if ($(this).parent('.form-group').children('.validation-error').hasClass('active')) {
      $(this).parent('.form-group').children('.validation-error').removeClass('active');
      $(this).removeClass('danger');
    }
  });
  //for form focus textarea
  $('textarea').on('focus', function () {
    $(this).parent('.form-group').children('label').addClass('focus');
  });
  //for form focusout textarea
  $('textarea').focusout(function () {
    $(this).parent('.form-group').children('label').removeClass('focus');
  });
});

Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: 'top',

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty('--bg-image', `url("${slide.$thumb.src}")`);
    },
    'Carousel.change': (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty('--bg-image', `url("${slide.$thumb.src}")`);
    },
  },
});
