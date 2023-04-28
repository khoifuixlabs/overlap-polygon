const {
  getLineSideOfPoint,
} = require('../../geometryUtils/getLineSideOfPoint');

describe('getLineSide', () => {
  test('returns -1 if p is on the right of the line', () => {
    const p1 = [0, 0];
    const p2 = [2, 2];
    const p = [1, 0];
    expect(getLineSideOfPoint(p1, p2, p)).toBe(-1);
  });

  test('returns -1 if p is on the right of the line', () => {
    const p1 = [0, 0];
    const p2 = [2, 2];
    const p = [4, 2];
    expect(getLineSideOfPoint(p1, p2, p)).toBe(-1);
  });

  test('returns 1 if p is on the left of the line', () => {
    const p1 = [0, 0];
    const p2 = [2, 2];
    const p = [1, 3];
    expect(getLineSideOfPoint(p1, p2, p)).toBe(1);
  });

  test('returns 1 if p is on the left of the line', () => {
    const p1 = [0, 0];
    const p2 = [2, 2];
    const p = [-2, 2];
    expect(getLineSideOfPoint(p1, p2, p)).toBe(1);
  });

  test('returns 0 if p is on the line', () => {
    const p1 = [0, 0];
    const p2 = [2, 2];
    const p = [1, 1];
    expect(getLineSideOfPoint(p1, p2, p)).toBe(0);
  });
  test('returns 0 if p is on the line', () => {
    const p1 = [0, 0];
    const p2 = [2, 2];
    const p = [50, 50];
    expect(getLineSideOfPoint(p1, p2, p)).toBe(0);
  });

  test('returns 0 if p is on the line', () => {
    const p1 = [0, 0];
    const p2 = [2, 2];
    const p = [-1, -1];
    expect(getLineSideOfPoint(p1, p2, p)).toBe(0);
  });
});
