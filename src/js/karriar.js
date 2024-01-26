import '../karriar.scss'

document.addEventListener('DOMContentLoaded', function () {
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
});

// excerpt career description to 24 characters
const excerpts = Array.from(document.querySelectorAll(".excerpt"));

excerpts.forEach(item => {
    item.innerText = item.innerText.slice(0, 24) + "...";
})