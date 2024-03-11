import '../main.scss'

import './components/accordion.js'
import './components/hamburger.js'
import './animations/revealOnScroll.js'
import './animations/textOverlay.js'
import './animations/lenisSmoothScroll.js'
import './animations/imageLeftRight.js'

// Adding titles to images
$('img').each(function(){
    // take alt text of each image
  let imageAltText = $(this).attr('alt');
    // add as title to each image
  $(this).attr('title', imageAltText);
});


// Disable submitting form fields during development
// $('form').submit(function() {
//   alert('Form submissions have been disabled during development.');
//   return false;
// });