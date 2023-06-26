/*-----------------------------Conference Rooms------------------------------------*/
var $conference_main_bg_container = jQuery(".conference_main_container");
var $conference_click = jQuery(".conference_click");
var conference_bg_img = "./assets/images/office-management/Conference-room2.png";

jQuery(document).ready(function () {
  $conference_main_bg_container.animate({ opacity: "1" });
  $conference_click.on("click", function () {
    $conference_main_bg_container.css(
      "background-image",
      "url('" + conference_bg_img + "')"
    );
    jQuery('.conference_contant').css({opacity:'1'})
  });
});
