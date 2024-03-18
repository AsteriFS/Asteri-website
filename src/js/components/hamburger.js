

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


  
