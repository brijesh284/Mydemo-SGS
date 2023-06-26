/*-----------------------------Storage & Logistics------------------------------------*/
var $storage_main_bg_container = jQuery('.storage_main_container');
var $storage_page_section_container = jQuery('.storage_sub_container');

var scroll_flag = 'not_scrolled';
jQuery(document).ready(function(){
    
    setTimeout(function(){
    
      $storage_main_bg_container.css({'background-size':'170em'});
    
      jQuery(window).on('wheel', function(event){
        if( scroll_flag == 'not_scrolled'){
          if(event.originalEvent.deltaY !== 0){
            scroll_flag = 'scrolled';
            if(event.originalEvent.deltaY < 0){

            }
            else {
              $storage_page_section_container.animate({opacity:'1'},1500); 
              $storage_main_bg_container.css({'background-size':'220em'});
            }
          }
        }
      });
    },1500);
})

