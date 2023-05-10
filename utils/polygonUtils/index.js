//export all from polygonUtils
module.exports = {
  ...require('./checkOverlap'),
  ...require('./getClosestPointOnPolygon'),
  ...require('./getConnectedPolygon'),
  ...require('./getCoordinates'),
  ...require('./getOverlapPolygon'),
  ...require('./getSnappedPoint'),
  ...require('./getSnappedPolygon'),
  ...require('./handleOverlap'),
  ...require('./polygonClosestEdge'),
  ...require('./polygonDistance'),
  ...require('./polygonTransition'),
  ...require('./rotatePolygon'),
};
