
/*-----------------------------Training Rooms------------------------------------*/
var $training_main_bg_container = jQuery('.training_main_container');
var $training_page_section_container = jQuery('.training_sub_container');
var $training_page_section_title = jQuery('.training_title');
var $training_page_section_contant = jQuery('.training_contant');

var scroll_flag = 'not_scrolled';
jQuery(document).ready(function(){
  
  $training_main_bg_container.animate({opacity:'1'}); 
  
  setTimeout(function(){
    jQuery(window).on('wheel', function(event){
      if( scroll_flag == 'not_scrolled'){
        if(event.originalEvent.deltaY !== 0){
          scroll_flag = 'scrolled';
          if(event.originalEvent.deltaY < 0){

          }
          else {
                $training_page_section_container.animate({left:'0'});
                $training_page_section_title.animate({opacity:'1'});
                $training_page_section_contant.animate({opacity:'1'},3000);
          }
        }
      }
    });
  },1500);
})


