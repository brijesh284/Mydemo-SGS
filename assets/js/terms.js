//Head
var termsHead = document.getElementById("termsHead");
var speed = 1;

function expandingHead() {
  var scrolltopHead = window.pageYOffset; // get number of pixels document has scrolled vertically
  var scrollAndSpeedHead = scrolltopHead / speed;
  //Expand using transform
  //termsHead.style.transform = "scalex( " + Math.min(Math.max(scrollAndSpeedHead, 1), 10) + ")";

  //Or using width
  termsHead.style.width = Math.min(Math.max(scrollAndSpeedHead, 0), 10) + "%";
  termsHead.style.marginRight =
    Math.min(Math.max(scrollAndSpeedHead, 0), 40) + "px";
}

window.addEventListener(
  "scroll",
  function () {
    // on page scroll
    requestAnimationFrame(expandingHead); // call parallaxing()
  },
  false
);
// Body
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add a class to sections when they enter the viewport
function addClassOnScroll() {
  var sections = document.getElementsByClassName("terms-content-wrap");
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (isInViewport(section)) {
      section.classList.add("highlight");
    }
  }
}

// Event listener for scroll events
window.addEventListener("scroll", addClassOnScroll);

// Call the function initially to apply the class to sections visible on page load
addClassOnScroll();
