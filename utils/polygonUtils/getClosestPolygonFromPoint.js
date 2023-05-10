const {
  getClosestPointOnSegment,
  twoPointsDistanceInFeet,
} = require('../geometryUtils');

/**
 *
 * @param {number[]} point
 * @param {number[][][]} polygons
 * @returns {{closestPolygon: number[][], minDist: number}} closest polygon from point and the distance
 */
function getClosestPolygonFromPoint(point, polygons) {
  let minDist = Infinity;
  let closestPolygon = null;
  for (let i = 0; i < polygons.length; i++) {
    const polygon = polygons[i];
    const dist = pointToPolyDist(point, polygon);
    if (dist < minDist) {
      minDist = dist;
      closestPolygon = polygon;
    }
  }
  return { closestPolygon, minDist };
}

function pointToPolyDist(point, polygon) {
  let minDist = Infinity;
  for (let i = 0; i < polygon.length; i++) {
    const p1 = polygon[i];
    const p2 = polygon[(i + 1) % polygon.length];
    const closestPoint = getClosestPointOnSegment(point, p1, p2);
    const dist = twoPointsDistanceInFeet(point, closestPoint);
    if (dist < minDist) {
      minDist = dist;
    }
  }
  return minDist;
}

module.exports = {
  getClosestPolygonFromPoint,
  pointToPolyDist,
};
