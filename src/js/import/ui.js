import object from 'object-fit-images';
import AOS from 'aos';
// import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';

//select
// $('select').selectize();

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });



//animate
AOS.init({
  offset: 150,
  duration: 600,
  // once: true,
});



//open search
$('.header__connection__search button').on('click', function() {
  if($(this).hasClass('is-active')) {
  } else{
    $(this).closest('.header__connection__search').addClass('is-active').find('div').addClass('is-active');
  }
});
//close search
$('.header__connection__search a').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.header__connection__search').removeClass('is-active');
  $(this).closest('div').removeClass('is-active');
});


//header open
$('.menu-open').on('click', function() {
  $('.header__menu').addClass('is-active');
  $('.header__menu__bg').fadeIn();
});
$('.menu-close, .header__menu__bg').on('click', function() {
  $('.header__menu').removeClass('is-active');
  $('.header__menu__bg').fadeOut();
});

//menu dropdown
$('.header__menu__item-dropdown a').on('click', function() {
  $(this).closest('.header__menu__item-dropdown').toggleClass('dropdown-open').find('.header__menu__dropdown').slideToggle();
});


//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  AOS.refreshHard();
});

