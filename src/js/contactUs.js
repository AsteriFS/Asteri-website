import './components/formValidation.js'


///////////////////////////////////////////////
// code for enhanced conversion tracking
///////////////////////////////////////////////
const form = document.getElementById('wf-form-Kontakta-oss');
form.addEventListener('submit', function(event) {
  // Get the email and phone number values from the form inputs
  const email = document.getElementById('Email-3').value;
  const phoneNumber = document.getElementById('form-phone').value;


  // Push data to the dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'contact_form_completion',
    'email': email,
    'phone_number': phoneNumber
  });

});