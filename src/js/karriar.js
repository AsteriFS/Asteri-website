import '../karriar.scss'

import './components/excerpt.js'
import './components/formValidation.js'




  let category = document.querySelectorAll('.collection-list input[type="checkbox"]');
  let allCategory = document.getElementById('all-categories');

  function handleCheckboxChange() {
    // Check if any checkbox inside the collection-list is checked
    let anyChecked = Array.from(category).some(checkbox => checkbox.checked);

    // Update the allCategory based on the check state of other category
    allCategory.classList.toggle('is-alternate', anyChecked);
  }

  // Attach the event listener to each checkbox
  category.forEach(function (checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
  });


//////////////////

  // swiper js
  var swiper = new Swiper(".myswiper", {
    allowTouchMove: false,
  });

  let nextButton = document.querySelector('.swiper-next');
  let prevButton = document.querySelector('.swiper-prev');
  let slideNumber = 1;

  function checkFields(direction){
     // Get the currently active slide
     var activeSlide = document.querySelector('.swiper-slide-active');

     // select all rows with input fields
     var formRow = activeSlide.querySelectorAll('.contact-form-input-row');
     let hasError = false;
 
     // loop through each row and check its input fields and checkboxes
     // to see if they are not empty
     for (let j = 0; j < formRow.length; j++) {
       let selectFields = formRow[j].querySelectorAll('select');
       let inputFields = formRow[j].querySelectorAll('input[type="text"]');
       let errorText = formRow[j].querySelector('.contact-form_error-text');
       var checkboxes = formRow[j].querySelectorAll('input[type="checkbox"]');
       let checked = false;
 
       // Loop through each select field if there is any
       if(selectFields.length > 0){
         selectFields.forEach(function (selectField) {
           // Check if the input field has value
           if (selectField.value) {
             errorText.style.display = 'none';
             hasError = false;
           } else {
             errorText.style.display = 'block';
             hasError = true;
             return
           }
         });
       }
 
       // Loop through each input field if there is any
       if(inputFields.length > 0){
         inputFields.forEach(function (inputField) {
           // Check if the input field has value
           if (inputField.value) {
             errorText.style.display = 'none';
             hasError = false;
           } else {
             errorText.style.display = 'block';
             hasError = true;
             return
           }
         });
       }
 
 
       // Loop through each checkbox field if there is any
       if(checkboxes.length > 0){
         checkboxes.forEach(function (checkbox) {
           // Check if the checkbox is checked
           if (checkbox.checked) {
             checked = true;
             errorText.style.display = 'none';
           } 
         });
       }
 
 
       if(checkboxes.length > 0){
         if (!checked) {
           errorText.style.display = 'block';
           hasError = true
         } 
       }
     }
 
     if(!hasError){
      if(direction === 'next'){
        slideNumber++
        swiper.slideNext();
        
        // Scroll to the top of the 'swiper-wrapper' element
        let swiperWrapper = document.querySelector('.swiper-wrapper');
        let headerOffset = 120;
        var swiperPosition = swiperWrapper.getBoundingClientRect().top;
        var offsetPosition = swiperPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        if(slideNumber === 2){
          document.querySelector('.contact-form-navigation-block .swiper-prev').style.display = 'flex';
          document.querySelector('.contact-form-navigation-block .swiper-prev').addEventListener('click', function(){
            prevSlide();
          });
        } else {
          document.querySelector('.contact-form-navigation-block').style.display = 'none';
        }
      } 
     }
  }

  function prevSlide(){
    slideNumber--
    swiper.slidePrev();

    // Scroll to the top of the 'swiper-wrapper' element
    let swiperWrapper = document.querySelector('.swiper-wrapper');
    let headerOffset = 120;
    var swiperPosition = swiperWrapper.getBoundingClientRect().top;
    var offsetPosition = swiperPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if(slideNumber === 1){
      document.querySelector('.contact-form-navigation-block .swiper-prev').style.display = 'none';
    } else {
      document.querySelector('.contact-form-navigation-block').style.display = 'block';
    }
  }


  nextButton.addEventListener('click', function() {
    checkFields('next')
  });

  prevButton.addEventListener('click', function() {
    prevSlide()
  });








