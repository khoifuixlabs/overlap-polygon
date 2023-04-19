const data = require('./data/inside_box_data.json');
const fs = require('fs');
const {
  getClosestPointsOfTwoPolygons,
} = require('./polygonUtils/polygonDistance');
const getConnectedPolygon = require('./polygonUtils/getConnectedPolygon');
const getOverlapPolygon = require('./polygonUtils/getOverlapPolygon');
const polygonOverlap = require('./polygonUtils/overlap');
const getCoordinates = require('./polygonUtils/getCoordinates');

const nearestPoints = [];

for (let targetIndex = 0; targetIndex < data.length; targetIndex++) {
  let minDist = Infinity;
  let resIndex = 0;
  const overlapArray = [];
  for (let i = 0; i < data.length; i++) {
    if (i === targetIndex) continue;

    const { point1, point2, distance } = getClosestPointsOfTwoPolygons(
      getCoordinates(data[targetIndex]),
      getCoordinates(data[i])
    );

    // write to file
    nearestPoints.push({
      title: targetIndex + '-' + i,
      point: point1,
      distance,
    });
    nearestPoints.push({
      title: targetIndex + '-' + i,
      point: point2,
      distance,
    });

    //

    if (distance < minDist) {
      minDist = distance;
      resIndex = i;
    }

    if (
      polygonOverlap(getCoordinates(data[targetIndex]), getCoordinates(data[i]))
    ) {
      overlapArray.push(i);
    }
  }
  console.log(
    targetIndex,
    'can walk to:  ',
    getConnectedPolygon(data[targetIndex])
  );
  console.log(
    targetIndex,
    'is overlap with:  ',
    getOverlapPolygon(data[targetIndex]),
    '\n'
  );
}

fs.writeFile('nearestPoints.json', JSON.stringify(nearestPoints), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data written to file successfully');
});
