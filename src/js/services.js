import '../omOss.scss'

import './components/formValidation.js'



// hide the FAQ block if the question is empty
$('.w-dyn-bind-empty').parents('.service-faq-list_item').each(function(){ 
  $(this).hide()
})



