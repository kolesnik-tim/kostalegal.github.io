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
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  }
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


//corporate
var swiper = new Swiper('.swiper-corporate', {
  slidesPerView: 4,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-corporate-next',
    prevEl: '.swiper-corporate-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 1,
    }
  }
});
