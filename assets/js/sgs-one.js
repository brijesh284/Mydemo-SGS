jQuery(document).ready(function () {
  // return false;
  var first_page_section_logo_top = null;
  setTimeout(function () {
    first_page_section_logo_top =
      jQuery("body").innerHeight() -
      jQuery(".first_page_section_logo").innerHeight();
    first_page_section_logo_top = first_page_section_logo_top / 2;
    console.log(screen.availHeight);
    console.log(jQuery(".first_page_section_logo").innerHeight());
    jQuery(".first_page_section_logo").css({
      // "margin-top": first_page_section_logo_top,
    });
    // if (screen.availWidth > 767){
    //   jQuery(".first_page_section_logo img").css({
    //     transition: "1s",
    //     width: "60%",
    //   });
    // }else{    
    //   jQuery(".first_page_section_logo img").css({
    //     transition: "1s",
    //     width: "90%",
    //   });
    // }
    lp_sc_1('preview');
  }, 500);

  // lp_sc_1();

  var laptop_page_scroll = new ScrollHandler("body");
  laptop_page_scroll.function_call(lp_sc_1, lp_sc_2, lp_sc_3, lp_sc_4);

  var card_1_contant_height,
    card_2_contant_height,
    card_3_contant_height,
    card_4_contant_height;

  var call_on_time = 0;

  var lp_sc_2_flag = false;

  function lp_sc_1(next_preview) {
    console.log("111");
    console.log(lp_sc_2_flag);
    // if(lp_sc_2_flag){
      
      // lp_sc_2_flag = false;

      if (next_preview == "next") {
      } else if (next_preview == "preview") {
        jQuery(".first_page_section_logo").css({
          transition: "1s",
          // "margin-top": first_page_section_logo_top,
          'flex-basis': '100%',
          "width":"100%",
        });

        // jQuery(".first_page_section_contant_main").css({
        //   'transition': "1s",
        //   'opacity': "0",
        // });
        if (screen.availWidth > 767) {
          jQuery(".first_page_section").css({
            transition: "1s",
            // "margin-top": first_page_section_logo_top,
            'margin-left': '10%',
            "width":"80%",
          });
          jQuery(".first_page_section_logo img").css({
            transition: "1s",
            width: "65%",
          });
          jQuery(".first_page_section_contant_main").css({'display':'none'});
        } else {
          jQuery(".first_page_section_logo img").css({
            transition: "1s",
            width: "90%",
          });
  
          // jQuery(".first_page_section_contant_main").css({'transition': "1s",'opacity':'0'});
            jQuery(".first_page_section_contant_main").css({'transition': "1s",'max-height':'0px'});
          setTimeout(function(){
            setTimeout(function(){
              // jQuery(".first_page_section_contant_main").css({'transition': "1s",'display':'none'});
            },1000);
          },1000);
        }
      }
    // }  
  }

  function lp_sc_2(next_preview) {
    console.log("222");

    if (next_preview == "next") {
      if (screen.availWidth > 767) {
        setTimeout(function(){
          jQuery(".first_page_section_contant_main").css({'transition': "1s",'display':'block'});
          setTimeout(function(argument) {
            jQuery(".first_page_section_contant_main").css({
              transition: "1s",
              opacity: "1",
            });
            console.log('ttttttt');
            // lp_sc_2_flag = true;
          },100);
        },1000);
        jQuery(".first_page_section_contant_main").css({
          'padding-left': "7px",
        });
        jQuery(".first_page_section_logo img").css({
          transition: "1s",
          width: "100%",
        });
        jQuery(".first_page_section_logo").css({
          transition: "1s",
          "margin-top": "0",
          "flex-basis": "20%",
          "width":"20%",
        });
      } else {

        jQuery(".first_page_section_contant_main").css({'transition': "1s",'display':'block','max-height':'300px'});
        setTimeout(function(){
          jQuery(".first_page_section_contant_main").css({'transition': "1s",'opacity':'1'});
        },1000);

        jQuery(".first_page_section_logo").css({
          transition: "1s",
          "margin-top": "0",
        });
        jQuery(".first_page_section_logo img").css({
          transition: "1s",
          width: "80%",
        });
        jQuery(".first_page_section_contant_main").css({
          transition: "1s",
          'margin-left': "10%",
          opacity: "1",
        });
      }
    } else if (next_preview == "preview") {
      jQuery(".secound_page_section").css({ transition: "0.5s", opacity: "0" });
      setTimeout(function () {
        jQuery(".secound_page_section").css({
          transition: "0.5s",
          display: "none",
        });
        jQuery(".first_page_section").css({ display: "flex" });
        setTimeout(function () {
          jQuery(".first_page_section").css({
            transition: "0.5s",
            opacity: "1",
          });
        }, 100);
      }, 500);
    }
  }

  function lp_sc_3(next_preview, _this) {
    var _this_p = _this;
    call_on_time++;
    var secound_page_section_height =
      jQuery("body").innerHeight() -
      (jQuery("header").innerHeight() + 40);
    var secound_page_section_top = jQuery("header").innerHeight();

    console.log("333");
    if (next_preview == "next") {
      if (screen.availWidth > 767) {
        jQuery(".first_page_section").css({ transition: "0.5s", opacity: "0" });
        setTimeout(function () {
          jQuery(".first_page_section").css({ display: "none" });
          jQuery(".secound_page_section").css({ display: "flex" });

          // -- seconf hover section
          // jQuery('.secound_page_section').css({'display':'block'});
          jQuery(".card_contant").css({ display: "block", height: "auto" });
          card_1_contant_height = jQuery(".card_1 .card_contant").innerHeight();
          card_2_contant_height = jQuery(".card_2 .card_contant").innerHeight();
          card_3_contant_height = jQuery(".card_3 .card_contant").innerHeight();
          card_4_contant_height = jQuery(".card_4 .card_contant").innerHeight();
          // jQuery('.secound_page_section').css({'display':'none'});
          jQuery(".card_contant").css({
            transition: "0.5s",
            display: "none",
            height: "0",
          });

          console.log(
            card_1_contant_height,
            card_2_contant_height,
            card_3_contant_height,
            card_4_contant_height
          );

          setTimeout(function () {
            jQuery(".secound_page_section").css({
              transition: "0.5s",
              opacity: "1",
            });
          }, 100);
        }, 500);
      } else {

        jQuery('.main_card').attr('data-contant_show','text_not_show');

        jQuery(".first_page_section").css({ transition: "0.5s", opacity: "0" });
        jQuery(".secound_page_section").css({
          height: secound_page_section_height,
          top: secound_page_section_top,
        });
        setTimeout(function () {
          jQuery(".first_page_section").css({ display: "none" });
          jQuery(".secound_page_section").css({ display: "flex" });
          console.log('scrolllllllllllllll')
          document.getElementById("secound_page_section_id").scrollTop = 1;
          console.log(document.getElementById("secound_page_section_id").scrollTop)
          
          // -- seconf hover section
          // jQuery('.secound_page_section').css({'display':'block'});
          jQuery(".card_contant").css({ display: "block", height: "auto" });
          card_1_contant_height = jQuery(".card_1 .card_contant").innerHeight();
          card_2_contant_height = jQuery(".card_2 .card_contant").innerHeight();
          card_3_contant_height = jQuery(".card_3 .card_contant").innerHeight();
          card_4_contant_height = jQuery(".card_4 .card_contant").innerHeight();
          // jQuery('.secound_page_section').css({'display':'none'});
          jQuery(".card_contant").css({
            transition: "0.5s",
            display: "none",
            height: "0",
          });

          console.log(
            card_1_contant_height,
            card_2_contant_height,
            card_3_contant_height,
            card_4_contant_height
          );

          setTimeout(function () {
            jQuery(".secound_page_section").css({
              transition: "0.5s",
              opacity: "1",
            });
          }, 100);
        }, 500);
      }
    } else if (next_preview == "preview") {

      jQuery('.main_card').attr('data-contant_show','text_not_show');

      jQuery(".third_page_section").css({ transition: "0.5s", opacity: "0" });
      setTimeout(function () {
        jQuery(".third_page_section").css({ display: "none" });
        jQuery(".secound_page_section").css({ display: "flex" });

        setTimeout(function () {
          document.getElementById("secound_page_section_id").scrollTop = 1;
          jQuery(".secound_page_section").css({
            transition: "0.5s",
            opacity: "1",
          });
        }, 100);
      }, 500);
    }

    if (screen.availWidth < 767) {
      setTimeout(function () {
        _this_p.handletouch = "start";

        // console.log('_this_p');
        // console.log(_this_p);

        document
          .getElementById("secound_page_section_id")
          .addEventListener("scroll", (event) => {
            if (jQuery("#secound_page_section_id").scrollTop() == "0") {
              _this_p.handletouch = "end";
            } else {
              const { scrollHeight, scrollTop, clientHeight } = event.target;

              if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
                _this_p.handletouch = "end";
              }
            }
          });
      }, 600);
    }
    if(call_on_time == '1'){

      secound_section_hover_and_click();
    }
  }

  function lp_sc_4(next_preview) {
    console.log("444");
    if (next_preview == "next") {
      jQuery(".secound_page_section").css({ transition: "0.5s", opacity: "0" });
      setTimeout(function () {
        jQuery(".secound_page_section").css({ display: "none" });
        jQuery(".third_page_section").css({ display: "flex" });

        // --- slider ---

        var img_top = [];
        var slide_img_top = [];

        var img_left = [];
        var slide_img_left = [];

        var slider_img_length = jQuery(".slider_imgs img").length;
        var current_img_index = 0;
        var last_img_index = slider_img_length - 1;
        var first_img_index = 0;

        for (let i = 0; i < slider_img_length; i++) {
          img_top[i] =
            jQuery("body").innerHeight() -
            jQuery(jQuery(".slider_imgs img")[i]).innerHeight();

          img_top[i] = img_top[i] / 2;

          let img_top_temp = img_top[i];

          slide_img_top[i] = img_top_temp - img_top_temp * 0.3;

          img_left[i] =
            jQuery(".slider_imgs").innerWidth() -
            jQuery(jQuery(".slider_imgs img")[i]).innerWidth();

          img_left[i] = img_left[i] / 2;

          if (i > 0) {
            jQuery(jQuery(".slider_imgs img")[i]).css({
              transition: "1s",
              left: "150%",
              top: slide_img_top[i],
            });
          } else {
            jQuery(jQuery(".slider_imgs img")[i]).css({
              transition: "1s",
              left: img_left[i],
              top: img_top[i],
            });
          }
        }

        var img_top_min = Math.min.apply(Math, img_top);
        if (screen.availWidth > 767) {
          var slider_img_header_bottom =
            jQuery(".slider_imgs").innerHeight() - img_top_min + 48;
        } else {
          var slider_img_header_bottom =
            jQuery(".slider_imgs").innerHeight() - img_top_min + 96;
        }

        jQuery(".slider_img_header").css({ bottom: slider_img_header_bottom });

        if (current_img_index == first_img_index) {
          jQuery(".slider_preview_btn").css({ display: "none" });
        }

        jQuery(".slider_img_header").css({ opacity: "0" });
        jQuery(jQuery(".slider_imgs .slider_img_header")[0]).css({
          opacity: "1",
        });

        jQuery(".slider_next_btn").on("click", function () {
          console.log("ssssssss");

          jQuery(".slider_img_header").css({ opacity: "0" });

          jQuery(jQuery(".slider_imgs img")[current_img_index]).css({
            top: slide_img_top[current_img_index],
            left: "-150%",
          });

          if (current_img_index != slider_img_length - 1) {
            current_img_index++;
          }

          jQuery(jQuery(".slider_imgs img")[current_img_index]).css({
            top: img_top[current_img_index],
            left: img_left[current_img_index],
          });
          jQuery(
            jQuery(".slider_imgs .slider_img_header")[current_img_index]
          ).css({ opacity: "1" });

          if (current_img_index == last_img_index) {
            jQuery(".slider_next_btn").css({ display: "none" });
          }

          if (current_img_index != first_img_index) {
            jQuery(".slider_preview_btn").css({ display: "block" });
          }
        });

        jQuery(".slider_preview_btn").on("click", function () {
          jQuery(".slider_img_header").css({ opacity: "0" });

          jQuery(jQuery(".slider_imgs img")[current_img_index]).css({
            top: slide_img_top[current_img_index],
            left: "150%",
          });
          if (current_img_index != 0) {
            current_img_index--;
          }
          jQuery(jQuery(".slider_imgs img")[current_img_index]).css({
            top: img_top[current_img_index],
            left: img_left[current_img_index],
          });
          jQuery(
            jQuery(".slider_imgs .slider_img_header")[current_img_index]
          ).css({ opacity: "1" });

          if (current_img_index == first_img_index) {
            jQuery(".slider_preview_btn").css({ display: "none" });
          }

          if (current_img_index != last_img_index) {
            jQuery(".slider_next_btn").css({ display: "block" });
          }
        });
        setTimeout(function () {
          jQuery(".third_page_section").css({
            transition: "0.5s",
            opacity: "1",
          });
        }, 100);
      }, 500);
    } else if (next_preview == "preview") {
    }
  }

  function secound_section_hover_and_click() {

    var is_contant_show;
    var on_click = true;
    if (screen.availWidth > 767) {
      // -- hover code --

      jQuery('.main_card').mouseover(function(){
        jQuery(".four_card_container_h").css({
          top: "-20",
        });
      });

      jQuery('.main_card').mouseout(function(){
        jQuery(".four_card_container_h").css({
          top: "-60",
        });
      });

      jQuery(".main_card").hover(
        function () {
          var _this = this;

          // jQuery(".four_card_container_h").css({
          //   transition: "0.5s",
          //   opacity: "0",
          // });

          jQuery(".main_card").addClass("hover_hide");
          jQuery(_this).removeClass("hover_hide");

          jQuery(".hover_hide").css({ transition: "0.3s", opacity: "0" });

          jQuery(_this).find(".card_contant").css({ display: "block" });
          setTimeout(function () {
            if (jQuery(_this).attr("class").indexOf("card_1") >= 0) {
              jQuery(_this).find(".card_contant").css({
                transition: "0.5s",
                height: card_1_contant_height,
                margin: "1em 0",
              });
            } else if (jQuery(_this).attr("class").indexOf("card_2") >= 0) {
              jQuery(_this).find(".card_contant").css({
                transition: "0.5s",
                height: card_2_contant_height,
                margin: "1em 0",
              });
            } else if (jQuery(_this).attr("class").indexOf("card_3") >= 0) {
              jQuery(_this).find(".card_contant").css({
                transition: "0.5s",
                height: card_3_contant_height,
                margin: "1em 0",
              });
            } else if (jQuery(_this).attr("class").indexOf("card_4") >= 0) {
              jQuery(_this).find(".card_contant").css({
                transition: "0.5s",
                height: card_4_contant_height,
                margin: "1em 0",
              });
            }
            jQuery(_this).find(".card_contant").css({ opacity: "1" });
          }, 100);
        },
        function () {
          var _this = this;
          jQuery(".four_card_container_h").css({
            transition: "0.5s",
            opacity: "1",
          });

          jQuery(_this)
            .find(".card_contant")
            .css({ transition: "0.5s", opacity: "0" });
          jQuery(_this)
            .find(".card_contant")
            .css({ transition: "0.5s", height: "0", margin: "0" });
          setTimeout(function () {
            jQuery(_this).find(".card_contant").css({ display: "none" });
          }, 500);
          jQuery(".hover_hide").css({ transition: "0.3s", opacity: "1" });
          jQuery(".main_card").removeClass("hover_hide");
        }
      );
    } else {
      jQuery(".main_card").on("click", function () {
        if(on_click){

          on_click = false;
          var _this = this;
          
          console.log("seccccccccccc");
          is_contant_show = jQuery(_this).attr('data-contant_show');
          console.log(is_contant_show);
          console.log(_this);
          
          if(is_contant_show == 'text_not_show'){
            
            // console.log("seccccccccccc show");
            

            jQuery(".card_contant").css({
              transition: "0.3s",
              height: "0",
              opacity: "0",
              margin: "0",
            });

            jQuery(".main_card").attr('data-contant_show','text_not_show');
            jQuery(_this).attr('data-contant_show','text_show');
            
            setTimeout(function () {
              jQuery(".card_contant").css({ display: "none" });
              jQuery(_this).find(".card_contant").css({ display: "block" });
              setTimeout(function () {
                if (jQuery(_this).attr("class").indexOf("card_1") >= 0) {
                  jQuery(_this).find(".card_contant").css({
                    transition: "0.5s",
                    opacity: "1",
                    height: card_1_contant_height,
                    margin: "1em 0",
                  });
                } else if (jQuery(_this).attr("class").indexOf("card_2") >= 0) {
                  jQuery(_this).find(".card_contant").css({
                    transition: "0.5s",
                    opacity: "1",
                    height: card_2_contant_height,
                    margin: "1em 0",
                  });
                } else if (jQuery(_this).attr("class").indexOf("card_3") >= 0) {
                  jQuery(_this).find(".card_contant").css({
                    transition: "0.5s",
                    opacity: "1",
                    height: card_3_contant_height,
                    margin: "1em 0",
                  });
                } else if (jQuery(_this).attr("class").indexOf("card_4") >= 0) {
                  jQuery(_this).find(".card_contant").css({
                    transition: "0.5s",
                    opacity: "1",
                    height: card_4_contant_height,
                    margin: "1em 0",
                  });
                }
                jQuery(_this).find(".card_contant").css({ opacity: "1" });
              }, 100);
            }, 300);
          }else if(is_contant_show == 'text_show'){

            // console.log("seccccccccccc close");

            jQuery(_this).attr('data-contant_show','text_not_show');

            jQuery(".card_contant").css({
              transition: "0.3s",
              height: "0",
              opacity: "0",
              margin: "0",
            });
            setTimeout(function() {
              jQuery(".card_contant").css({ display: "none" });
            },600)

          }

          setTimeout(function() {
            on_click = true;
          },600)
        }

      });
    }
  }
});
