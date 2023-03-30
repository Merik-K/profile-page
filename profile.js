// $('#menu').on('click', function () {
//   $('#pfp').toggle(500);
// });
$('#menu').on('click', function () {
  document.getElementById('main').style.marginLeft('0');
  $('#pfp').hide(500);
});
$('#menu').on('click', function () {
  document.getElementById('main').style.marginLeft('12.5rem');
  $('#pfp').show(500);
});

$('#pfpicon');
