var $krabbyPatty = $('.hamburger-menu');

(function() {
  'use strict';
  $krabbyPatty.click(function(e) {
    addCheese(e);
  })
  $krabbyPatty.on('touchend', function(e) {
    addCheese(e);
  })
})();

var addCheese = function(e) {
    e.preventDefault();
  if ($krabbyPatty.hasClass('active')){
      $krabbyPatty.removeClass('active');
      $('.menu-overlay').fadeToggle( 'fast', 'linear' );
      $('.menu .menu-list').slideToggle( 'slow', 'swing' );
      $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
  } else {
      $krabbyPatty.addClass('active');
      $('.menu-overlay').fadeToggle( 'fast', 'linear' );
      $('.menu .menu-list').slideToggle( 'slow', 'swing' );
      $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
  }
};