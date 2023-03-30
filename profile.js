$(window).on('load', function () {
  $('#tabs1').slideUp(1000).delay(200).slideDown(3000);
  $('#tabs2').animate({ opacity: 0.8 }, 1000).animate({ opacity: 1 }, 2000);
});

$('p').hover(function () {
  $(this).append($('<span> lols </span>'));
});

$('nav').hover(
  function () {
    $(this).hide(5000).show(10);
  },
  function () {
    $(this).find('hover').last().remove();
  }
);

$('.pfpicon').on('click', function () {
  $('#menu').toggle(500);
  $('.main').css('marginLeft', '3.5rem').css('backgroundColor', 'none');
});
$(function () {
  $('#menu, .tabs li');
});
