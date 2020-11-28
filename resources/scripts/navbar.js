$(window).ready(function(){
    $('.menu-toggle-button').click(function(){
      $('.main-navbar').toggleClass('main-navbar-open',500);
      $(this).toggleClass('open');
    });
  });
  