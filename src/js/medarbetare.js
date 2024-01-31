import './components/formValidation.js'


// Target all elements with the class "team_block-info"
$('.team_block-info').each(function() {
    var hideDevider = true;

    // Check all elements with class "team_block-info-contact"
    $(this).find('.team_block-info-contact').each(function() {
        // Check if the element has class "w-condition-invisible"
        if (!$(this).hasClass('w-condition-invisible')) {
            hideDevider = false;
            return false; // Break out of the loop if one element doesn't have the class
        }
    });

    // If all elements have class "w-condition-invisible", hide the "team_block-devider"
    if (hideDevider) {
        $(this).find('.team_block-devider').hide();
    }
});

