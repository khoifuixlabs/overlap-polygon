const data = require('./data/inside_box_data.json');
const fs = require('fs')
const { getClosestPoints } = require('./utils/distance');
const getConnectedPolygon = require('./utils/getConnectedPolygon');
const getOverlapPolygon = require('./utils/getOverlapPolygon');
const polygonOverlap = require('./utils/overlap');
const getCoordinates = require('./utils/getCoordinates');


const nearestPoints = [];

for (let targetIndex = 0; targetIndex < data.length; targetIndex++) {
  let minDist = Infinity;
  let resIndex = 0;
  const overlapArray = [];
  for (let i = 0; i < data.length; i++) {
    if (i === targetIndex) continue;

    const {point1, point2, distance } = getClosestPoints(
      getCoordinates(data[targetIndex]),
      getCoordinates(data[i])
    );

    // write to file
    nearestPoints.push({title: targetIndex+'-'+i,point:point1, distance})
    nearestPoints.push({title: targetIndex+'-'+i,point:point2, distance})
    
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
    getOverlapPolygon(data[targetIndex]), '\n'
  );
}


fs.writeFile('nearestPoints.json', JSON.stringify(nearestPoints), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data written to file successfully');
});