$(document).ready(function() {
  'use strict';
  // activate ScrollSpy

  var topoffset = 50;

  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

// Add .inbody class to the navbar if the page is not HOME
  function darkenNav() {
    var hash = $('body').find('li.active a').attr('href');

    if (hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  }

  darkenNav();

// Add .inbody class to the navbar when ScrollSpy event is triggered
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
    darkenNav();
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  // Automatically generate carousel indicators
  var slideQty = $('#featured .item').length;

  for (var i = 0; i < slideQty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
    $('#featured ol').append(insertText);
  }
  
  $('.carousel').carousel({
    interval: false
  });
});
