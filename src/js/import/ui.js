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
  once: true,
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






//Ajax отправка формы
document.querySelectorAll('.form-send').forEach(function(item) {
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
        var data = xhr.responseText;
        form.outerHTML = '<h2>Спасибо, Ваша заявка отправлена</h2>';
      }
    };
    xhr.send(formData);

    return false;
  }
}


// $('#submit').click(function() { 
//   var name = $('input[name=fio]').val(); 
//   var tel = $('input[name=tel]').val();
//   var otpravka = true;
//   if(name === '') { 
//     otpravka = false;
//   }
//   if(tel === '') { 
//     otpravka = false;
//   }
//   if(otpravka) 
//   {
 
//     let dannie = {'polz_name':name, 'polz_tel':tel};
//     $.post('js/senda.php', dannie, function(otvet) { 
//       rezultat = '<div style="color:#D80018;">'+otvet.text+'</div>';
//       $('#form_result').hide().html(rezultat).slideDown();
//     }, 'json'); 
//   }
// });
