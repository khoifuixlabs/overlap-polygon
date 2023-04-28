/**
 * Returns a vector from two points
 * @param {number[]} p1
 * @param {number[]} p2
 * @returns {number[]}
 */
function getVectorFromTwoPoints(p1, p2) {
  return [p2[0] - p1[0], p2[1] - p1[1]];
}

module.exports = {
  getVectorFromTwoPoints,
};
