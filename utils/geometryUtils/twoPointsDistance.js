/**
 * Returns the distance between two points
 * @param {number[]} point1
 * @param {number[]} point2
 * @returns {number}
 */
function twoPointsDistance(point1, point2) {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

module.exports = {
  twoPointsDistance,
};