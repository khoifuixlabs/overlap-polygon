// check two polygon overlap
function checkOveralp(poly1, poly2) {
  if (JSON.stringify(poly1) === JSON.stringify(poly2)) {
    return true;
  }

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

  // Check if any vertex of poly1 is inside poly2
  if (poly1.every((vertex) => isPointInsidePolygon(vertex, poly2))) {
    return true;
  }

  // Check if any vertex of poly2 is inside poly1
  if (poly2.every((vertex) => isPointInsidePolygon(vertex, poly1))) {
    return true;
  }

  // Check if any edge of poly1 overlaps with an edge of poly2
  for (let edge1 of edges1) {
    for (let edge2 of edges2) {
      if (linesOverlap(edge1, edge2)) {
        return true;
      }
    }
  }

  return false;
}

function isPointInsidePolygon(point, poly) {
  let isInside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0],
      yi = poly[i][1];
    const xj = poly[j][0],
      yj = poly[j][1];

    const intersect =
      yi > point[1] != yj > point[1] &&
      point[0] < ((xj - xi) * (point[1] - yi)) / (yj - yi) + xi;

    if (intersect) isInside = !isInside;
  }
  return isInside;
}

function linesOverlap(line1, line2) {
  // Check if the endpoints of line1 are on opposite sides of line2
  const side1 = getLineSide(line1[0], line1[1], line2[0]);
  const side2 = getLineSide(line1[0], line1[1], line2[1]);
  if (side1 * side2 >= 0) {
    return false;
  }

  // Check if the endpoints of line2 are on opposite sides of line1
  const side3 = getLineSide(line2[0], line2[1], line1[0]);
  const side4 = getLineSide(line2[0], line2[1], line1[1]);
  if (side3 * side4 >= 0) {
    return false;
  }

  return true;
}

function getLineSide(p1, p2, p) {
  return Math.sign(
    (p2[0] - p1[0]) * (p[1] - p1[1]) - (p2[1] - p1[1]) * (p[0] - p1[0])
  );
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

module.exports = checkOveralp;
