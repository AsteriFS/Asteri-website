setTimeout(() => {
  function runSplit() {
    // Target each element with data-attribute='mask-text'
    document.querySelectorAll("[data-attribute='mask-text']").forEach(element => {
      // Split the text for each element
      const typeSplit = new SplitType(element, {
        types: "lines"
      });

      // Add line mask to each word
      element.querySelectorAll(".line").forEach(word => {
        const lineMask = document.createElement('div');
        lineMask.classList.add('line-mask');
        word.appendChild(lineMask);
      });

      // Create animation for each element
      createAnimation(element);
    });
  }

  function createAnimation(element) {
    // Select all line masks for the given element
    const allMasks = Array.from(element.querySelectorAll(".line .line-mask"));

    // Create a timeline for the given element
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
      }
    });

    // Animate the line masks
    tl.to(allMasks, {
      width: "0%",
      duration: 0.5,
      stagger: 0.5
    });
  }

  // Run the split and animation setup
  runSplit();
}, 1000);