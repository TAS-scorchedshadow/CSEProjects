function clickHandler(event) {
   console.log('Button Clicked');
}

$( ".media-button" ).hover(function() {
  let index = $(this).index();
  //console.log(`Button ${index} Clicked`);
  if ($(this).hasClass( "media-active" ) === false) {

      $("#media-player").empty();
      $(".media-button").removeClass("media-active");

      $("#media-text-display").empty();
      $(this).find(".media-text").clone().appendTo("#media-text-display");
      $(this).find(".media").clone().appendTo("#media-player");
      $(this).addClass("media-active");

      $("#media-player").find(".media").css('display', 'flex');
      $("#media-text-display").find(".media-text").css('display', 'block');

  }
});