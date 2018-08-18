const usmap = {
  init: function(){
    $('#map').usmap({
      stateStyles: {
        'stroke': '#ededed'
      },
      stateSpecificStyles: {
        'MD': {fill: 'yellow'},
        'VA': {fill: 'teal'}
      } 
    });
  }
};
usmap.init();