const promotion = new Swiper('.slider-promotion', {
  slidesPerView: 2,
  speed: 300,
  spaceBetween: 24,
  simulateTouch: false,

  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },

  scrollbar: {
    el: '.slider-promotion .swiper-scrollbar',
  },
});