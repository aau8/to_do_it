$(document).ready(function () {
  $('.header__burger').click(function() {
    $('.header__menu, .header__burger, .header__list').toggleClass('active');
    $('body').toggleClass('lock');
  })
});