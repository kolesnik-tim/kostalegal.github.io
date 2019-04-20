import object from 'object-fit-images';
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


$('.header__connection__search button').on('click', function() {
  if($(this).hasClass('is-active')) {
  } else{
    $(this).closest('.header__connection__search').addClass('is-active').find('div').css({'width': '350px'});
  }
});

$('.header__connection__search a').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.header__connection__search').removeClass('is-active');
  $(this).closest('div').css({'width': '0px'});
});
