const { dotProduct } = require('../../geometryUtils/dotProduct');
const { getClosestPointOnSegment } = require('../../geometryUtils/getClosestPointOnSegment');
const { getVectorFromTwoPoints } = require('../../geometryUtils/getVectorFromTwoPoints');
const { pointOnSegment } = require('../../geometryUtils/pointOnSegment');

describe('Given a point and a segment, get the closest point of the given point on the segment', () => {
  it('#1', () => {
    const point = [0, 0];
    const segment = [
      [2, 0],
      [2, 2],
    ];
    const closestPoint = getClosestPointOnSegment(
      point,
      segment[0],
      segment[1]
    );
    const vec1 = getVectorFromTwoPoints(segment[0], segment[1]);
    const vec2 = getVectorFromTwoPoints(point, closestPoint);
    expect(dotProduct(vec1, vec2)).toBeCloseTo(0, 0.001);
    expect(pointOnSegment(closestPoint, segment)).toEqual(true);
  });
  it('#2', () => {
    const point = [105.99692203176113, 9.847399410812656];
    const segment = [
      [105.5788772570009, 9.828342009249525],
      [105.95889416566621, 10.156371523302823],
    ];
    const closestPoint = getClosestPointOnSegment(
      point,
      segment[0],
      segment[1]
    );
    const vec1 = getVectorFromTwoPoints(segment[0], segment[1]);
    const vec2 = getVectorFromTwoPoints(point, closestPoint);
    expect(dotProduct(vec1, vec2)).toBeCloseTo(0, 0.001);
    expect(pointOnSegment(closestPoint, segment)).toEqual(true);
  });
  it('#3', () => {
    const point = [105.49215979216314, 10.039063576204072];
    const segment = [
      [105.5788772570009, 9.828342009249525],
      [105.95889416566621, 10.156371523302823],
    ];
    const closestPoint = getClosestPointOnSegment(
      point,
      segment[0],
      segment[1]
    );

    const vec1 = getVectorFromTwoPoints(segment[0], segment[1]);
    const vec2 = getVectorFromTwoPoints(point, closestPoint);
    expect(dotProduct(vec1, vec2)).toBeCloseTo(0, 0.001);
    expect(pointOnSegment(closestPoint, segment)).toEqual(true);
  });
});
