const {vec2} = require('gl-matrix')

function polygonOverlap(poly1, poly2) {
  // Get the edges of both polygons
  const edges1 = getEdges(poly1);
  const edges2 = getEdges(poly2);

  // Check if any edge separates the two polygons
  for (let edge of [...edges1, ...edges2]) {
    const axis = getPerpendicular(edge);
    const projection1 = project(poly1, axis);
    const projection2 = project(poly2, axis);
    if (!overlap1D(projection1, projection2)) {
      return false;
    }
  }

  return true;
}

function getEdges(poly) {
  const edges = [];
  for (let i = 0; i < poly.length; i++) {
    const j = (i + 1) % poly.length;
    edges.push([poly[i], poly[j]]);
  }
  return edges;
}

function getPerpendicular([p1, p2]) {
  return [-1 * (p2[1] - p1[1]), p2[0] - p1[0]];
}

function project(poly, axis) {
  const projections = [];
  for (let point of poly) {
    projections.push(dotProduct(point, axis));
  }
  return [Math.min(...projections), Math.max(...projections)];
}

function overlap1D([min1, max1], [min2, max2]) {
  return Math.max(min1, min2) <= Math.min(max1, max2);
}

function dotProduct([x1, y1], [x2, y2]) {
  return x1 * x2 + y1 * y2;
}

module.exports = polygonOverlap;