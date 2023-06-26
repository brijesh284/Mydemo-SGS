/*-----------------------------Meeting Rooms------------------------------------*/
var $meeting_main_bg_container = jQuery(".meeting_main_container");
var $meeting_page_section_container = jQuery(".meeting_sub_container");

var scroll_flag = "not_scrolled";
jQuery(document).ready(function () {
  $meeting_main_bg_container.animate({ opacity: "1" });

  setTimeout(function () {
    jQuery(window).on("wheel", function (event) {
      if (scroll_flag == "not_scrolled") {
        if (event.originalEvent.deltaY !== 0) {
          scroll_flag = "scrolled";
          if (event.originalEvent.deltaY < 0) {
          } else {
            $meeting_page_section_container.animate({ opacity: "1" });
            jQuery(".meeting_contant_1").css({ transform: "translateX(0%)" });
            jQuery(".meeting_contant_2").css({ transform: "translateX(0%)" });
          }
        }
      }
    });
  }, 1500);
});
