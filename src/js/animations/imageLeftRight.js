// Select elements with data-attribute "left-to-right" or "right-to-left"
let revealContainers = document.querySelectorAll("[data-attribute='left-to-right'], [data-attribute='right-to-left']");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
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
    tl.from(container, 1, {
      xPercent: -100,
      ease: Power2.out
    });
    tl.from(image, 1, {
      xPercent: 100,
      scale: 1.3,
      delay: -1,
      ease: Power2.out
    });
  } else if (dataAttribute === "right-to-left") { // Move from right to left
    tl.from(container, 1, {
      xPercent: 100,
      ease: Power2.out
    });
    tl.from(image, 1, {
      xPercent: -100,
      scale: 1.3,
      delay: -1,
      ease: Power2.out
    });
  }
});