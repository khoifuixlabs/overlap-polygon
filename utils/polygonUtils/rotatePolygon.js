function rotatePolygon(polygon, angle, pivot) {
  let newPolygon = JSON.parse(JSON.stringify(polygon));
  newPolygon.pop();
  const radians = angle * Math.PI / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  for (let i = 0; i < newPolygon.length; i++) {
    const x = newPolygon[i][0] - pivot[0];
    const y = newPolygon[i][1] - pivot[1];
    newPolygon[i][0] = x * cos - y * sin + pivot[0];
    newPolygon[i][1] = x * sin + y * cos + pivot[1];
  }

  newPolygon.push(newPolygon[0]);
  return newPolygon;
}


module.exports = { rotatePolygon };
