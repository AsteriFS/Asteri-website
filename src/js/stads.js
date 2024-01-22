// hide the city service section if the CMS with that condition is empty
window.addEventListener('DOMContentLoaded', function(){
	$('.w-dyn-bind-empty').parent('.section_city-services').each(function(){ $(this).hide()})
})