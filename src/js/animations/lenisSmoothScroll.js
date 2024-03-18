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
const mutation = new MutationObserver(handleDisplayChange);

// Define the configuration options for the observer
const configuration = { attributes: true, attributeFilter: ['style'] };

// Start observing the target element
mutation.observe(navDropdownWrapper, configuration);


/* prevent lenis scroll when main menu is open */
// Target element with class "burger-wrapper"
const targetElement = document.querySelector('.burger-wrapper');

// Function to be executed when the "active" class is added
const activateCode = () => {
    body.style.overflow = 'hidden';
    lenis.stop();
};

// Function to be executed when the "active" class is removed
const deactivateCode = () => {
    body.style.overflow = 'auto';
    lenis.start();
};

// Create a new MutationObserver
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        // Check if "active" class is added
        if (mutation.target.classList.contains('active')) {
            activateCode();
        }
        // Check if "active" class is removed
        else if (!mutation.target.classList.contains('active')) {
            deactivateCode();
        }
    });
});

// Configure the observer to monitor attributes and childList
const config = { attributes: true, childList: true, subtree: true };

// Start observing the target element
observer.observe(targetElement, config);


////////////
// this observer will prevent page scroll if any of the nav-dropdown-wrappers are open
////////////

  // Function to handle changes in the DOM
  function handleMutation(mutationsList, observer) {
    monitorNavDropdowns();
}

// Create a MutationObserver instance
var observerElement = new MutationObserver(handleMutation);

// Target elements with the class '.nav-dropdown-wrapper'
var targetElements = document.querySelectorAll('.nav-dropdown-wrapper');

// Configure the observer to watch for changes in attributes
var observerConfig = { attributes: true, subtree: true };

// Start observing the target elements
targetElements.forEach(function (element) {
    observerElement.observe(element, observerConfig);
});

// Function to monitor '.nav-dropdown-wrapper' elements
function monitorNavDropdowns() {
    var navDropdowns = document.querySelectorAll('.nav-dropdown-wrapper');
    var shouldHideOverflow = true;

    navDropdowns.forEach(function (dropdown) {
        if (window.getComputedStyle(dropdown).display === 'flex') {
            shouldHideOverflow = false;
            return;
        }
    });

    if (shouldHideOverflow) {
        document.body.style.overflow = 'auto';
        lenis.start();
    } else {
        document.body.style.overflow = 'hidden';
        lenis.stop();
    }
}

