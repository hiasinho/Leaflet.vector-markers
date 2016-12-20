var makeVectorMarkers = require('./VectorMarkers');

module.exports = function(Leaflet) {
  var VectorMarkers = makeVectorMarkers(Leaflet);
  Leaflet.VectorMarkers = VectorMarkers;
  return VectorMarkers;
}
