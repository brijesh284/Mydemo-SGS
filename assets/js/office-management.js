/*-----------------------------Landing_page------------------------------------*/

jQuery(".landing").animate({ opacity: "1" }, 2000);

section_one();

var scroll_section_parts = ["first", "secound", "thierd"];
var scroll_flag = "end";
var scroll_section = null;
var scroll_index = 0;
setTimeout(function () {
  // -- for desktop --
  jQuery(window).on("wheel", function (event) {
    if (scroll_flag == "end") {
      if (event.originalEvent.deltaY !== 0) {
        scroll_flag = "start";
        if (event.originalEvent.deltaY < 0) {
          if (!scroll_index <= 0) {
            scroll_index--;
          }
          scroll_section = scroll_section_parts[scroll_index];
          for_section(scroll_section, "preview");
          setTimeout(function () {
            scroll_flag = "end";
          }, 1500);
        } else {
          if (scroll_index != scroll_section_parts.length - 1) {
            scroll_index++;
          }
          scroll_section = scroll_section_parts[scroll_index];
          for_section(scroll_section, "next");
          setTimeout(function () {
            scroll_flag = "end";
          }, 1500);
        }
      }
    }
  });

  // -- for mobile --
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
      } else {
        /* left swipe */
      }
    } else {
      if (yDiff > 0) {
        if (scroll_index != scroll_section_parts.length - 1) {
          scroll_index++;
        }
        scroll_section = scroll_section_parts[scroll_index];
        for_section(scroll_section, "next");

        setTimeout(function () {
          scroll_flag = "end";
        }, 1500);
      } else {
        if (!scroll_index <= 0) {
          scroll_index--;
        }
        scroll_section = scroll_section_parts[scroll_index];
        for_section(scroll_section, "preview");
        setTimeout(function () {
          scroll_flag = "end";
        }, 1500);
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
}, 4000);

function for_section(section, next_preview) {
  if (section == "first") {
    section_one(scroll_section, next_preview);
  } else if (section == "secound") {
    section_two(scroll_section, next_preview);
  } else if (section == "thierd") {
    section_three(scroll_section, next_preview);
  }
}

function section_one(scroll_section, next_preview) {
  jQuery(".two_img").css({ overflow: "unset" });

  jQuery(".landing_con_1").css({ left: "0%", opacity: "1" });
  jQuery(".landing_con_2").css({ left: "-100%", opacity: "0" });
  jQuery(".landing_con_3").css({ left: "-100%", opacity: "0" });
  jQuery(".landing_con_4").css({ left: "-100%", opacity: "0" });
  jQuery(".menu_sec_container_ul").css({ left: "-100%", opacity: "0" });

  if (scroll_section == "first") {
    jQuery(".first_half").css({ transform: "scale(1)", left: 0 });
    jQuery(".first_half").css({ transition: "1s" });
  } else {
    setTimeout(function () {
      jQuery(".first_half").css({ transform: "scale(1)", left: 0 });
      setTimeout(function () {
        jQuery(".first_half").css({ transition: "1s" });
      }, 1000);
    }, 2000);
  }

  // setTimeout(function(){
  //   jQuery('.two_img').css({overflow:'hidden'});
  // },5000)
  // --- preview ---
  if (next_preview == "preview") {
    jQuery(".first_half").css({ transform: "translate(0%, 0%)", opacity: "1" });
    jQuery(".second_half").css({
      transform: "translate(0%, -63%)",
      opacity: "1",
    });

    jQuery(".menu_three_button").css({ opacity: "0" });

    jQuery(".right_part_img_1").css({ top: "100%", opacity: "0" });
    jQuery(".right_part_img_2").css({ top: "100%", opacity: "0" });
    jQuery(".right_part_img_3").css({ top: "100%", opacity: "0" });
    jQuery(".right_part_menu_img").css({ top: "100%", opacity: "0" });
  }
  jQuery(".menu_three_button").css({ opacity: "0", display: "none" });
}

function section_two(scroll_section, next_preview) {
  jQuery(".two_img").css({ overflow: "hidden" });

  jQuery(".first_half").css({
    transform: "translate(110%, -70%)",
    opacity: "0",
  });
  jQuery(".second_half").css({
    transform: "translate(-101%, 2%)",
    opacity: "0",
  });

  jQuery(".menu_three_button").css({ opacity: "1", display: "block" });

  jQuery(".landing_con_1").css({ left: "-200%", opacity: "0" });
  jQuery(".landing_con_2").css({ left: "0%", opacity: "1" });
  jQuery(".landing_con_3").css({ left: "-100%", opacity: "0" });
  jQuery(".landing_con_4").css({ left: "-100%", opacity: "0" });
  jQuery(".menu_sec_container_ul").css({ left: "-100%", opacity: "0" });

  jQuery(".btn1").on("mouseenter", function () {
    jQuery(".landing_con_1").css({ left: "-200%", opacity: "0" });
    jQuery(".landing_con_2").css({ left: "0%", opacity: "1" });
    jQuery(".landing_con_3").css({ left: "-100%", opacity: "0" });
    jQuery(".landing_con_4").css({ left: "-100%", opacity: "0" });
    jQuery(".menu_sec_container_ul").css({ left: "-100%", opacity: "0" });

    jQuery(".right_part_img_1").css({ top: "0%", opacity: "1" });
    jQuery(".right_part_img_2").css({ top: "100%", opacity: "0" });
    jQuery(".right_part_img_3").css({ top: "100%", opacity: "0" });
    jQuery(".right_part_menu_img").css({ top: "100%", opacity: "0" });

    jQuery(".btn1").addClass("active");
    jQuery(".btn2").removeClass("active");
    jQuery(".btn3").removeClass("active");
  });
  jQuery(".btn2").on("mouseenter", function () {
    jQuery(".landing_con_1").css({ left: "-200%", opacity: "0" });
    jQuery(".landing_con_2").css({ left: "-200%", opacity: "0" });
    jQuery(".landing_con_3").css({ left: "0%", opacity: "1" });
    jQuery(".landing_con_4").css({ left: "-100%", opacity: "0" });
    jQuery(".menu_sec_container_ul").css({ left: "-100%", opacity: "0" });

    jQuery(".right_part_img_3_1").css({ top: "-25%", opacity: "0" });
    jQuery(".right_part_img_3_2").css({ left: "-50%", opacity: "0" });
    jQuery(".right_part_img_3_3").css({ right: "-50%", opacity: "0" });
    jQuery(".right_part_img_3_4").css({ bottom: "-25%", opacity: "0" });

    jQuery(".right_part_img_1").css({ top: "-100%", opacity: "0" });
    jQuery(".right_part_img_2").css({ top: "0%", opacity: "1" });
    jQuery(".right_part_img_3").css({ top: "100%", opacity: "0" });
    jQuery(".right_part_menu_img").css({ top: "100%", opacity: "0" });

    jQuery(".btn1").removeClass("active");
    jQuery(".btn2").addClass("active");
    jQuery(".btn3").removeClass("active");
  });
  jQuery(".btn3").on("mouseenter", function () {
    jQuery(".landing_con_1").css({ left: "-200%", opacity: "0" });
    jQuery(".landing_con_2").css({ left: "-200%", opacity: "0" });
    jQuery(".landing_con_3").css({ left: "-200%", opacity: "0" });
    jQuery(".landing_con_4").css({ left: "0%", opacity: "1" });
    jQuery(".menu_sec_container_ul").css({ left: "-100%", opacity: "0" });

    jQuery(".right_part_img_3_1").css({ top: "0%", opacity: "1" });
    jQuery(".right_part_img_3_2").css({ left: "0%", opacity: "1" });
    jQuery(".right_part_img_3_3").css({ right: "0%", opacity: "1" });
    jQuery(".right_part_img_3_4").css({ bottom: "0%", opacity: "1" });

    jQuery(".right_part_img_1").css({ top: "-100%", opacity: "0" });
    jQuery(".right_part_img_2").css({ top: "-100%", opacity: "0" });
    jQuery(".right_part_img_3").css({ top: "0%", opacity: "1" });
    jQuery(".right_part_menu_img").css({ top: "100%", opacity: "0" });

    jQuery(".btn1").removeClass("active");
    jQuery(".btn2").removeClass("active");
    jQuery(".btn3").addClass("active");
  });
  // jQuery('.btn1').trigger('mouseenter');
}

if (next_preview == "preview") {
}

function section_three(scroll_section, next_preview) {
  jQuery(".menu_three_button").css({ opacity: "0", display: "none" });

  jQuery(".landing_con_1").css({ left: "-200%", opacity: "0" });
  jQuery(".landing_con_2").css({ left: "-200%", opacity: "0" });
  jQuery(".landing_con_3").css({ left: "-200%", opacity: "0" });
  jQuery(".landing_con_4").css({ left: "-200%", opacity: "0" });
  jQuery(".menu_sec_container_ul").css({ left: "0%", opacity: "1" });

  jQuery(".right_part_img_3_1").css({ top: "-25%", opacity: "0" });
  jQuery(".right_part_img_3_2").css({ left: "-50%", opacity: "0" });
  jQuery(".right_part_img_3_3").css({ right: "-50%", opacity: "0" });
  jQuery(".right_part_img_3_4").css({ bottom: "-25%", opacity: "0" });

  jQuery(".right_part_img_1").css({ top: "-100%", opacity: "0" });
  jQuery(".right_part_img_2").css({ top: "-100%", opacity: "0" });
  jQuery(".right_part_img_3").css({ top: "-100%", opacity: "0" });
  jQuery(".right_part_menu_img").css({ top: "0%", opacity: "1" });

  if (next_preview == "preview") {
  }
}
