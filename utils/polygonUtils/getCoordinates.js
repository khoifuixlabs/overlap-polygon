/**
 * Get the coordinates of a polygon from geojson
 * @param {Object} poly
 * @returns {number[][]}
 */
function getCoordinates(poly) {
  return poly.geometry.coordinates[0];
}

module.exports = getCoordinates;
