const data = require('../../data/inside_box_data.json');
const getCoordinates = require('./getCoordinates');
const checkOveralp = require('./checkOverlap');

// get Set of polygons that overlap with target polygon
/**
 *
 * @param {number[][]} polygon
 * @returns {Set<number[][]>} a set of polygons that overlap with target polygon
 */
function getOverlapPolygon(polygon) {
  let res = new Set();
  for (let i = 0; i < data.length; i++) {
    const coordinates = getCoordinates(data[i]);
    // console.log(coordinates)
    if (checkOveralp(getCoordinates(polygon), coordinates)) {
      res.add(i);
    }
  }
  return res;
}

module.exports = getOverlapPolygon;
