const turf = require('@turf/turf');

/**
 * Returns the distance between two points in feet
 * @param {number[]} point1
 * @param {number[]} point2
 * @returns {number}
 */
function twoPointsDistanceInFeet(point1, point2) {
  try {
    const turfPoint1 = turf.point(point1);
    const turfPoint2 = turf.point(point2);
    const distance = turf.distance(turfPoint1, turfPoint2, { units: 'feet' });
    return distance;
  } catch (error) {
    return Infinity;
  }
}

module.exports = {
  twoPointsDistanceInFeet,
};
