const { getClosestPoints } = require("./polygonDistance");

function findClosestEdges(poly1, poly2) {
  const { point1, point2, distance } = getClosestPoints(poly1, poly2);
  console.log('point1', point1);
  console.log('point2', point2);
  const closestEdges1 = [];
  const closestEdges2 = [];

  for (let i = 0; i < poly1.length; i++) {
    const j = (i + 1) % poly1.length;
    const edge = [poly1[i], poly1[j]];
    if (pointOnSegment(point1, edge)) {
      closestEdges1.push(edge);
    }
  }

  for (let i = 0; i < poly2.length; i++) {
    const j = (i + 1) % poly2.length;
    const edge = [poly2[i], poly2[j]];
    if (pointOnSegment(point2, edge)) {
      closestEdges2.push(edge);
    }
  }

  // find the minium angle pair of edges
  let minAngle = Infinity;
  let minAngleEdge1;
  let minAngleEdge2;
  for (let i = 0; i < closestEdges1.length; i++) {
    for (let j = 0; j < closestEdges2.length; j++) {
      const angle = getAngle(closestEdges1[i], closestEdges2[j]);
      if (angle < minAngle) {
        minAngle = angle;
        minAngleEdge1 = closestEdges1[i];
        minAngleEdge2 = closestEdges2[j];
      }
    }
  }

  return [minAngleEdge1, minAngleEdge2];
}

function getAngle(edge1, edge2) {
  const [p1, p2] = edge1;
  const [q1, q2] = edge2;
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = q1;
  const [x4, y4] = q2;
  const angle1 = Math.atan2(y2 - y1, x2 - x1);
  const angle2 = Math.atan2(y4 - y3, x4 - x3);
  return angle1 - angle2;
}


function pointOnSegment(point, segment) {
  const [p1, p2] = segment;
  const [x, y] = point;
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return (
    x >= Math.min(x1, x2) &&
    x <= Math.max(x1, x2) &&
    y >= Math.min(y1, y2) &&
    y <= Math.max(y1, y2)
  );
}


module.exports = {
  findClosestEdges,
};
