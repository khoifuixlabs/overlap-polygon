const Decimal = require('decimal.js');
const turf = require('@turf/turf');
const {
  getClosestPointOnSegment,
} = require('../geometryUtils/getClosestPointOnSegment');
const { twoPointsDistanceInFeet } = require('../geometryUtils');

/**
 * Caculate the distance between two polygons and return the closest points
 * @param {number[][]} poly1
 * @param {number[][]} poly2
 * @returns {{point1: number[], point2: number[], distance: number}}
 */
function getClosestPointsOfTwoPolygons(poly1, poly2) {
  var minDist = Infinity;
  var closest1, closest2;

  // loop each point in poly 1
  for (var i = 0; i < poly1.length; i++) {
    var p1 = poly1[i];
    var p2 = poly1[(i + 1) % poly1.length];
    // loop each edge in poly 2
    for (var j = 0; j < poly2.length; j++) {
      var q1 = poly2[j];
      var q2 = poly2[(j + 1) % poly2.length];
      // get closest point to p1 on edge q1 - q2 of poly2
      var closest = getClosestPointOnSegment(p1, q1, q2);

      // get distance between p1 and closest point
      var dist = twoPointsDistanceInFeet(p1, closest);

      if (dist < minDist) {
        minDist = dist;
        closest1 = p1;
        closest2 = closest;
      }

      //get distance between two vertices
      dist = twoPointsDistanceInFeet(q1, p1);
      if (dist < minDist) {
        minDist = dist;
        closest1 = p1;
        closest2 = q1;
      }
    }
  }

  //loop each points in poly2
  for (var i = 0; i < poly2.length; i++) {
    var p1 = poly2[i];
    var p2 = poly2[(i + 1) % poly2.length];
    // loop each edges in poly1
    for (var j = 0; j < poly1.length; j++) {
      // get closest point to p1 on edge q1 - q2 of poly 1
      var q1 = poly1[j];
      var q2 = poly1[(j + 1) % poly1.length];
      var closest = getClosestPointOnSegment(p1, q1, q2);

      // get distance between p1 and closest point

      var dist = twoPointsDistanceInFeet(p1, closest);
      if (dist < minDist) {
        minDist = dist;
        closest1 = closest;
        closest2 = p1;
      }

      //get distance between two vertices

      dist = twoPointsDistanceInFeet(q1, p1);
      if (dist < minDist) {
        minDist = dist;
        closest1 = q1;
        closest2 = p1;
      }
    }
  }

  if (typeof closest1[0] !== 'number') closest1[0] = closest1[0].toNumber();
  if (typeof closest1[1] !== 'number') closest1[1] = closest1[1].toNumber();
  if (typeof closest2[0] !== 'number') closest2[0] = closest2[0].toNumber();
  if (typeof closest2[1] !== 'number') closest2[1] = closest2[1].toNumber();
  return { point1: closest1, point2: closest2, distance: minDist };
}

module.exports = {
  getClosestPointsOfTwoPolygons,
};
