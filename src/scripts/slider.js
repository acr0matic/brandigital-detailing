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

const aboutSlider = new Swiper('.slider-about', {
  slidesPerView: 1,
  speed: 300,
  spaceBetween: 24,
  simulateTouch: false,

  navigation: {
    nextEl: '.about__slider .swiper-button-next',
    prevEl: '.about__slider .swiper-button-prev',
  },
});

const aboutGallery = new Swiper('.slider-gallery', {
  slidesPerView: 1,
  speed: 300,
  spaceBetween: 24,
  simulateTouch: false,

  navigation: {
    nextEl: '.about__gallery .swiper-button-next',
    prevEl: '.about__gallery .swiper-button-prev',
  },
});

if (isSmallTablet) {
  const service = new Swiper('.slider-service', {
    slidesPerView: 1.6,
    speed: 300,
    spaceBetween: 24,
    simulateTouch: false,

    navigation: {
      nextEl: '.service .swiper-button-next',
      prevEl: '.service .swiper-button-prev',
    },

    scrollbar: {
      el: '.slider-service .swiper-scrollbar',
    },
  });
}