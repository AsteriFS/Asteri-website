// Target element with class "burger-wrapper"
const targetElement = document.querySelector('.burger-wrapper');
const body = document.body;

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





// This function will set the overflowY to hidden or auto based on the mobile submenu opening
const parentElement = document.querySelector('.nav-tablet_parent');
const menuTabletLinks = document.querySelectorAll('.menu-tablet-link-child');
const navTabletChildNavigation = document.querySelector('.nav-table_child-navigation');
const hamburgerButton = document.querySelector('.hamburger-button');

// Function to set overflow-y based on the clicked element
const setOverflowYOnClick = (event) => {
    // Check if the clicked element has the class "menu-tablet-link-child"
    if (event.target.classList.contains('menu-tablet-link-child')) {
        parentElement.style.overflowY = 'hidden';
    } else if (event.target.classList.contains('nav-table_child-navigation')) {
        // Check if the clicked element has the class "nav-table_child-navigation"
        parentElement.style.overflowY = 'auto';
    } else if (event.target.classList.contains('.hamburger-button')) {
        // Check if the clicked element has the class ".hamburger-button"
        parentElement.style.overflowY = 'auto';
    }
};

// Add click event listeners to menuTabletLinks
menuTabletLinks.forEach((link) => {
    link.addEventListener('click', setOverflowYOnClick);
});

// Add click event listener to navTabletChildNavigation
navTabletChildNavigation.addEventListener('click', setOverflowYOnClick);

hamburgerButton.addEventListener('click', setOverflowYOnClick);

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
        lenis.stop();
    } else {
        document.body.style.overflow = 'hidden';
        lenis.start();
    }
}
  
