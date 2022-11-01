$(function () {
  var $plane = $('.plane'); // Cache your elements!

  $(window).scroll(function () {
    $plane.css({ transform: 'rotate(' + (window.pageYOffset % 360) + 'deg)' });
  });
});
