const data = require('../data.json');
const getCoordinates = require('./getCoordinates');
const polygonOverlap = require('./overlap');

function getOverlapPolygon(polygon) {
  let res = new Set();
  for (let i = 0; i < data.length; i++) {
    const coordinates = getCoordinates(data[i]);
    // console.log(coordinates)
    if (polygonOverlap(getCoordinates(polygon), coordinates)) {
      res.add(i)
    }
  }
  return res;
}

module.exports = getOverlapPolygon