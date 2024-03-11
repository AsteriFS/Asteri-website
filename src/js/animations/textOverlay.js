let typeSplit;

// Split the text up
// add data-attribute 'mask-text' to the element
function runSplit() {
  typeSplit = new SplitType("[data-attribute='mask-text']", {
    types: "lines, words"
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}

runSplit();


// Create staggered animation
function createAnimation() {
  let allMasks = $(".word").map(function() {
    return $(this).find(".line-mask");
  }).get();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "[data-attribute='mask-text']",
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });

  tl.to(allMasks, {
    width: "0%",
    duration: 1,
    stagger: 0.5
  });
}