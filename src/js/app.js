// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';
import burgerMenu from './components/burger-menu';
import swiperSlider from './components/slider';
import tabs from './components/tabs';

(($) => {
  // When DOM is ready
  $(() => {
    //const accordions = new Accordion();
    tabs.init();
    burgerMenu.init();
    swiperSlider.init();
  });
})(jQuery);
