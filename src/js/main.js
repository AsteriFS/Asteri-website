// .error-msg{
//    color: #f2545b
// }
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/css/intlTelInput.css">
// <meta charset="utf-8"></meta>

// <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/intlTelInput.min.js"></script>
// <script></script>

import '../main.scss'

let input = document.querySelector("#phone")
let	dialCode = document.querySelector(".dialCode")
let errorMsg = document.querySelector("#error-msg")
let formSubmit = document.querySelector('#form-submit');

let iti = intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  initialCountry: "se",
  showSelectedDialCode: true,
//   customPlaceholder: function() {
//     return "e.g. ssss";
//   },
});

var updateInputValue = function (event) {
    dialCode.value = "+" + iti.getSelectedCountryData().dialCode;
};
input.addEventListener('input', updateInputValue, false);
input.addEventListener('countrychange', updateInputValue, false);

var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

var reset = function() {
input.classList.remove("error");
errorMsg.innerHTML = "";
errorMsg.classList.add("hide");
formSubmit.classList.remove("is-diabled");
};

input.addEventListener('blur', function() {
reset();
if (input.value.trim()) {
 if (iti.isValidNumber() == false) {
   input.classList.add("error");
   formSubmit.classList.add("is-diabled");
   var errorCode = iti.getValidationError();
   errorMsg.innerHTML = errorMap[errorCode];
   errorMsg.classList.remove("hide");
 }
}
});

input.addEventListener('change', reset);
input.addEventListener('keyup', reset);