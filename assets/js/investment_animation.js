$(document).ready(function () {
  // var el = document.getElementById('foo');
  // var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  // var fontSize = parseFloat(style);
  $(".card_hover_inner_text").css({
    transform: "scale(0.8)",
  });

  $(".card_hover").mouseover(function () {
    // console.log('hover innnnnnnnnn');

    // -- card text
    $(".card_hover_inner_text").css({
      transform: "scale(0.8)",
    });

    // -- map tital
    $(".map .map-title").css({
      width: "100%",
      "margin-left": "0%",
    });

    // -- map
    $(".map_hover").css({
      transform: "scale(0.8)",
    });

    // -- after map tital
    $(".seeking .seeking-title h2").css({
      transition: "0.5s",
      "align-items": "flex-start",
    });
  });

  $(".card_hover").mouseout(function () {
    // console.log('hover outttttttt');

    // -- card text
    $(".card_hover_inner_text").css({
      transform: "scale(0.8)",
    });

    // -- map tital
    $(".map .map-title").css({
      width: "100%",
      "margin-left": "0%",
    });

    // -- map
    $(".map_hover").css({
      transform: "scale(1)",
    });

    // -- after map tital
    $(".seeking .seeking-title h2").css({
      transition: "0.5s",
      "align-items": "flex-end",
    });
  });
});
