import '../omOss.scss'

import './components/formValidation.js'



// hide the FAQ block if the question is empty
$('.w-dyn-bind-empty').parents('.service-faq-list_item').each(function(){ 
  $(this).hide()
})


///////////////////////////////////////////////
// code for enhanced conversion tracking
///////////////////////////////////////////////
const form = document.getElementById('wf-form-Tj-nster');
form.addEventListener('submit', function(event) {
  // Get the email and phone number values from the form inputs
  const email = document.getElementById('E-post').value;
  const phoneNumber = document.getElementById('form-phone').value;


  // Push data to the dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'offer_form_completion',
    'email': email,
    'phone_number': phoneNumber
  });

});


