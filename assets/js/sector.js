$('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
      infinite: false,
      speed: 1000,
    asNavFor: '.slider-thumb',
      arrows: false,
  });
  $('.slider-thumb').slick({
    centerMode: true,
    slidesToShow: 8,
    asNavFor: '.slider-content',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });