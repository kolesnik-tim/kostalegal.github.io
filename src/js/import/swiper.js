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
