/**
 * Calculates the dot product of two vectors
 * @param {number[]} param0
 * @param {number[]} param1
 * @returns {number}
 */
function dotProduct(a, b) {
  const [ax, ay] = a;
  const [bx, by] = b;
  return ax * bx + ay * by;
}

module.exports = {
  dotProduct,
};
