/**
 *
 * @param {number[][]} poly
 * @param {number[]} vector
 * @returns {number[][]} polygon after transition
 */
function polygonTransition(poly, vector) {
  return poly.map(function (point) {
    return vectorAdd(point, vector);
  });
}

/**
 *
 * @param {number[]} point
 * @param {number[]} vector
 * @returns {number[]} vector after addition
 */
function vectorAdd(point, vector) {
  return [point[0] + vector[0], point[1] + vector[1]];
}

module.exports = {
  polygonTransition: polygonTransition,
};
