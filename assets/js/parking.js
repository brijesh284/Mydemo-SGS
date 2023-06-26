/*-----------------------------Parking------------------------------------*/
var parking_bg_img_in =
  "./assets/images/office-management/PARKING.jpg";
var parking_bg_img_out =
  "./assets/images/office-management/PARKING2.jpg";
var $parking_main_bg_container = jQuery(".parking_main_container");
var $parking_page_hover_ection_1 = jQuery(".parking_light_1");
var $parking_page_hover_ection_2 = jQuery(".parking_light_2");

jQuery(document).ready(function () {
  $parking_main_bg_container.animate({ opacity: "1" }, 2000);

  $parking_page_hover_ection_1.mouseenter(function () {
    $parking_main_bg_container.css(
      "background-image",
      "url('" + parking_bg_img_in + "')"
    );
    jQuery('.parking_content').css({opacity:'1'});
  });
  // $parking_page_hover_ection_2.mouseenter(function () {
  //   $parking_main_bg_container.css(
  //     "background-image",
  //     "url('" + parking_bg_img_in + "')"
  //   );
  // });

  $parking_page_hover_ection_1.mouseleave(function () {
    $parking_main_bg_container.css(
      "background-image",
      "url('" + parking_bg_img_out + "')"
    );
    jQuery('.parking_content').css({opacity:'0'});

  });
  // $parking_page_hover_ection_2.mouseleave(function () {
  //   $parking_main_bg_container.css(
  //     "background-image",
  //     "url('" + parking_bg_img_out + "')"
  //   );
  // });
});
