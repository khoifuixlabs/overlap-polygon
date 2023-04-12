const Decimal = require('decimal.js');


function calculateDistanceInFeet(point1, point2) {
  const R = 20902230; // radius of the Earth in feet
  const lat1 = point1[0] * Math.PI / 180;
  const lon1 = point1[1] * Math.PI / 180;
  const lat2 = point2[0] * Math.PI / 180;
  const lon2 = point2[1] * Math.PI / 180;
  const dLat = (lat2 - lat1);
  const dLon = (lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}


function getClosestPointOnSegment(point, segStart, segEnd) {
  segStart = [new Decimal(segStart[0], 100), new Decimal(segStart[1], 100)];
  segEnd = [new Decimal(segEnd[0], 100), new Decimal(segEnd[1], 100)];
  point = [new Decimal(point[0], 100), new Decimal(point[1], 100)];
  if (segStart[0] === segEnd[0] && segStart[1] === segEnd[1])
    return [Infinity, Infinity];
  const segDir = [
    Decimal.sub(segEnd[0], segStart[0]),
    Decimal.sub(segEnd[1], segStart[1]),
  ];
  const pointDir = [
    Decimal.sub(point[0], segStart[0]),
    Decimal.sub(point[1], segStart[1]),
  ];

  const segLength = Decimal.sqrt(segDir[0].pow(2).plus(segDir[1].pow(2)));
  segDir[0] = segDir[0].div(segLength);
  segDir[1] = segDir[1].div(segLength);

  const projectionLength = Decimal.mul(pointDir[0], segDir[0]).plus(
    Decimal.mul(pointDir[1], segDir[1])
  );

  let closestPoint;

  if (projectionLength.lte(0)) {
    closestPoint = segStart;
  } else if (projectionLength.gte(segLength)) {
    closestPoint = segEnd;
  } else {
    const projection = [
      segDir[0].times(projectionLength),
      segDir[1].times(projectionLength),
    ];
    closestPoint = [
      segStart[0].plus(projection[0]),
      segStart[1].plus(projection[1]),
    ];
  }
  return closestPoint;
}

function getClosestPoints(poly1, poly2) {
  var minDist = Infinity;
  var closest1, closest2;

  for (var i = 0; i < poly1.length; i++) {
    var p1 = poly1[i];
    var p2 = poly1[(i + 1) % poly1.length];
    for (var j = 0; j < poly2.length; j++) {
      var q1 = poly2[j];
      var q2 = poly2[(j + 1) % poly2.length];
      var closest = getClosestPointOnSegment(p1, q1, q2);

      var dist = calculateDistanceInFeet(p1, closest);
      if (dist < minDist) {
        minDist = dist;
        closest1 = closest;
        closest2 = p1;
      }
    }
  }

  for (var i = 0; i < poly2.length; i++) {
    var p1 = poly2[i];
    var p2 = poly2[(i + 1) % poly2.length];
    for (var j = 0; j < poly1.length; j++) {
      var q1 = poly1[j];
      var q2 = poly1[(j + 1) % poly1.length];
      var closest = getClosestPointOnSegment(p1, q1, q2);
      var dist = calculateDistanceInFeet(p1, closest);
      if (dist < minDist) {
        minDist = dist;
        closest1 = closest;
        closest2 = p1;
      }
    }
  }

  return { point1: closest1, point2: closest2, distance: minDist };
}

module.exports = {
  getClosestPointOnSegment,
  getClosestPoints,
};
