const turf = require('@turf/turf');
/**
 *
 * @param {number[]} point
 * @param {number[][]} polygon
 * @returns {number[]} snapped point
 */
function getSnappedPoint(point, polygon) {
  const turfPolygon = turf.lineString(polygon);
  const turfPoint = turf.point(point);
  const snappedPoint = turf.nearestPointOnLine(turfPolygon, turfPoint).geometry
    .coordinates;
  return snappedPoint;
}

module.exports = { getSnappedPoint };
