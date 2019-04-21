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




//news
$('.home-news-more').on('click', function(event) {
  event.preventDefault();
  $('.home-news .col-sm-4.col-xs-12:nth-child(n+2)').fadeIn();
});


//header open
$('.menu-open').on('click', function() {
  $('.header__menu').addClass('is-active');
});
$('.menu-close').on('click', function() {
  $('.header__menu').removeClass('is-active');
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






//Ajax отправка формы
document.querySelectorAll('.footer__form').forEach(function(item) {
  item.addEventListener('submit', function(event) {
    sendAjaxForm(this, event);
  });});
function sendAjaxForm(form, event) {
  var fields = form.querySelectorAll('input, textarea');

  var formHasError =  Array.prototype.reduce.call(fields, function(invalidCount, currentItem) {
    if (currentItem.matches(':invalid')) invalidCount++;
  }, 0);

  if (formHasError) {
    return true;
  } else {
    event.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'js/send.php');
    xhr.onreadystatechange = function() {
      if ((xhr.readyState === 4) && (xhr.status === 200)) {
        data = xhr.responseText;
        form.outerHTML = '<h2 style-"color: #fdb827; text-align: center;">Мы перезвоним Вам в ближайшее время для подтверждения заказа</h2><h3 style="color: #fdb827; text-align: center;">Спасибо, Ваш заказ отправлен</h3>';
      }
    };
    xhr.send(formData);

    return false;
  }
}
