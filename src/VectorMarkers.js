var makeIcon = require('./Icon');

module.exports = function(Leaflet) {
  Icon = makeIcon(Leaflet);
  return {
    version: '1.0.0',

    Icon: Icon,

    icon: function(options) {
      return new Icon(options)
    },
  }
}

