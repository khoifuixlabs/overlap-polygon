function rotatePolygon(polygon, angle) {
  var rotatedPolygon = [];
  for (var i = 0; i < polygon.length; i++) {
    var point = polygon[i];
    var rotatedPoint = rotatePoint(point, angle);
    rotatedPolygon.push(rotatedPoint);
  }
  return rotatedPolygon;
}

function rotatePoint(point, angle) {
  var rotatedX = Math.cos(angle) * point[0] - Math.sin(angle) * point[1];
  var rotatedY = Math.sin(angle) * point[0] + Math.cos(angle) * point[1];
  return [rotatedX, rotatedY];
}

module.exports = { rotatePolygon, rotatePoint}