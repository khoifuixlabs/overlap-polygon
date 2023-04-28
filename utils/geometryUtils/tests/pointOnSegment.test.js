const { pointOnSegment } = require('../pointOnSegment');

describe('pointOnSegment', () => {
  test('point is on segment', () => {
    const point = [0, 0];
    const segment = [
      [-1, -1],
      [1, 1],
    ];
    expect(pointOnSegment(point, segment)).toBe(true);
  });

  test('point is not on segment', () => {
    const point = [0, 0];
    const segment = [
      [-1, -1],
      [-2, -2],
    ];
    expect(pointOnSegment(point, segment)).toBe(false);
  });

  test('point is on the line but not on the segment', () => {
    const point = [0, 0];
    const segment = [
      [-2, -2],
      [-1, -1],
    ];
    expect(pointOnSegment(point, segment)).toBe(false);
  });
});
