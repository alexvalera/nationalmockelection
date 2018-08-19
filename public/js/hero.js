const hero = {
  groups: [
  'Latinos', 
  'African Americans', 
  'Asian Americans', 
  'Immigrants',
  'Nerds', 
  'Dorks', 
  'Teachers', 
  'Schools', 
  'Friends', 
  'Nerds', 
  'Jocks', 
  'Artists', 
  'Athletes', 
  'Musicians',
  'Academics', 
  'Everyone'
  ],
  selectors: {
    'hero-text' : '.hero__animated-text'
  },
  init: function() {
    this.iterateGroups();
  }, 
  iterateGroupsHelper: function(elem, groups, index) {
    setTimeout(()=> {
      index = (index == undefined ? 0: index); 
      elem.innerText = groups[index];
      if (index != groups.length -1) {
        this.iterateGroupsHelper(elem, groups, index+1);  
      }
      else {
        const node = document.querySelector(this.selectors['hero-text']);
        node.classList.add('hero__animated-text--border');
      }    
    }, 100);
  }, 

  iterateGroups: function() {
    const changingText = document.querySelector(this.selectors['hero-text']);
    this.iterateGroupsHelper(changingText, this.groups);
  }

}; 

hero.init();