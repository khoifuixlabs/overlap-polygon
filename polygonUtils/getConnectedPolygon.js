const config = require('../config');
const data = require('../data/inside_box_data.json');
const {
  getClosestPointOnSegment,
  getClosestPoints,
} = require('./polygonDistance');
const getCoordinates = require('./getCoordinates');
const polygonOverlap = require('./overlap');

const root = new Array(data.length + 3);
root.fill(-1);
const connectedPolygon = new Array(data.length + 3);

for (let i = 0; i < data.length; i++) {
  connectedPolygon[i] = new Set();
}

function dfs(index) {
  if (root[index] === -1) {
    root[index] = index;
    connectedPolygon[index].add(index);
  }
  for (let i = 0; i < data.length; i++) {
    if (root[i] !== -1) continue;
    if (
      polygonOverlap(getCoordinates(data[index]), getCoordinates(data[i])) ||
      getClosestPoints(getCoordinates(data[index]), getCoordinates(data[i]))
        .distance <= config.WALK_ROOF_DIST
    ) {
      root[i] = root[index];
      connectedPolygon[root[index]].add(i);
      dfs(i);
    }
  }
}

for (let i = 0; i < data.length; i++) {
  if (root[i] === -1) {
    dfs(i);
  }
}

function getConnectedPolygon(polygon) {
  let res = new Set();
  for (let i = 0; i < data.length; i++) {
    const coordinates = getCoordinates(data[i]);
    // console.log(coordinates)
    if (polygonOverlap(getCoordinates(polygon), coordinates)) {
      res = new Set([...res, ...connectedPolygon[root[i]]]);
    }
  }
  return res;
}

module.exports = getConnectedPolygon;
