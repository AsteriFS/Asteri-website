const buttons = document.querySelectorAll('.sticky_navigation-btn');
const sections = document.querySelectorAll('.sticky_content h3');
let currentActiveButton = null;


document.addEventListener("scroll", function () {

  let currentSection = "";

  sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 50 && rect.bottom >= 50) {
          currentSection = section.id;
      }
  });

  const newActiveButton = Array.from(buttons).find(
      (button) => button.getAttribute("data-target") === currentSection
  );

  if (newActiveButton && newActiveButton !== currentActiveButton) {
      if (currentActiveButton) {
          currentActiveButton.classList.remove("active");
      }

      newActiveButton.classList.add("active");
      currentActiveButton = newActiveButton;
  }
});