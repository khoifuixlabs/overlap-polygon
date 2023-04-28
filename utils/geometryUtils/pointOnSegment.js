/**
 * Check if a point is on a segment
 * @param {number[]} point
 * @param {number[][]} segment
 * @returns {boolean}
 */
function pointOnSegment(point, segment) {
  const [x1, y1] = segment[0];
  const [x2, y2] = segment[1];
  const [x3, y3] = point;

  const ABx = x2 - x1;
  const ABy = y2 - y1;
  const APx = x3 - x1;
  const APy = y3 - y1;
  const ABAPproduct = ABx * APx + ABy * APy;
  const ABlengthSquared = ABx * ABx + ABy * ABy;
  const normalizedABAPproduct = ABAPproduct / ABlengthSquared;
  const x4 = x1 + normalizedABAPproduct * ABx;
  const y4 = y1 + normalizedABAPproduct * ABy;

  const d1 = Math.sqrt((x3 - x4) * (x3 - x4) + (y3 - y4) * (y3 - y4));
  const d2 = Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1));
  const d3 = Math.sqrt((x2 - x4) * (x2 - x4) + (y2 - y4) * (y2 - y4));
  const d4 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  if (Math.abs(d2 + d3 - d4) < 0.0001 && Math.abs(d1) < 0.0001) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  pointOnSegment,
};
