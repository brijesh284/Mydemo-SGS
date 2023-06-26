$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    const largeScreen = $(window).width() > 1440 ? true : false;
    let firstScroll = JSON.parse(localStorage.getItem('fleet-scroll'));
    var scrollTop = largeScreen ? scroll - 900 : scroll;
    console.log('🚀 ~ file: fleet-manage.html:279 ~ scroll:', scroll, scroll < 7000);
    const scrollPercent = `${Math.round(scroll) / 10}%`;
    const opacity = 1 - scroll / 300;

    $('.landing_desc').css({
      transform: `translateY(${scroll * 5}%)`,
      // opacity: 1 - scroll / 2,
    });

    $('#read-more-btn').css({
      transform: `translateY(${scroll * 5}%)`,
      // opacity: 1 - scroll / 2,
    });

    $('.book_now_btn').css({
      transition: '1s',
      transform: 'translateX(28vw)',
      position: 'fixed',
    });

    // if (scroll < 5) {
    //   $('.scroll-btns').addClass('justify-content-end').removeClass('justify-content-between');
    // } else {
    //   $('.scroll-btns').removeClass('justify-content-end').addClass('justify-content-between');
    // }
    // else {
    //   $('.book_now_btn').css({
    //     transition: '2s',
    //     transform: 'translateX(0vw)',
    //   });
    // }

    $('.fleet_title_2').css({
      opacity,
    });

    $('.img-first').css({
      transform: `translateX(-${scrollPercent})`,
      opacity,
    });
    $('.img-second').css({
      transform: `translate(${scrollPercent}, 31%)`,
      opacity,
    });
    $('.img-second').removeClass('second_scroll');

    // car content first para
    // if (scrollTop < 700) {
    // $('.car_text')
    //   .text('We offer our clients a convenient way to ')
    //   .append('<b>rent a car </b>')
    //   .append('<span>for their travel or personal needs</span>');
    //   localStorage.setItem('fleet-scroll', JSON.stringify(true));
    // } else if (scrollTop > 700 && firstScroll) {
    //   firstScroll = false;
    //   localStorage.setItem('fleet-scroll', JSON.stringify(false));
    // return  $('.car_text')
    //   .text('Our fleet has a wide selection of cars, ranging from  ')
    //   .append(
    //     '<span class="font-bold d-inline-block"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">economy cars</span>'
    //   );
    // } else if (scrollTop > 1100) {
    //   $('.car_text')
    //     .text('Our fleet has a wide selection of cars, ranging from  ')
    //     .append('<span class="font-bold d-inline-block">economy cars</span>')
    //     .append('<span class="d-inline-block mx-2" > to </span>')
    //     .append(
    //       '<span class="font-bold d-inline-block"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">luxury sedan</span>'
    //     );
    // }

    // second para
    // scrollTop = largeScreen ? scrollTop - 600 : scrollTop;
    // if (scrollTop < 2150) {
    //   $('.car_text_two').text(
    //     'Our team-building services are part of our program and are designed to improve  '
    //   );
    // } else if (scrollTop > 2150 && scrollTop < 2672) {
    //   $('.car_text_two')
    //     .text(
    //       'first Our team-building services are part of our program and are designed to improve  '
    //     )
    //     .append(
    //       '<span class="font-bold d-inline-block"  data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">communication,</span>'
    //     );
    // } else if (scrollTop > 2672 && scrollTop < 3125) {
    //   $('.car_text_two')
    //     .text(
    //       'second Our team-building services are part of our program and are designed to improve  '
    //     )
    //     .append('<span class="font-bold d-inline-block">communication,</span>')
    //     .append(
    //       '<span class="font-bold d-inline-block"  data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">collaboration</span>'
    //     );
    // } else if (scrollTop > 3125) {
    //   $('.car_text_two')
    //     .text(
    //       'third Our team-building services are part of our program and are designed to improve  '
    //     )
    //     .append('<span class="font-bold d-inline-block">communication, collaboration </span>')
    //     .append(
    //       '<span class="d-inline-block" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000"> and <span class="font-bold d-inline-block"> problem-solving skills</span></span>'
    //     );
    // }

    if (scrollTop > 3500) {
      $('.book_now_btn').css({
        display: 'none',
      });
    } else {
      $('.book_now_btn').css({
        display: 'block',
      });
    }
  });
});
