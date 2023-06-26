var controller = new ScrollMagic.Controller();

var tl0 = new TimelineMax().add([
  TweenMax.to(".animation .container-1 .text-1", 1, { opacity: 0 }),
  TweenMax.to(".animation .container-1 .img-1", 1, { transform: "scale(3)" }),
  TweenMax.to(".animation .container-1 .text-1", 1, {
    opacity: 1,
    transform: "scale(3)",
  }),
]);

var scene = new ScrollMagic.Scene({
  duration: window.innerHeight,
  triggerElement: ".animation",
  scrub: 1,
  triggerHook: 0,
  duration: 1000,
})
  .setTween(tl0)
  .setPin(".animation")
  .addTo(controller);

const header = document.querySelector(".text-2");

var tl = new TimelineMax({
  onComplete: function () {
    header.style.position = "sticky";
    header.style.top = "0px";
  },
}).add([
  TweenMax.to(".animation-2 .container-2 .img-2", 0, { transform: "scale(5)" }),
  TweenMax.to(".animation-2 .container-2 .img-2", 1, { transform: "scale(1)" }),

  TweenMax.to(".animation-2 .container-2 .text-2", 0, { opacity: 0 }),
  TweenMax.to(".animation-2 .container-2 .text-2", 1, {
    opacity: 1,
    transform: "translateY(0%)",
  }),
  TweenMax.to(".animation-2 .container-2 .text-2", 1, {
    transform: "translateY(-300%) scale(3)",
  }),

  TweenMax.to(".animation-2 .container-2 .cont-2", 0, { opacity: 0 }),
  TweenMax.to(".animation-2 .container-2 .cont-2", 1, { opacity: 1 }),
]);

var scene2 = new ScrollMagic.Scene({
  duration: window.innerHeight,
  triggerElement: ".animation-2",
  triggerHook: 0,
  scrub: 1,
  duration: 1000,
})
  .setTween(tl)
  .setPin(".animation-2")
  .addTo(controller);

var tl3 = new TimelineMax({
  onComplete: function () {
    header.style.position = "sticky";
    header.style.top = "0px";
  },
}).add([
  TweenMax.to(".animation-3 .container-3", 1, { opacity: 0 }),
  TweenMax.to(".animation-3 .container-3", 1, { opacity: 1 }),

  TweenMax.to(".animation-3 .container-3 .img-3-1", 1, { opacity: 1 }),
  TweenMax.to(".animation-3 .container-3 .img-3-1", 1, { opacity: 0 }),
  TweenMax.to(".animation-3 .container-3 .img-3-2", 1, { opacity: 0 }),
  TweenMax.to(".animation-3 .container-3 .img-3-2", 1, { opacity: 1 }),
  // TweenMax.to('.animation-3 .container-3', 1, {backgroundImage: 'url(/images/three.png)'}),

  TweenMax.to(".animation-3 .container-3 .text-container-3 .text-cont-3-1", 1, {
    color: "black",
  }),
  TweenMax.to(".animation-3 .container-3 .text-container-3 .text-cont-3-2", 1, {
    opacity: 0,
  }),
  TweenMax.to(".animation-3 .container-3 .text-container-3 .text-cont-3-3", 1, {
    opacity: 0,
  }),

  TweenMax.to(".animation-3 .container-3 .text-cont-3-1-sub", 1, {
    opacity: 1,
    delay: 1,
  }),

  TweenMax.to(".animation-3 .container-3 .text-cont-3-1-sub", 1, {
    opacity: 0,
    delay: 2,
  }),
  TweenMax.to(".animation-3 .container-3 .text-container-3 .text-cont-3-1", 1, {
    opacity: 0,
    delay: 3,
  }),

  TweenMax.to(".animation-3 .container-3 .text-container-3 .text-cont-3-2", 1, {
    opacity: 1,
    delay: 4,
    color: "black",
  }),
  TweenMax.to(".animation-3 .container-3 .text-cont-3-2-sub", 1, {
    opacity: 1,
    delay: 5,
  }),

  TweenMax.to(".animation-3 .container-3 .text-cont-3-2-sub", 1, {
    opacity: 0,
    delay: 6,
  }),
  TweenMax.to(".animation-3 .container-3 .text-container-3 .text-cont-3-2", 1, {
    opacity: 0,
    delay: 7,
    color: "black",
  }),

  TweenMax.to(".animation-3 .container-3 .text-container-3 .text-cont-3-3", 1, {
    opacity: 1,
    color: "black",
    delay: 8,
  }),

  TweenMax.to(".animation-3 .container-3 .text-cont-3-3-sub", 1, {
    opacity: 1,
    delay: 9,
  }),
]);

var scene3 = new ScrollMagic.Scene({
  duration: window.innerHeight,
  triggerElement: ".animation-3",
  triggerHook: 0,
  duration: 10000,
})
  .setTween(tl3)
  .setPin(".animation-3")
  .addTo(controller);

var tl4 = new TimelineMax({
  onComplete: function () {
    header.style.position = "sticky";
    header.style.top = "0px";
  },
}).add([
  // TweenMax.to(".animation-4 .container-4 .text-4", 1, { opacity: 0 }),
  // TweenMax.to(".animation-4 .container-4 .img-4", 1, { opacity: 0 }),
  // TweenMax.to(".animation-4 .container-4 .text-4-1", 1, { opacity: 0 }),
  TweenMax.to(".animation-4 .container-4 .img-4", 1, {
    transform: "translateY(0%)",
    opacity: 1,
  }),
  TweenMax.to(".animation-4 .container-4 .text-4", 1, {
    top: "10%",
    opacity: 1,
  }),
  TweenMax.to(".animation-4 .container-4 .text-4-1", 1, {
    bottom: "40%",
    opacity: 1,
  }),
]);

var scene4 = new ScrollMagic.Scene({
  triggerElement: ".animation-4",
  triggerHook: 0,
  duration: 5000,
  reverse: true,
})
  .setTween(tl4)
  .setPin(".animation-4")
  .addTo(controller);

var tl5 = new TimelineMax({}).add([
  // TweenMax.to(".animation-5 .container-5 .text-5", 1, { opacity: 0 }),
  // TweenMax.to(".animation-5 .container-5 .img-5", 1, { opacity: 0 }),
  // TweenMax.to(".animation-5 .container-5 .text-5-1", 1, { opacity: 0 }),

  TweenMax.to(".animation-5 .container-5 .img-5", 1, { opacity: 1 }),
  TweenMax.to(".animation-5 .container-5 .text-5", 1, {
    top: "10%",
    opacity: 1,
  }),
  TweenMax.to(".animation-5 .container-5 .text-5-1", 1, {
    left: "10%",
    opacity: 1,
  }),
]);

var scene4 = new ScrollMagic.Scene({
  triggerElement: ".animation-5",
  triggerHook: 0,
  duration: 5000,
  reverse: true,
})
  .setTween(tl5)
  .setPin(".animation-5")
  .addTo(controller);
