$(document).ready(function () {
  let isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;

  if (isMobile) {
    $(".side-bar").css("display", "none");
    $(".side-toogleer").click(function () {
      $(".side-bar").css("display", "block");
    });
    $(".bar-closer").click(function () {
      $(".side-bar").css("display", "none");
    });
  } else {
    $(".side-toogleer").click(function () {
      $(".side-bar").css("right", "0%");
    });
    $(".bar-closer").click(function () {
      $(".side-bar").css("right", "-50%");
    });
  }

  // togglers
  $(".nav-one").click(function () {
    $(".nav-one-content").slideToggle();
  });
  $(".nav-two").click(function () {
    $(".nav-two-content").slideToggle();
  });
  $(".nav-three").click(function () {
    $(".nav-three-content").slideToggle();
  });
  $(".nav-four").click(function () {
    $(".nav-four-content").slideToggle();
  });
  $(".nav-five").click(function () {
    $(".nav-five-content").slideToggle();
  });

  $("#language").click(() => {
    if ($("#language").attr("title") == "Germany") {
      $("#language").attr("src", "assets/images/united-kingdom.png");
      $("#language").attr("title", "English");
    } else {
      $("#language").attr("src", "assets/images/germany.png");
      $("#language").attr("title", "Germany");
    }
  });
});
