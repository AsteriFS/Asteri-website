import '../nyheter.scss'

import './components/excerptSmall.js'

document.addEventListener('DOMContentLoaded', function () {
  let category = document.querySelectorAll('.news-category-filter-cms input[type="checkbox"]');
  let allCategory = document.getElementById('all-categories');

  function handleCheckboxChange() {
    // Check if any checkbox inside the news-category-filter-cms is checked
    let anyChecked = Array.from(category).some(checkbox => checkbox.checked);

    // Update the allCategory based on the check state of other category
    allCategory.classList.toggle('is-alternate', anyChecked);
  }

  // Attach the event listener to each checkbox
  category.forEach(function (checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
  });
});