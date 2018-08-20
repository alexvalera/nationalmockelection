const accordion = {
  selectors: {
    'accordion' : '.accordion', 
    'openAccordion': 'accordion--open'
  },
  init: function() {
    this.addListeners(); 
  }, 
  addListeners: function() {
    const accordions = document.querySelectorAll(this.selectors.accordion);
    for (let accordion of accordions) {
      accordion.addEventListener('click', ()=> {
        this.toggleAccordion(accordion); 
      }); 
    }
  },
  toggleAccordion: function(node) {
    node.classList.toggle(this.selectors.openAccordion); 
  }
};
accordion.init();