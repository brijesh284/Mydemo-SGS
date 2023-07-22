if (screen.availWidth < 1024) {
  jQuery(document).ready(function () {
    var background_blur = "<style>body::before{filter: blur(3px);}</style>";
    var background_set = "<style>body::before{filter: blur(0px);}</style>";
    window.section_click = {};

    function all_off_img() {
      jQuery(".img1").attr("src", img1_src);
      jQuery(".img2").attr("src", img2_src);
      jQuery(".img3").attr("src", img3_src);
      jQuery(".img4").attr("src", img4_src);
      jQuery(".img5").attr("src", img5_src);
      jQuery(".img6").attr("src", img6_src);
    }

    $main_logo = jQuery(".main_logo.clickable");
    $all_img = jQuery(".hover-section img");

    $myLink = jQuery("#myLink");
    $all_img_parent = jQuery(".hover-section");

    img1_src = jQuery(".img1").attr("src");
    img2_src = jQuery(".img2").attr("src");
    img3_src = jQuery(".img3").attr("src");
    img4_src = jQuery(".img4").attr("src");
    img5_src = jQuery(".img5").attr("src");
    img6_src = jQuery(".img6").attr("src");

    myLink = jQuery("#myLink").attr("href");
    section1_href = jQuery(".section1").attr("href");
    section2_href = jQuery(".section2").attr("href");
    section3_href = jQuery(".section3").attr("href");
    section4_href = jQuery(".section4").attr("href");
    section5_href = jQuery(".section5").attr("href");
    section6_href = jQuery(".section6").attr("href");

    $myLink.removeAttr("href");
    $all_img_parent.removeAttr("href");

    jQuery("body").mousedown(function () {
      window.section_click.img_click = false;

      setTimeout(function () {
        if (!window.section_click.img_click) {
          jQuery('.temp').append(background_set);
          jQuery("#heading").removeClass('hidden');
          jQuery($main_logo).removeClass("redirect");
          $main_logo.attr("src", "./assets/images/vector3.png");
          $main_logo.css({ "--tw-scale-x": "1", "--tw-scale-y": "1" });
          $all_img.addClass("hidden");
          jQuery("#heading").css({
            filter: "blur(0px)",
            "-webkit-filter": "blur(0px)",
          });
        }
      }, 100);
    });

    jQuery($main_logo).on("click", function () {
      window.section_click.img_click = true;

      jQuery('.temp').append(background_blur);
      jQuery("#heading").addClass('hidden');
      jQuery("#heading").css({
        filter: "blur(8px)",
        "-webkit-filter": "blur(3px)",
      });
      if (jQuery(this).attr("class").indexOf("redirect") >= 0) {
        window.location.href = myLink;
      } else {
        jQuery(this).addClass("redirect");

        $main_logo.attr("src", "./assets/images/vector3-hover.png");
        // $main_logo.css({ "--tw-scale-x": "1.5", "--tw-scale-y": "1.5" });
        // $main_logo.removeClass('clickable');
        $all_img.removeClass("hidden");
      }
    });

    jQuery($all_img).on("click", function () {
      window.section_click.img_click = true;

      if (jQuery(this).attr("class").indexOf("redirect") >= 0) {
        if (jQuery(this).attr("class").indexOf("img1") >= 0) {
          window.location.href = section1_href;
        } else if (jQuery(this).attr("class").indexOf("img2") >= 0) {
          window.location.href = section2_href;
        } else if (jQuery(this).attr("class").indexOf("img3") >= 0) {
          window.location.href = section3_href;
        } else if (jQuery(this).attr("class").indexOf("img4") >= 0) {
          window.location.href = section4_href;
        } else if (jQuery(this).attr("class").indexOf("img5") >= 0) {
          window.location.href = section5_href;
        } else if (jQuery(this).attr("class").indexOf("img6") >= 0) {
          window.location.href = section6_href;
        }
      } else {
        $all_img.css({ filter: "blur(4px)" });
        $all_img.removeClass("redirect");

        if (jQuery(this).attr("class").indexOf("img1") >= 0) {
          all_off_img();

          jQuery(this).css({ filter: "blur(0px)" });
          jQuery(this).addClass("redirect");
          jQuery(this).attr("src", "./assets/images/Mask1Hover.png");
          jQuery($main_logo).attr("src", "./assets/images/Mask1Coloured.png");
        } else if (jQuery(this).attr("class").indexOf("img2") >= 0) {
          all_off_img();

          jQuery(this).css({ filter: "blur(0px)" });
          jQuery(this).addClass("redirect");
          jQuery(this).attr("src", "./assets/images/Mask2Hover.png");
          jQuery($main_logo).attr("src", "./assets/images/Mask2Coloured.png");
        } else if (jQuery(this).attr("class").indexOf("img3") >= 0) {
          all_off_img();

          jQuery(this).css({ filter: "blur(0px)" });
          jQuery(this).addClass("redirect");
          jQuery(this).attr("src", "./assets/images/Mask3Hover.png");
          jQuery($main_logo).attr("src", "./assets/images/Mask3Coloured.png");
        } else if (jQuery(this).attr("class").indexOf("img4") >= 0) {
          all_off_img();

          jQuery(this).css({ filter: "blur(0px)" });
          jQuery(this).addClass("redirect");
          jQuery(this).attr("src", "./assets/images/Mask4Hover.png");
          jQuery($main_logo).attr("src", "./assets/images/Mask4Coloured.png");
        } else if (jQuery(this).attr("class").indexOf("img5") >= 0) {
          all_off_img();

          jQuery(this).css({ filter: "blur(0px)" });
          jQuery(this).addClass("redirect");
          jQuery(this).attr("src", "./assets/images/Mask5Hover.png");
          jQuery($main_logo).attr("src", "./assets/images/Mask5Coloured.png");
        } else if (jQuery(this).attr("class").indexOf("img6") >= 0) {
          all_off_img();

          jQuery(this).css({ filter: "blur(0px)" });
          jQuery(this).addClass("redirect");
          jQuery(this).attr("src", "./assets/images/Mask6Hover.png");
          jQuery($main_logo).attr("src", "./assets/images/Mask6Coloured.png");
        }
      }
    });

    jQuery(".body-wrap-dec").on("click", function () {
      console.log("body click");
    });
  });
}


var mouseover = false;
jQuery(document).ready(function() {

  jQuery('.hex-surround-blank').attr('src','');
  jQuery('.hex-surround-blank').attr('display','none');

  jQuery('.hex-surround-common').css({'z-index':'100',opacity:1});
  jQuery('.hex-surround-blank').css({'transition':'0','opacity':'0'});

  var mainHexImage = jQuery('.main-hex-img');
  var hexSurround = jQuery(".hex-surround-common");
  var hexSurroundBlank = jQuery(".hex-surround-blank");
  var heading = jQuery("#heading");

  img1_src = jQuery(".img1").attr("src");
  img2_src = jQuery(".img2").attr("src");
  img3_src = jQuery(".img3").attr("src");
  img4_src = jQuery(".img4").attr("src");
  img5_src = jQuery(".img5").attr("src");
  img6_src = jQuery(".img6").attr("src");
  $main_logo = jQuery(".main_logo.clickable");
  $all_img = jQuery(".hover-section img");

  var img1_classes = jQuery('.img1').attr('class').replace('hidden', '').replace('hex-surround-common', 'hex-surround-hover').replace('img1','');
  var img2_classes = jQuery('.img2').attr('class').replace('hidden', '').replace('hex-surround-common', 'hex-surround-hover').replace('img2','');
  var img3_classes = jQuery('.img3').attr('class').replace('hidden', '').replace('hex-surround-common', 'hex-surround-hover').replace('img3','');
  var img4_classes = jQuery('.img4').attr('class').replace('hidden', '').replace('hex-surround-common', 'hex-surround-hover').replace('img4','');
  var img5_classes = jQuery('.img5').attr('class').replace('hidden', '').replace('hex-surround-common', 'hex-surround-hover').replace('img5','');
  var img6_classes = jQuery('.img6').attr('class').replace('hidden', '').replace('hex-surround-common', 'hex-surround-hover').replace('img6','');
  var img_classes = ['.img1','.img2','.img3','.img4','.img5','.img6'];
   
  // var classes_array = [img1_classes,img2_classes,img3_classes,img4_classes,img5_classes,img6_classes];
  // var img_class_array = [];
  // for (let i = 0; i < classes_array.length; i++) {
  //   img_class_array[i] = classes_array[i].split(" ");
  // }

  // all_classes = img_class_array[0].concat(img_class_array[1],img_class_array[2],img_class_array[3],img_class_array[4],img_class_array[5]);

  // function removeDuplicates(arr) {
  //     return arr.filter((item,
  //         index) => arr.indexOf(item) === index);
  // }

  // all_classes = removeDuplicates(all_classes);

  // for (let i = 0; i < all_classes.length; i++) {
  //   jQuery(all_classes[i]).css('transition','2s');
  // }

  function all_off_img() {
    jQuery(".img1").attr("src", img1_src);
    jQuery(".img2").attr("src", img2_src);
    jQuery(".img3").attr("src", img3_src);
    jQuery(".img4").attr("src", img4_src);
    jQuery(".img5").attr("src", img5_src);
    jQuery(".img6").attr("src", img6_src);
  }

  jQuery.each(img_classes, function( index, value ) {
    console.log('.hex-surround'+value);

    jQuery('.hex-surround'+value).mouseover(function(){
        
        if(!mouseover){     
          
          _this = this;
          mouseover = true;
          jQuery(".hover_change_01").attr("src",'./assets/images/Mask1.png');  
          jQuery(".hover_change_02").attr("src",'./assets/images/Mask2.png');  
          jQuery(".hover_change_03").attr("src",'./assets/images/Mask3.png');  
          jQuery(".hover_change_04").attr("src",'./assets/images/Mask4.png');  
          jQuery(".hover_change_05").attr("src",'./assets/images/Mask5.png');  
          jQuery(".hover_change_06").attr("src",'./assets/images/Mask6.png');  
  
          console.log('hover in .hex-surround' +value);

          // jQuery('.hex-surround-hover').attr('display','none');
          jQuery('.hex-surround-hover').css({'transition':'0.2s','opacity':'0'});

          setTimeout(function(){

            jQuery('.hover_change_01').attr('class',img1_classes+' hover_change_01');
            jQuery('.hover_change_02').attr('class',img2_classes+' hover_change_02');
            jQuery('.hover_change_03').attr('class',img3_classes+' hover_change_03');
            jQuery('.hover_change_04').attr('class',img4_classes+' hover_change_04');
            jQuery('.hover_change_05').attr('class',img5_classes+' hover_change_05');
            jQuery('.hover_change_06').attr('class',img6_classes+' hover_change_06');

            mainHexImage.addClass('scale-130');
            heading.addClass('hidden');

            if (jQuery(_this).attr("class").indexOf("img1") >= 0) {
              all_off_img();

              // jQuery(this).css({ filter: "blur(0px)" });
              // jQuery(this).addClass("redirect");
              jQuery(_this).attr("src", "./assets/images/Mask1Hover.png");
              jQuery($main_logo).attr("src", "./assets/images/Mask1Coloured.png");
            } else if (jQuery(_this).attr("class").indexOf("img2") >= 0) {
              all_off_img();

              // jQuery(this).css({ filter: "blur(0px)" });
              // jQuery(this).addClass("redirect");
              jQuery(_this).attr("src", "./assets/images/Mask2Hover.png");
              jQuery($main_logo).attr("src", "./assets/images/Mask2Coloured.png");
            } else if (jQuery(_this).attr("class").indexOf("img3") >= 0) {
              all_off_img();

              // jQuery(this).css({ filter: "blur(0px)" });
              // jQuery(this).addClass("redirect");
              jQuery(_this).attr("src", "./assets/images/Mask3Hover.png");
              jQuery($main_logo).attr("src", "./assets/images/Mask3Coloured.png");
            } else if (jQuery(_this).attr("class").indexOf("img4") >= 0) {
              all_off_img();

              // jQuery(this).css({ filter: "blur(0px)" });
              // jQuery(this).addClass("redirect");
              jQuery(_this).attr("src", "./assets/images/Mask4Hover.png");
              jQuery($main_logo).attr("src", "./assets/images/Mask4Coloured.png");
            } else if (jQuery(_this).attr("class").indexOf("img5") >= 0) {
              all_off_img();

              // jQuery(this).css({ filter: "blur(0px)" });
              // jQuery(this).addClass("redirect");
              jQuery(_this).attr("src", "./assets/images/Mask5Hover.png");
              jQuery($main_logo).attr("src", "./assets/images/Mask5Coloured.png");
            } else if (jQuery(_this).attr("class").indexOf("img6") >= 0) {
              all_off_img();

              // jQuery(this).css({ filter: "blur(0px)" });
              // jQuery(this).addClass("redirect");
              jQuery(_this).attr("src", "./assets/images/Mask6Hover.png");
              jQuery($main_logo).attr("src", "./assets/images/Mask6Coloured.png");
            }

            // -- only temp hover image display show
            jQuery('.hex-surround-blank').css({'transition':'0','opacity':'0'});
            jQuery('.hex-surround-common').css({'transition':'0','opacity':'0'});
            jQuery(_this).css({'transition':'0','opacity':'1'});

            jQuery('.hex-surround-blank').attr('display','block');
            setTimeout(function(){
              jQuery('.hex-surround-hover').css({'transition':'0.5','opacity':'1'});

              setTimeout(function(){
                mouseover = false;
                // -- all image hover position change
                jQuery('.hover_change_01').attr('class',img2_classes+' hover_change_01');
                jQuery('.hover_change_02').attr('class',img3_classes+' hover_change_02');
                jQuery('.hover_change_03').attr('class',img1_classes+' hover_change_03');
                jQuery('.hover_change_04').attr('class',img4_classes+' hover_change_04');
                jQuery('.hover_change_05').attr('class',img6_classes+' hover_change_05');
                jQuery('.hover_change_06').attr('class',img5_classes+' hover_change_06');

                // jQuery('.hover_change_01').attr('class',img2_classes+' hover_change_01');
                // jQuery('.hover_change_02').attr('class',img3_classes+' hover_change_02');
                // jQuery('.hover_change_03').attr('class',img1_classes+' hover_change_03');
                // jQuery('.hover_change_04').attr('class',img4_classes+' hover_change_04');
                // jQuery('.hover_change_05').attr('class',img6_classes+' hover_change_05');
                // jQuery('.hover_change_06').attr('src',);
                // jQuery(".hover_change_06")
                //     .fadeOut(1000, function() {
                //         jQuery(".hover_change_06").attr('src','./assets/images/Mask2.png');
                //     }).fadeIn(1000,function(){
                //     });
                    // jQuery('.hover_change_06').fadeTo( "slow" , 0.5, function() {
                    //     // jQuery(".hover_change_06").attr('src','./assets/images/dark.png');
                    // });

                // jQuery(".hover_change_06").fadeOut(100, function() {
                //     jQuery(".hover_change_06").attr("src",'./assets/images/dark.png');
                // }).fadeIn(100);
                console.log('hover in position reset .hex-surround' +value);
                // jQuery(".hover_change_06").click(function(){
                

                // });
                // -- all image hover position set
                // jQuery('.hex-surround-hover').css({'display':'none'});
                // jQuery('.hex-surround-hover').css({'transition':'0.5s','opacity':'0'});
                // jQuery('.hover_change_01').attr('class',img1_classes+' hover_change_01');
                // jQuery('.hover_change_02').attr('class',img2_classes+' hover_change_02');
                // jQuery('.hover_change_03').attr('class',img3_classes+' hover_change_03');
                // jQuery('.hover_change_04').attr('class',img4_classes+' hover_change_04');
                // jQuery('.hover_change_05').attr('class',img5_classes+' hover_change_05');
                // jQuery('.hover_change_06').attr('class',img6_classes+' hover_change_06');
              
                // -- only hover image and other blank image show
                // jQuery('.hex-surround-blank').css({'transition':'0.5s','opacity':'1','filter':' blur(4px)'});
                jQuery(_this).siblings('.hex-surround-blank').css({'transition':'0','opacity':'0'});

                setTimeout(function(argument) {
                  // jQuery('.hex-surround-hover').css({'display':'block'});
                },200);
              },200);  
              setTimeout(function(){
                jQuery(".hover_change_01").fadeOut(300,function(){
                  jQuery(".hover_change_01").attr("src",'./assets/images/dark.png');  
                });
                jQuery(".hover_change_02").fadeOut(300,function(){
                  jQuery(".hover_change_02").attr("src",'./assets/images/dark.png');  
                });
                jQuery(".hover_change_03").fadeOut(300,function(){
                  jQuery(".hover_change_03").attr("src",'./assets/images/dark.png');  
                });
                jQuery(".hover_change_04").fadeOut(300,function(){
                  jQuery(".hover_change_04").attr("src",'./assets/images/dark.png');  
                });
                jQuery(".hover_change_05").fadeOut(300,function(){
                  jQuery(".hover_change_05").attr("src",'./assets/images/dark.png');  
                });
                jQuery(".hover_change_06").fadeOut(300,function(){
                  jQuery(".hover_change_06").attr("src",'./assets/images/dark.png');  
                });
                setTimeout(function (){
                  jQuery(".hover_change_01").fadeIn(100,function(){
                  });
                  jQuery(".hover_change_02").fadeIn(100,function(){
                  });
                  jQuery(".hover_change_03").fadeIn(100,function(){
                  });
                  jQuery(".hover_change_04").fadeIn(100,function(){
                  });
                  jQuery(".hover_change_05").fadeIn(100,function(){
                  });
                  jQuery(".hover_change_06").fadeIn(100,function(){
                    // jQuery(".hover_change_06").attr("src",'./assets/images/dark.png');  
                  });
                }, 300);                
              },200);

            },100);         
          },300);
        }
    });
    jQuery('.hex-surround'+value).mouseout(function(){
        if (mouseover) {        
          mouseover = false;

          mainHexImage.removeClass("scale-100");
          heading.removeClass("hidden"); // heading will be hidden
        }
    });  

  });

  jQuery('.main-hex-img').mouseover(function(){

    console.log('logo hoverrr');
    // jQuery('#heading').addClass('hidden');
    // jQuery('.main-hex-img').addClass('scale-100');
    // mainHexImage.attr("src", "./assets/images/vector3-hover.png"); // changing the main image to red coloured
    
    all_off_img();
    // jQuery('.hex-surround-common').removeClass('hidden');
    jQuery('.hex-surround-common').css({'transition':'0s','opacity':'1'});
    // jQuery('.hex-surround-blank').removeClass('hidden');
  });

  jQuery('.main-hex-img').mouseout(function(){

  //   console.log('logo hoverrr');
    
    // jQuery('#heading').removeClass('hidden');
    // jQuery('.main-hex-img').remove('scale-100');
    
    // mainHexImage.attr("src", "./assets/images/vector3.png");
  //   all_off_img();
  //   jQuery('.hex-surround-common').addClass('hidden');
  //   // jQuery('.hex-surround-common').css({'transition':'0','opacity':'1'});
  //   jQuery('.hex-surround-blank').addClass('hidden');
  });
});