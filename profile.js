$(window).on('load', function () {
  $('#tabs1').slideUp(1000).delay(200).slideDown(3000).hide(200);
  $('#tabs2').animate({ opacity: 0.8 }, 1000).animate({ opacity: 1 }, 2000);
  $('#tabs3').hide(500);
  $('#tabs4').hide(500);
});

$('p').hover(function () {
  $(this).append($('<span> lols </span>'));
});

$('.headerName').hover(
  function () {
    $(this).hide(5000).show(10);
  },
  function () {
    $(this).find('hover').last().remove();
  }
);

$('.pfpicon').on('click', function () {
  $('#menu').show(500);
  $('.main').css('marginLeft', '15.7rem').css('backgroundColor', 'none');
});
$('#close').on('click', function () {
  $('#menu').hide(500);
  $('.main').css('marginLeft', '3.5rem');
});
$('.hobbie').on('click', function () {
  $('#tabs1').toggle(500);
});
$('.about').on('click', function () {
  $('#tabs2').toggle(500);
});
$('.loc').on('click', function () {
  $('#tabs3').toggle(500);
});
$('.trip').on('click', function () {
  $('#tabs4').toggle(500);
});
