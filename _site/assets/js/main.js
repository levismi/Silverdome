$(document).ready(function(){

  // ScrollMagic Init
  var controller = new ScrollMagic.Controller();

  // Build Scene
  $('.castCrew').each(function(){
    var fadeScene1 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
      offset: -90
    })
    .setClassToggle(this, 'fade-in') //add fade-in class
    .addIndicators()
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

  // Parallax



  $('#tedKluck').click(function(){
    $('#kluckBio').toggle(500);
  });

  $('#travisAndrews').click(function(){
    $('#andrewsBio').toggle(500);
  });

  $('#chrisRegner').click(function(){
    $('#regnerBio').toggle(500);
  });

  $('#kliffKingsbury').click(function(){
    $('#kingsburyBio').toggle(500);
  });

  $('#brettHartmann').click(function(){
    $('#hartmannBio').toggle(500);
  });

});
