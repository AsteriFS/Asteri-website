import '../../accordion.scss'


let processAccordion = document.querySelector('[data-accordion="accordion"]');
let processItems = processAccordion.querySelectorAll('.accordion-block');

processItems.forEach(item => {

  item.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('open')) {
        e.currentTarget.classList.remove('open');
    } else {
      processItems.forEach(el => {
        el.classList.remove('open');
      });
      e.currentTarget.classList.add('open');
    }
  });
});