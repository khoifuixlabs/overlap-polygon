const { getAngle } = require('../geometryUtils/angleBetweenTwoEdges');
const { pointOnSegment } = require('../geometryUtils/pointOnSegment');
const { getClosestPointsOfTwoPolygons } = require('./polygonDistance');


//get two closest edges between two polygons that has minimum angle 
function findClosestEdges(poly1, poly2) {
  // get two closest points of two polygons
  const { point1, point2, distance } = getClosestPointsOfTwoPolygons(
    poly1,
    poly2
  );
  const closestEdges1 = [];
  const closestEdges2 = [];

  // get the edges that contain two closest points
  for (let i = 0; i < poly1.length - 1; i++) {
    const j = (i + 1) % poly1.length;
    const edge = [poly1[i], poly1[j]];
    if (pointOnSegment(point1, edge)) {
      closestEdges1.push(edge);
    }
  }

  for (let i = 0; i < poly2.length - 1; i++) {
    const j = (i + 1) % poly2.length;
    const edge = [poly2[i], poly2[j]];
    if (pointOnSegment(point2, edge)) {
      closestEdges2.push(edge);
    }
  }

  // find the minium angle pair of edges
  let minAngle = Infinity;
  let minAngleEdge1;
  let minAngleEdge2;
  for (let i = 0; i < closestEdges1.length; i++) {
    for (let j = 0; j < closestEdges2.length; j++) {
      const angle = getAngle(closestEdges1[i], closestEdges2[j]);
      if (angle < minAngle) {
        minAngle = angle;
        minAngleEdge1 = closestEdges1[i];
        minAngleEdge2 = closestEdges2[j];
      }
    }
  }
  return [minAngleEdge1, minAngleEdge2];
}


module.exports = {
  findClosestEdges,
};
