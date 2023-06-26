/*-----------------------------Business Address------------------------------------*/
var $business_main_bg_container = jQuery(".business_main_container");
var $business_page_title = jQuery(".business_title");
var $business_page_content = jQuery(".business_content");
var $business_click = jQuery(".business_click");
var business_bg_img =
  "./assets/images/office-management/business-bg-2.png";

jQuery(document).ready(function () {
  $business_main_bg_container.animate({ opacity: "1" }, 2000);
  $business_click.on("click", function () {
    $business_main_bg_container.css(
      {"background-image":"url('" + business_bg_img + "')"}
    );
    $business_page_title.animate({ "font-size": "3em", opacity: "1" }, 1000);
    $business_page_content.animate({ opacity: "1" }, 1000);
    // jQuery(".business_title").delay(800).fadeIn();
    // jQuery(".business_content").delay(800).fadeIn();
  });
});
