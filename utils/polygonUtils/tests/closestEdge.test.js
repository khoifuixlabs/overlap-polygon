const { findClosestEdges } = require('../polygonClosestEdge');

describe('Closest edge of two polygons', () => {
  it('#1 closest edge of two polygons', () => {
    const poly1 = [
      [0, 0],
      [0, 2],
      [2, 2],
      [2, 0],
      [0, 0],
    ];
    const poly2 = [
      [3, 3],
      [3, 5],
      [5, 5],
      [5, 3],
      [3, 3],
    ];
    const closestEdges = findClosestEdges(poly1, poly2);
    expect(closestEdges).toEqual([
      [
        [0, 2],
        [2, 2],
      ],
      [
        [5, 3],
        [3, 3],
      ],
    ]);
  });
  it('#2 closest edge of two polygons', () => {
    const poly1 = [
      [105.77936947683054, 10.033917699625164],
      [105.7786265532178, 10.033127690693973],
      [105.77964090396713, 10.032655034855722],
      [105.77936947683054, 10.033917699625164],
    ];
    const poly2 = [
      [105.77812150558668, 10.032497325499705],
      [105.77840263548535, 10.031369236513015],
      [105.77940767487598, 10.030940146418928],
      [105.77990668044663, 10.031978266637623],
      [105.77812150558668, 10.032497325499705],
    ];
    const closestEdges = findClosestEdges(poly1, poly2);
    expect(closestEdges).toEqual([
      [
        [105.7786265532178, 10.033127690693973],
        [105.77964090396713, 10.032655034855722],
      ],
      [
        [105.77990668044663, 10.031978266637623],
        [105.77812150558668, 10.032497325499705],
      ],
    ]);
  });
});
