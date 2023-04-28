/**
 * get minimum angle between two edges in degree
 * @param {number[][]} edge1
 * @param {number[][]} edge2
 * @returns {number}
 */
function getAngle(edge1, edge2) {
  const [p2, p1] = edge1;
  const [q1, q2] = edge2;
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = q1;
  const [x4, y4] = q2;
  const angle1 = Math.atan2(y2 - y1, x2 - x1);
  const angle2 = Math.atan2(y4 - y3, x4 - x3);
  let angle = Math.abs(angle1 - angle2) * (180 / Math.PI);
  let direction = angle > 0 ? 1 : -1;
  angle = Math.abs(angle);
  angle = angle % 180;
  if (angle > 90) {
    direction = -direction;
    angle = 180 - angle;
  }
  return angle;
}

module.exports = {
  getAngle,
};
