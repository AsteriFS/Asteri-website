import '../../accordion.scss'


let accordions = document.querySelectorAll('[data-accordion="accordion"]');
accordions.forEach(accordion => {
  let items = accordion.querySelectorAll('.accordion-block .accordion-question');

  items.forEach(item => {
    item.addEventListener('click', e => {
      if (e.currentTarget.classList.contains('open')) {
        e.currentTarget.classList.remove('open');
      } else {
        items.forEach(el => {
          el.classList.remove('open');
        });
        e.currentTarget.classList.add('open');
      }
    });
  });
});

