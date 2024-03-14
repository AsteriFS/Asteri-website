
// Select elements with data-attribute "left-to-right" or "right-to-left"
let revealContainers = document.querySelectorAll("[data-attribute='left-to-right'], [data-attribute='right-to-left']");

revealContainers.forEach((container) => {
  let images = container.querySelectorAll("img");
  let dataAttribute = container.dataset.attribute;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  
  // Check the data-attribute value and apply animations accordingly
  if (dataAttribute === "left-to-right") { // Move from left to right
    tl.from(container, {
      duration: 1,
      xPercent: -100,
      ease: Power2.out
    });
    images.forEach((image) => {
      tl.from(image, {
        duration: 1,
        xPercent: 100,
        scale: 1.3,
        ease: Power2.out
      }, "-=1"); // Animation starts 1 second after the container animation starts
    });
  } 
  else if (dataAttribute === "right-to-left") {
  	tl.from(container, {
      duration: 1,
      xPercent: 100,
      ease: Power2.out
    });
    images.forEach((image) => {
      tl.from(image, {
        duration: 1,
        xPercent: -100,
        scale: 1.3,
        ease: Power2.out
      }, "-=1"); // Animation starts 1 second after the container animation starts
    });
  };
});
