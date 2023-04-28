const { twoPointsDistance } = require('../geometryUtils/twoPointsDistance');
const {
  getVectorFromTwoPoints,
} = require('../geometryUtils/getVectorFromTwoPoints');
const checkOveralp = require('./checkOverlap');
const { polygonTransition } = require('./polygonTransition');
const {
  getClosestPointOnSegment,
} = require('../geometryUtils/getClosestPointOnSegment');

function handleOverlap(stablePoly, poly) {
  let minDist = Infinity;
  let resPoly = poly;
  // Loop throught each edge of each poly
  for (let i = 0; i < stablePoly.length - 1; i++) {
    let edge = []; // stable edge
    edge.push(stablePoly[i]);
    edge.push(stablePoly[i + 1]);
    for (let j = 0; j < poly.length - 1; j++) {
      point = poly[j];
      const closestPoint = getClosestPointOnSegment(point, edge[0], edge[1]);
      const vec = getVectorFromTwoPoints(point, closestPoint);
      const transPoly = polygonTransition(poly, vec);
      if (!checkOveralp(stablePoly, transPoly)) {
        const dis = twoPointsDistance(point, closestPoint);
        if (dis < minDist) {
          minDist = dis;
          resPoly = transPoly;
        }
      }
    }
  }
  for (let i = 0; i < poly.length - 1; i++) {
    let edge = []; // stable edge
    edge.push(poly[i]);
    edge.push(poly[i + 1]);
    for (let j = 0; j < stablePoly.length - 1; j++) {
      point = stablePoly[j];
      const closestPoint = getClosestPointOnSegment(point, edge[0], edge[1]);
      const vec = getVectorFromTwoPoints(closestPoint, point);
      const transPoly = polygonTransition(poly, vec);
      if (!checkOveralp(stablePoly, transPoly)) {
        const dis = twoPointsDistance(point, closestPoint);
        if (dis < minDist) {
          minDist = dis;
          resPoly = transPoly;
        }
      }
    }
  }
  return resPoly;
}

module.exports = {
  handleOverlap,
};
