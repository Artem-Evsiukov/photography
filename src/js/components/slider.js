const swiperSlider = (() => {
  const introSwiper = new Swiper('.js-intro-slider', {
    slidesPerView: 1,
    speed: 1000,
    centerInsufficientSlides: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
