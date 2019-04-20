import Swiper from 'swiper';


//home intro
var swiper = new Swiper('.swiper-intro', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-intro-next',
    prevEl: '.swiper-intro-prev',
  },
  pagination: {
    el: '.swiper-pagination-intro',
    clickable: true,
  },
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 1,
  //     spaceBetween: 30
  //   }
  // }
});

//home offer
var swiper = new Swiper('.swiper-offer', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-offer-next',
    prevEl: '.swiper-offer-prev',
  },
});
