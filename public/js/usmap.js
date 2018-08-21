const usmap = {
  selectors: {
    map: '.us-map',
    target: '.us-map__target', 
    modal: '.us-map__modal', 
    state: '.us-map__modal-state', 
    votes: '#votes', 
    hillary: '#hillary', 
    donald: '#donald', 
    addAnimation: 'us-map--add-animation' 
  },
  stateToColorMap: {
    'ME': {state: 'MAINE',color: 'red'}, 
    'NH': {state: 'New Hampshire',color: 'red'}, 
    'VT': {state: 'Vermont',color: 'blue'}, 
    'MA': {state: 'Massachusetts',color: 'blue'}, 
    'CT': {state: 'Connecticut',color: 'blue'}, 
    'RI': {state: 'Rhode Island',color: 'red'}, 
    'NJ': {state: 'New Jersey',color: 'blue'}, 
    'NY': {state: 'New York',color: 'blue'}, 
    'DE': {state: 'Delaware',color: 'blue'}, 
    'DC': {state: 'Washington DC',color: 'blue'}, 
    'PA': {state: 'Pennsylvania',color: 'red'}, 
    'WV': {state: 'West Virginia',color: 'red'}, 
    'MD': {state: 'Maryland',color: 'blue'}, 
    'VA': {state: 'Virginia',color: 'red'}, 
    'NC': {state: 'New Carolina',color: 'blue'}, 
    'SC': {state: 'South Carolina',color: 'blue'}, 
    'GA': {state: 'Georgia',color: 'red'}, 
    'FL': {state: 'Florida',color: 'blue'},  
    'OH': {state: 'Ohio',color: 'red'}, 
    'IN': {state: 'Indiana',color: 'red'},
    'KY': {state: 'Kentucky',color: 'red'}, 
    'TN': {state: 'Tennessee',color: 'red'},  
    'AL': {state: 'Alabama',color: 'red'}, 
    'MS': {state: 'Mississippi',color: 'red'},  
    'LA': {state: 'Lousiana',color: 'red'}, 
    'MI': {state: 'Michigan',color: 'blue'}, 
    'IL': {state: 'Illinois',color: 'blue'}, 
    'MO': {state: 'Montana',color: 'blue'}, 
    'AR': {state: 'Arkansas',color: 'blue'}, 
    'TX': {state: 'Texas',color: 'blue'}, 
    'WI': {state: 'Wisconsin',color: 'red'}, 
    'MN': {state: 'Minnesota',color: 'red'}, 
    'IA': {state: 'Iowa',color: 'red'}, 
    'ND': {state: 'North Dakota',color: 'red'}, 
    'SD': {state: 'South Dakota',color: 'red'}, 
    'NE': {state: 'Nebraska',color: 'red'}, 
    'KS': {state: 'Kansas',color: 'red'}, 
    'OK': {state: 'Oklahoma',color: 'red'}, 
    'NV': {state: 'Nevada',color: 'red'}, 
    'MT': {state: 'Montana',color: 'red'}, 
    'WY': {state: 'Wyoming',color: 'red'}, 
    'CO': {state: 'Colorado',color: 'blue'}, 
    'NM': {state: 'New Mexico',color: 'red'}, 
    'ID': {state: 'Idaho',color: 'red'}, 
    'UT': {state: 'Utah',color: 'red'}, 
    'AZ': {state: 'Arizona',color: 'blue'}, 
    'WA': {state: 'Washington',color: 'blue'}, 
    'OR': {state: 'Oregon',color: 'red'}, 
    'CA': {state: 'California',color: 'blue'}, 
    'AK': {state: 'Arkansas',color: 'blue'}, 
    'HI': {state: 'Hawaii',color: 'blue'}, 
  },
  init: function(){

    this.startMap();
    this.addListeners();
  }, 
  addListeners: function() {
    const module = document.querySelector(this.selectors.map);
    console.log(module); 
    window.addEventListener('resize', ()=> {
      this.startMap();
    });
    window.addEventListener('scroll', ()=> {
      if (window.scrollY + window.outerHeight > module.offsetTop + 300) {
        module.classList.add(this.selectors.addAnimation);
      }
    });
  },
  startMap: function() {
    console.log('map started');
    let blue = '#4664B5';
    let red = '#FF2D1E';
    let purple = '#B0007C';
    let darkblue = '#233975';
    const _this = this;
    $('#map').usmap({
      click: function(event, data) {
        event = event.originalEvent;
        console.log(event);
        $(_this.selectors.target).css({'left': event.clientX-10, 'top': event.clientY-30});
        $(_this.selectors.modal).css({'left': event.clientX+25, 'top': event.clientY-25});
        if (_this.stateToColorMap[data.name].color ==='red') {
          let trumpVotes = _this.getRandomInt(51, 100);
          let hillaryVotes = 100 - trumpVotes;
          $(_this.selectors.state).css('color', red);
          $(_this.selectors.votes).text(_this.getRandomInt(50, 100) + ' votes');
          $(_this.selectors.hillary).text( `${hillaryVotes}% Hillary Clinton`);
          $(_this.selectors.donald).text( `${trumpVotes}% Donald Trump`);
        }
        else {
          let hillaryVotes = _this.getRandomInt(51, 100);
          let trumpVotes = 100 - hillaryVotes;
          $(_this.selectors.state).css('color', blue);
          $(_this.selectors.votes).text(_this.getRandomInt(50, 100) + ' votes');
          $(_this.selectors.hillary).text( `${hillaryVotes}% votes Hillary Clinton`);
          $(_this.selectors.donald).text( `${trumpVotes}% votes Donald Trump`);
        }
        $(_this.selectors.state).text(_this.stateToColorMap[data.name].state);
      },
      stateStyles: {
        'stroke': '#ededed'
      },
      showLabels: true,
      stateSpecificStyles: {
        'ME': {fill: red}, 
        'NH': {fill: red}, 
        'VT': {fill: blue}, 
        'MA': {fill: blue}, 
        'CT': {fill: blue}, 
        'RI': {fill: red}, 
        'NJ': {fill: blue}, 
        'NY': {fill: blue}, 
        'DE': {fill: blue}, 
        'DC': {fill: blue},
        'PA': {fill: red},
        'WV': {fill: red}, 
        'MD': {fill: blue},
        'VA': {fill: red}, 
        'NC': {fill: blue}, 
        'SC': {fill: blue}, 
        'GA': {fill: red}, 
        'FL': {fill: blue}, 
        'OH': {fill: red}, 
        'IN': {fill: red}, 
        'KY': {fill: red}, 
        'TN': {fill: red}, 
        'AL': {fill: red}, 
        'MS': {fill: red}, 
        'LA': {fill: red}, 
        'MI': {fill: blue}, 
        'IL': {fill: blue}, 
        'MO': {fill: blue}, 
        'AR': {fill: blue}, 
        'TX': {fill: blue}, 
        'WI': {fill: red}, 
        'MN': {fill: red}, 
        'IA': {fill: red}, 
        'ND': {fill: red}, 
        'SD': {fill: red}, 
        'NE': {fill: red}, 
        'KS': {fill: red}, 
        'OK': {fill: red}, 
        'NV': {fill: red},
        'MT': {fill: red}, 
        'WY': {fill: red}, 
        'CO': {fill: blue}, 
        'NM': {fill: red}, 
        'ID': {fill: red}, 
        'UT': {fill: red}, 
        'AZ': {fill: blue}, 
        'WA': {fill: blue}, 
        'OR': {fill: red}, 
        'CA': {fill: blue}, 
        'AK': {fill: blue}, 
        'HI': {fill: blue}
      },
      stateHoverStyles: {fill: darkblue}
    });
  },
  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
usmap.init();