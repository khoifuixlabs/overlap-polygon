//export all from polygonUtils
module.exports = {
  ...require('./checkOverlap'),
  ...require('./getConnectedPolygon'),
  ...require('./getCoordinates'),
  ...require('./getOverlapPolygon'),
  ...require('./getSnappedPolygon'),
  ...require('./handleOverlap'),
  ...require('./polygonClosestEdge'),
  ...require('./polygonDistance'),
  ...require('./polygonTransition'),
  ...require('./rotatePolygon'),
};
