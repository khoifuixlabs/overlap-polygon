function getVectorFromTwoPoints(p1, p2) {
  return [p2[0] - p1[0], p2[1] - p1[1]];
}

module.exports = {
  getVectorFromTwoPoints
};