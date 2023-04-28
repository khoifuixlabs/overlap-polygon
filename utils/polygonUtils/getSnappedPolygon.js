const { getAngle } = require('../geometryUtils/angleBetweenTwoEdges');
const {
  getVectorFromTwoPoints,
} = require('../geometryUtils/getVectorFromTwoPoints');
const checkOveralp = require('./checkOverlap');
const { findClosestEdges } = require('./polygonClosestEdge');
const { getClosestPointsOfTwoPolygons } = require('./polygonDistance');
const { polygonTransition } = require('./polygonTransition');
const { rotatePolygon } = require('./rotatePolygon');

function getSnappedPolygon(stablePoly, flexPoly, config) {
  const { point1, point2, distance } = getClosestPointsOfTwoPolygons(
    stablePoly,
    flexPoly
  );
  // check distance
  if (distance > config.SNAP_DISTANCE) return flexPoly;

  // get transition vector
  const vector = getVectorFromTwoPoints(point2, point1);

  // scale vector by 1.1 to avoid overlap
  vector[0] = vector[0] * (1 - 0.0000000001);
  vector[1] = vector[1] * (1 - 0.0000000001);

  // get polygon after transition (poly3)
  const transPoly = polygonTransition(flexPoly, vector);

  // get two closet and most parallel edges between transPoly and stable poly
  const closestEdges = findClosestEdges(stablePoly, transPoly);

  //get index of closestEdges
  const index1 = stablePoly.findIndex(
    (item) =>
      item[0] === closestEdges[0][0][0] && item[1] === closestEdges[0][0][1]
  );
  const index2 = stablePoly.findIndex(
    (item) =>
      item[0] === closestEdges[0][1][0] && item[1] === closestEdges[0][1][1]
  );
  const index3 = transPoly.findIndex(
    (item) =>
      item[0] === closestEdges[1][0][0] && item[1] === closestEdges[1][0][1]
  );
  const index4 = transPoly.findIndex(
    (item) =>
      item[0] === closestEdges[1][1][0] && item[1] === closestEdges[1][1][1]
  );

  // angle between two edges
  let angle = getAngle(closestEdges[0], closestEdges[1]);
  if (Math.abs(angle) <= config.SNAP_DEGREE) {
    // rotate the transPoly in two way, CW and CCW
    const rotatedPoly1 = rotatePolygon(transPoly, angle, point1);
    const rotatedPoly2 = rotatePolygon(transPoly, -angle, point1);

    // caculate angle between two rotation
    const angle4 = getAngle(
      [stablePoly[index1], stablePoly[index2]],
      [rotatedPoly1[index3], rotatedPoly1[index4]]
    );
    const angle5 = getAngle(
      [stablePoly[index1], stablePoly[index2]],
      [rotatedPoly2[index3], rotatedPoly2[index4]]
    );
    // get the minimum angle polygon (approximately 0)
    let result;
    if (angle4 > angle5) {
      result = rotatedPoly2;
    } else {
      result = rotatedPoly1;
    }

    // if after rotation, two polygon is overlap, then don't rotate at all, return transPoly
    if (checkOveralp(stablePoly, result)) result = transPoly;

    return result;
  } else {
    return transPoly;
  }
}

module.exports = {
  getSnappedPolygon,
};
