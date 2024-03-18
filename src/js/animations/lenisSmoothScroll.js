const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    guestureOrientation: 'vertical',
    normalizeWheel: false,
    smoothTouch: false
  })
    
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
  
requestAnimationFrame(raf)


const navDropdownWrapper = document.querySelector('.nav-dropdown-wrapper');
const body = document.body;

// Function to handle when the display property changes
const handleDisplayChange = (mutationsList, observer) => {
mutationsList.forEach(mutation => {
  if (mutation.attributeName === 'style') {
    const display = window.getComputedStyle(navDropdownWrapper).getPropertyValue('display');
    if (display === 'flex') {
      // Prevent scrolling
      body.style.overflow = 'hidden';
      lenis.stop();
    } else {
      // Enable scrolling
      body.style.overflow = 'auto';
      lenis.start();
    }
  }
});
};

// Create a new MutationObserver
const observer = new MutationObserver(handleDisplayChange);

// Define the configuration options for the observer
const config = { attributes: true, attributeFilter: ['style'] };

// Start observing the target element
observer.observe(navDropdownWrapper, config);
