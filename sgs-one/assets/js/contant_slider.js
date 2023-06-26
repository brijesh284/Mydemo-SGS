window.section_preview_scroll = null;

var contant_parts = ["one", "two", "three", "four", "five"];

window.contant_scroll_var = {};
window.contant_scroll_var.scroll_flag = "end";

window.contant_scroll_var.scroll_index = 0;

contant_section_one();

var scroll_section = null;
var scroll_index = 0;
setTimeout(function () {
  if (screen.availWidth >= 1024) {
    // -- for desktop --
  } else {
    // -- for mobile --
    document
      .getElementById("scroll_text")
      .addEventListener("touchstart", handleTouchStart, false);
    document
      .getElementById("scroll_text")
      .addEventListener("touchmove", handleTouchMove, false);

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

      console.log("ifffff");
      console.log(window.contant_scroll_var.scroll_flag);
      if (window.contant_scroll_var.scroll_flag == "end") {
        window.contant_scroll_var.scroll_flag = "start";

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            /* right swipe */
          } else {
            /* left swipe */
          }
        } else {
          if (yDiff > 0) {
            if (
              window.contant_scroll_var.scroll_index !=
              contant_parts.length - 1
            ) {
              window.contant_scroll_var.scroll_index++;
            }
            if (
              contant_parts[window.contant_scroll_var.scroll_index] !==
              scroll_section
            ) {
              scroll_section =
                contant_parts[window.contant_scroll_var.scroll_index];

              contant_for_section(scroll_section, "next");
              // setTimeout(function () {
              //   scroll_flag = "end";
              // }, 500);
            } else {
              window.contant_scroll_var.scroll_flag = "end";
            }
          } else {
            if (!window.contant_scroll_var.scroll_index <= 0) {
              window.contant_scroll_var.scroll_index--;
            }
            if (
              contant_parts[window.contant_scroll_var.scroll_index] !==
              scroll_section
            ) {
              scroll_section =
                contant_parts[window.contant_scroll_var.scroll_index];

              contant_for_section(scroll_section, "preview");
              // setTimeout(function () {
              //   scroll_flag = "end";
              // }, 500);
            } else {
              window.contant_scroll_var.scroll_flag = "end";
            }

            // contant_for_section(scroll_section, "preview");
            // setTimeout(function () {
            //   scroll_flag = "end";
            // }, 500);
          }
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
  }
}, 100);

function contant_for_section(section, next_preview) {
  if (section == "one") {
    contant_section_one(scroll_section, next_preview);
  } else if (section == "two") {
    contant_section_two(scroll_section, next_preview);
  } else if (section == "three") {
    contant_section_three(scroll_section, next_preview);
  } else if (section == "four") {
    contant_section_four(scroll_section, next_preview);
  } else if (section == "five") {
    contant_section_five(scroll_section, next_preview);
  } else if (section == "six") {
    contant_section_six(scroll_section, next_preview);
  }
}

function contant_section_one(section, next_preview) {
  setTimeout(function () {
    window.section_preview_scroll = true;
  }, 2000);

  console.log("one");
  jQuery(".img_sec_2 img").css({
    margin: "11vw 0",
    transform: "scale(1)",
    width: "auto",
  });
  jQuery(".img_sec_3 img").css({
    margin: "4vw 0",
    transform: "scale(0.5)",
    width: "auto",
  });

  if (screen.availWidth > 767) {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  } else {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  }

  setTimeout(function () {
    window.contant_scroll_var.scroll_flag = "end";
  }, 500);
}

function contant_section_two(section, next_preview) {
  window.section_preview_scroll = false;
  console.log("two");
  jQuery(".scroll_text_section.img_sec_1 img").css({ width: "30%" });
  jQuery(".img_sec_2 img").css({
    transition: "1s",
    margin: "3vw 0",
    transform: "scale(0.5)",
    width: "auto",
  });
  jQuery(".img_sec_3 img").css({
    transition: "1s",
    margin: "3vw 0",
    transform: "scale(0.9)",
    width: "auto",
  });
  jQuery(".img_sec_4 img").css({
    transition: "1s",
    margin: "-6vw 0",
    transform: "scale(0.4)",
    width: "auto",
  });
  jQuery(".scroll_text_section.img_sec_4").css({ height: "auto" });

  if (screen.availWidth > 767) {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  } else {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  }

  setTimeout(function () {
    window.contant_scroll_var.scroll_flag = "end";
  }, 500);
}

function contant_section_three(section, next_preview) {
  window.section_preview_scroll = false;
  console.log("three");
  jQuery(".scroll_text_section.img_sec_1 img").css({
    transition: "1s",
    width: "0",
  });
  jQuery(".img_sec_2 img").css({
    transition: "1s",
    margin: "0",
    transform: "scale(0.5)",
    width: "0",
  });
  jQuery(".img_sec_3 img").css({
    transition: "1s",
    margin: "0",
    transform: "scale(0.9)",
    width: "0",
  });
  jQuery(".img_sec_4 img").css({
    transition: "1s",
    margin: "0",
    transform: "scale(1)",
    width: "100%",
  });
  jQuery(".img_sec_4").css({ height: "100%" });
  if (screen.availWidth > 767) {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  } else {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  }

  setTimeout(function () {
    window.contant_scroll_var.scroll_flag = "end";
  }, 500);
}

function contant_section_four(section, next_preview) {
  window.section_preview_scroll = false;
  console.log("four");
  jQuery(".img_sec_4 img").css({
    transition: "1s",
    margin: "0",
    transform: "scale(1)",
    width: "0",
  });
  jQuery(".scroll_text_section.img_sec_5").css({ margin: "0", width: "100%" });
  jQuery(".scroll_text_section.img_sec_4").css({ height: "0" });
  jQuery(".img_sec_6 img").css({
    transition: "1s",
    margin: "10vw 0",
    width: "100%",
  });
  jQuery(".img_sec_7 img").css({
    transition: "1s",
    margin: "-11vw 0",
    transform: "scale(0.5)",
    width: "100%",
  });

  if (screen.availWidth > 767) {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  } else {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  }

  setTimeout(function () {
    window.contant_scroll_var.scroll_flag = "end";
  }, 500);
}

function contant_section_five(section, next_preview) {
  window.section_preview_scroll = false;
  console.log("five");

  jQuery(".scroll_text_section.img_sec_5").css({
    transition: "1s",
    margin: "0",
    width: "0",
  });
  jQuery(".img_sec_6 img").css({ transition: "1s", margin: "0", width: "0" });
  jQuery(".img_sec_7 img").css({
    transition: "1s",
    margin: "0",
    transform: "scale(1)",
    width: "100%",
  });

  if (screen.availWidth > 767) {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  } else {
    if (next_preview == "next") {
    }

    if (next_preview == "preview") {
    }
  }

  setTimeout(function () {
    window.contant_scroll_var.scroll_flag = "end";
  }, 500);
}
