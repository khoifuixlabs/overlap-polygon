# overlap-polygon

##Functions:

[polygonOverlap](./utils/overlap.js)
- Input: two polygon with format like this: [
      [105.0, 10.0],
      [105.0, 10.2],
      [105.2, 10.2],
      [105.2, 10.0],
      [105.0, 10.0]
    ];
- Output: true if overlap and false if no overlap

[getClosestPoints](./utils/distance.js)
- Get two closest points of two polygons
- Input: two polygon
- Output: { point1, point2, distance } - two closest poits and its distance

