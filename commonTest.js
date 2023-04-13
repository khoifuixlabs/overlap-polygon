const { getClosestPoints } = require("./polygonUtils/polygonDistance");

const poly1 = [
  [105.77812150558668, 10.032497325499705],
  [105.77840263548535, 10.031369236513015],
  [105.77940767487598, 10.030940146418928],
  [105.77990668044663, 10.031978266637623],
  [105.77812150558668, 10.032497325499705],
];

const poly2 = [
  [105.77906973411154, 10.031954303544055],
  [105.7802286769844, 10.033309086515715],
  [105.77825644086852, 10.033889706054737],
  [105.77906973411154, 10.031954303544055],
];

console.log(getClosestPoints(poly1, poly2))