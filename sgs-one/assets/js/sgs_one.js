
jQuery(document).ready(function(){

  if(screen.availWidth >= 1024){
    // console.log('1');
    jQuery('#image_light').attr('src','assets/images/1.png');
  }else if(screen.availWidth >= 767){
    // console.log('2');
    jQuery('#image_light').attr('src','assets/images/t1.png');
  }else{
    // console.log('3');
    jQuery('#image_light').attr('src','assets/images/m1.png');
  }
})


var scroll_section_parts = ["first", "secound", "thierd"];
var scroll_flag = "end";
window.scroll_var = {}; 
window.scroll_var.scroll_flag = "end";

window.scroll_var.scroll_index = 0;

section_one();


var scroll_section = null;
var scroll_index = 0;
setTimeout(function () {
  if(screen.availWidth >= 1024){
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

          if(scroll_section == 'secound'){
            // console.log('secound_if');
            if (scrollY == 0 && window.comeBack) {
              
              // console.log('secound_if_if');
              
              for_section(scroll_section, "preview");
              setTimeout(function () {
                scroll_flag = "end";
              }, 3000);              
            }else{
              // console.log('secound_if_else');
              scroll_index = 3;   
              scroll_flag = "end";
            }
          }else{
            for_section(scroll_section, "preview");              
            setTimeout(function () {
              scroll_flag = "end";
            }, 500);
          }

          // for_section(scroll_section, "preview");
          // setTimeout(function () {
          //   scroll_flag = "end";
          // }, 500);


        } else {


          if (scroll_index != scroll_section_parts.length - 1) {
            scroll_index++;
          }
          if(scroll_section_parts[scroll_index] !== scroll_section){

            scroll_section = scroll_section_parts[scroll_index];          
                      
            for_section(scroll_section, "next");
            setTimeout(function () {
              scroll_flag = "end";
            }, 500);
          }else{
            scroll_flag = "end";
          }


        }
      }
    }
  });
  }else{

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

      // console.log('ifffff');
      // console.log(window.scroll_var.scroll_flag);
      if(window.scroll_var.scroll_flag == 'end'){

        window.scroll_var.scroll_flag = 'start';

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            /* right swipe */
          } else {
            /* left swipe */
          }
        } else {
          if (yDiff > 0) {

            if (window.scroll_var.scroll_index != scroll_section_parts.length - 1) {
              window.scroll_var.scroll_index++;
            }
            if(scroll_section_parts[window.scroll_var.scroll_index] !== scroll_section){
              scroll_section = scroll_section_parts[window.scroll_var.scroll_index];          
                        
              for_section(scroll_section, "next");
              // setTimeout(function () {
              //   scroll_flag = "end";
              // }, 500);
            }else{
                
              window.scroll_var.scroll_flag = "end";
            }

          } else {


              if (!window.scroll_var.scroll_index <= 0) {
                window.scroll_var.scroll_index--;
              }
              if(scroll_section_parts[window.scroll_var.scroll_index] !== scroll_section){
                scroll_section = scroll_section_parts[window.scroll_var.scroll_index];

                for_section(scroll_section, "preview");              
                // setTimeout(function () {
                //   scroll_flag = "end";
                // }, 500);
              }else{
                
                window.scroll_var.scroll_flag = "end";
              }

              // for_section(scroll_section, "preview");
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

function for_section(section, next_preview) {
  if (section == "first") {
    section_one(scroll_section, next_preview);
  } else if (section == "secound") {
    section_two(scroll_section, next_preview);
  } else if (section == "thierd") {
    section_three(scroll_section, next_preview);
  }
}

function section_one(section, next_preview) {
    console.log('first');

  if(screen.availWidth >= 1024){
    console.log('first_1');

    // setTimeout(function(){

    //   jQuery('#image_light').css({'object-fit':'cover','height':screen.availHeight+'px','width':screen.availWidth+'px'});
    // },100);

    jQuery('#image_light').attr('src','./assets/images/1.png');
    jQuery(document).ready(function(){

      jQuery('#image_light').css({'bottom':'auto'});
    })
    jQuery('#screen_logo').css('opacity','0');

  }else if(screen.availWidth > 767){

    jQuery('#image_light').attr('src','./assets/images/t1.png');
    jQuery('#screen_logo').css('opacity','0');
    
    if (next_preview == 'next') {

    }

    if(next_preview == 'preview'){
 
    }
  }else{

    jQuery('#image_light').attr('src','./assets/images/m1.png');
    jQuery('#screen_logo').css('opacity','0');

    if (next_preview == 'next') {

    }

    if(next_preview == 'preview'){

    }
  }
  
  setTimeout(function(){

    window.scroll_var.scroll_flag = "end";
  },500);
}
function section_two(section, next_preview) {
    // console.log('secound');
  if(screen.availWidth >= 1024){

    if (next_preview == 'next') {

      jQuery('#image_light').attr('src','./assets/images/2.png');
      jQuery('#screen_logo').css('opacity','1');
    }

    if(next_preview == 'preview'){
      // jQuery('#screen_logo').css('opacity','1');
    }
  }else if(screen.availWidth >767){

    if (next_preview == 'next') {
      jQuery('.scroll_text').css({'display':'none'});
      jQuery('#image_light').attr('src','./assets/images/t2.png');
      jQuery('#screen_logo').css('opacity','1');

      jQuery('#screen_logo').css({'width':'40%','left':'10%','bottom':'13%','transform':'scale(1)'});

      setTimeout(function(){

        window.scroll_var.scroll_flag = "end";
      },500); 
    }

    if(next_preview == 'preview'){

      // if(document.querySelector('.scroll_text').scrollTop == '0'){
      if(window.section_preview_scroll){
        jQuery('#image_light').css({'bottom':'0','transform':'scale(1)','left':'0'})

        jQuery('.scroll_text').css({'display':'none'});
        jQuery('#image_light').attr('src','./assets/images/t2.png');
        jQuery('#screen_logo').css('opacity','1');

        jQuery('#screen_logo').css({'width':'40%','left':'10%','bottom':'13%','transform':'scale(1)'});

        setTimeout(function(){
          jQuery('body #screen_logo').css({'transition':'3s'});
          window.scroll_var.scroll_flag = "end";
        },3000);
      }else{
        
        window.scroll_var.scroll_flag = "end";
        window.scroll_var.scroll_index = 3;
      } 
    }

  }else{

    console.log('mobile secound');

    if (next_preview == 'next') {
      jQuery('.scroll_text').css({'display':'none'});
      jQuery('#image_light').attr('src','./assets/images/m2.png');
      jQuery('#screen_logo').css('opacity','1');

      if(screen.availWidth > 600){
        
        jQuery('#screen_logo').css({'width':'40%','left':'10%','bottom':'13%','transform':'scale(1)'});
      }else{

        jQuery('#screen_logo').css({'width':'40%','left':'10%','bottom':'10%','transform':'scale(1)'});
      }
      setTimeout(function(){

        window.scroll_var.scroll_flag = "end";
      },500); 
    }

    if(next_preview == 'preview'){

      // if(document.querySelector('.scroll_text').scrollTop == '0'){
      if(window.section_preview_scroll){
        jQuery('#image_light').css({'bottom':'0','transform':'scale(1)','left':'0'})

        jQuery('.scroll_text').css({'display':'none'});
        jQuery('#image_light').attr('src','./assets/images/m2.png');
        jQuery('#screen_logo').css('opacity','1');

        if(screen.availWidth > 600){
          
          jQuery('#screen_logo').css({'width':'40%','left':'10%','bottom':'13%','transform':'scale(1)'});
        }else{

          jQuery('#screen_logo').css({'width':'40%','left':'10%','bottom':'10%','transform':'scale(1)'});
        }

        setTimeout(function(){
          jQuery('body #screen_logo').css({'transition':'3s'});
          window.scroll_var.scroll_flag = "end";
        },3000);
      }else{
        
        console.log('mobile secound else');
        window.scroll_var.scroll_flag = "end";
        window.scroll_var.scroll_index = 3;
      } 
    }

   
  }  
}
function section_three(section, next_preview) {
    // console.log('thierd');
  if(screen.availWidth >= 1024){  
    if (next_preview == 'next') {
      jQuery('#screen_logo').trigger('click');
    }
  }else if(screen.availWidth > 767){
    jQuery('#image_light').css({'bottom':'41vw','transform':'scale(1.7)','left':'33vw','transition':'1s'})
    jQuery('#screen_logo').css({'transition':'3s','transform':'scale(50)','bottom':'44%','left':'-76%'});

    setTimeout(function(){
      jQuery('body #screen_logo').css({'opacity':'0'});
      jQuery('.scroll_text').css({'display':'block','opacity':'1'});
    },3000);

    if (next_preview == 'next') {

    }

    if(next_preview == 'preview'){

    }
  }else{

    jQuery('#image_light').css({'bottom':'72vw','transform':'scale(1.7)','left':'33vw','transition':'1s'})
    jQuery('#screen_logo').css({'transition':'3s','transform':'scale(50)','bottom':'44%','left':'-76%'});

    setTimeout(function(){
      jQuery('body #screen_logo').css({'opacity':'0'});
      jQuery('.scroll_text').css({'display':'block','opacity':'1'});
    },3000);
    if (next_preview == 'next') {

    }

    if(next_preview == 'preview'){

    }
  }

  setTimeout(function () {

    window.scroll_var.scroll_flag = "end";
  }, 3000);

}

