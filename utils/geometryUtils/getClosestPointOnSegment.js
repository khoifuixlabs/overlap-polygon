const { default: Decimal } = require('decimal.js');

/**
 * Get closest point of given point on a segment
 * @param {number[]} point
 * @param {number[]} segStart
 * @param {number[]} segEnd
 * @returns {Decimal[]}
 */
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

module.exports = {
  getClosestPointOnSegment,
};
