const hotstats = {
  init: function() {
    this.positionMap = [];
    const polls = document.querySelectorAll('[data-on-scroll]');
    for (let poll of polls) {
      this.positionMap.push({
        'position' : poll.offsetTop,
        'node' : poll
      });
    }
    this.fadeInElem();
    this.addListeners();
  }, 
  addListeners: function() {
    window.addEventListener('scroll', ()=> {
      this.fadeInElem();
    });
  }, 
  fadeInElem:function() {
    let scrollPosition = window.scrollY + window.outerHeight;
    for (let elem of this.positionMap) {
      if (scrollPosition > elem.position + 300) {
        elem.node.classList.remove('before-fade-in');
      }
    }
  }
}; 

hotstats.init();