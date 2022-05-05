// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';
import burgerMenu from './components/burger-menu';
import swiperSlider from './components/slider';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    burgerMenu.init();
    swiperSlider.init();
  });
})(jQuery);

$( document ).ready(function() {
  // for active element`s menu addClass('active')
  var pathname = window.location.pathname;
  $(".nav__list .nav__item a").each(
    function(){
      if ($(this).attr('href') == pathname){
        $(this).parent('.nav__item').addClass("active");
      }
    }
  );
  //for form focus input
  $('input').on('focus', function(){
    $(this).parent('.form-group').children('label').addClass('focus');
  })
  //for form focusout input
  $('input').focusout(function() {
    if ($(this).val() == ""){
      $(this).parent('.form-group').children('.validation-error').addClass("active");
      $(this).addClass("danger");
      $(this).parent('.form-group').children('label').removeClass('focus');
    }
    else if ($(this).parent('.form-group').children('.validation-error').hasClass("active")){
      $(this).parent('.form-group').children('.validation-error').removeClass("active");
      $(this).removeClass("danger");
    }
  })
  //for form focus textarea
  $('textarea').on('focus', function(){
    $(this).parent('.form-group').children('label').addClass('focus');
  })
  //for form focusout textarea
  $('textarea').focusout(function() {
    $(this).parent('.form-group').children('label').removeClass('focus');
  })
});
