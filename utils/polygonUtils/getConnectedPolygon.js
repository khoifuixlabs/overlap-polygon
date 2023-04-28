const config = require('../../config');
const data = require('../../data/inside_box_data.json');
const { getClosestPointsOfTwoPolygons } = require('./polygonDistance');
const getCoordinates = require('./getCoordinates');
const checkOveralp = require('./checkOverlap');

// root of connected component
const root = new Array(data.length + 3);
root.fill(-1);
// connectedPolygon[i]: i is root of a connected component, and connectedPolygon[i] return a Set of its elements
const connectedPolygon = new Array(data.length + 3);
for (let i = 0; i < data.length; i++) {
  connectedPolygon[i] = new Set();
}

// build the root and connectedPolygon with dfs algorithm
function dfs(index) {
  if (root[index] === -1) {
    root[index] = index;
    connectedPolygon[index].add(index);
  }
  for (let i = 0; i < data.length; i++) {
    if (root[i] !== -1) continue;
    if (
      checkOveralp(getCoordinates(data[index]), getCoordinates(data[i])) ||
      getClosestPointsOfTwoPolygons(
        getCoordinates(data[index]),
        getCoordinates(data[i])
      ).distance <= config.WALK_ROOF_DIST
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

/**
 *
 * @param {number[][]} polygon
 * @returns {Set<number[][]>} a set of polygons that target polygon can walk to on the roof
 */
function getConnectedPolygon(polygon) {
  let res = new Set();
  for (let i = 0; i < data.length; i++) {
    const coordinates = getCoordinates(data[i]);
    // console.log(coordinates)
    if (checkOveralp(getCoordinates(polygon), coordinates)) {
      res = new Set([...res, ...connectedPolygon[root[i]]]);
    }
  }
  return res;
}

module.exports = getConnectedPolygon;
