  
 // Function to handle checkbox click events
	// we add values of each checkbox1_ to hidden input field "checkbox1_group
  // we add values of each checkbox2_ to hidden input field "checkbox2_group
  // we add values of each checkbox3_ to hidden input field "checkbox3_group
  // we add values of each checkbox4_ to hidden input field "checkbox4_group
  function handleCheckboxClick(event) {
    // Get the checkbox element
    const checkbox = event.target;
    
    // Get the value to add or remove from the checkbox id
    const valueToAdd = checkbox.id.split('_')[1];

    // Get the group number from the checkbox id
    const groupNumber = checkbox.id.split('_')[0].replace('checkbox', '');

    // Get the corresponding input field for the checkbox group
    const inputField = document.getElementById(`checkbox${groupNumber}_group`);

    // Get the current values of the input field
    let values = inputField.value ? inputField.value.split(',').map(value => value.trim()) : [];

    // Check if the checkbox is checked
    if (checkbox.checked) {
        // Add the value to the input field if it doesn't already exist
        if (!values.includes(valueToAdd)) {
            values.push(valueToAdd);
        }
    } else {
        // Remove the value from the input field if it exists
        values = values.filter(value => value !== valueToAdd);
    }

    // Update the input field value with the modified values
    inputField.value = values.join(', ');
}

// Add click event listeners to all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="checkbox"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', handleCheckboxClick);
});