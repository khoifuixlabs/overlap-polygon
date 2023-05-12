function getBoundingBoxOfPolygon(poly) {
  // poly is an array of points
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < poly.length; i++) {
    minX = Math.min(minX, poly[i][0]);
    minY = Math.min(minY, poly[i][1]);
    maxX = Math.max(maxX, poly[i][0]);
    maxY = Math.max(maxY, poly[i][1]);
  }
  const res = [
    [minX, minY],
    [maxX, maxY],
  ];
  return res;
}

module.exports = { getBoundingBoxOfPolygon };
