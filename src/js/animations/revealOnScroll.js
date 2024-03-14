
setTimeout(() => {
    // Get all elements with the data-attribute "reveal-on-scroll"
    const nestoElements = document.querySelectorAll('[data-attribute="reveal-on-scroll"]');

    // Loop through each element
    nestoElements.forEach(element => {
    // Create a GSAP timeline for the animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Adjust this value to change when the animation starts
            end: 'bottom 20%', // Adjust this value to change when the animation ends
            toggleActions: 'play none none reverse', // Reverse the animation when the element leaves the viewport
            markers: false // For debugging, can be removed
        }
    });

    // Add animation to reveal the element
    tl.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    });
}, 100);