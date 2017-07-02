
$(document).ready(function(){

  // ScrollMagic Init
  var controller = new ScrollMagic.Controller();

  // Build Fade Scene
  $('.fadeIn').each(function(){
    var fadeScene1 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
      offset: -90,
    })
    .setClassToggle(this, 'fade-in') //add fade-in class
    .addTo(controller);
  });

  // Pin Scenes
  var pinScene = new ScrollMagic.Scene({
    triggerElement: '.cast_glenn',
    triggerHook:0,
    duration: '100%'
  })
  .setPin('.cast_glenn', {pushFollowers: false})
  .addTo(controller);

  var pinScene = new ScrollMagic.Scene({
    triggerElement: '.cast_carmen',
    triggerHook:0,
    duration: '100%'
  })
  .setPin('.cast_carmen', {pushFollowers: false})
  .addTo(controller);

  var pinScene = new ScrollMagic.Scene({
    triggerElement: '.cast_francisco',
    triggerHook:0,
    duration: '100%'
  })
  .setPin('.cast_francisco', {pushFollowers: false})
  .addTo(controller);

  var pinScene = new ScrollMagic.Scene({
    triggerElement: '.crew',
    triggerHook:0.,
    duration: '100%'
  })
  .setPin('.crew', {pushFollowers: false})
  .addTo(controller);

});

  //this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});
