/**
 * Check which side of a line a point is on, -1 for right, 1 for left, 0 for on the line
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p
 * @returns {number}
 */
function getLineSideOfPoint(p1, p2, p) {
  return Math.sign(
    (p2[0] - p1[0]) * (p[1] - p1[1]) - (p2[1] - p1[1]) * (p[0] - p1[0])
  );
}

module.exports = {
  getLineSideOfPoint,
};
