// write me a test template

const { pointOnSegment } = require('../../geometryUtils');
const { getSnappedPoint } = require('../getSnappedPoint');

describe('utils/polygonUtils/tests/getSnappedPoint', () => {
  it('#1', () => {
    const poly = [
      [105.69560449069502, 10.297888865436775],
      [105.69560449069502, 10.024638670437014],
      [105.79128377035022, 10.024638670437014],
      [105.79128377035022, 10.297888865436775],
      [105.69560449069502, 10.297888865436775],
    ];
    const point = [105.55515171165786, 10.175598889070287];
    const snappedPoint = getSnappedPoint(point, poly);
    let isOnSegment = false;
    for (let i = 0; i < poly.length - 1; i++) {
      const p1 = poly[i];
      const p2 = poly[i + 1];
      if (pointOnSegment(snappedPoint, [p1, p2])) {
        isOnSegment = true;
        break;
      }
    }
    expect(isOnSegment).toEqual(true);
  });

  it('#2', () => {
    const poly = [
      [105.28593546231775, 10.029946713895782],
      [105.28728305780612, 10.57620134496021],
      [105.85462075828855, 10.578850737708521],
      [105.83979720792087, 10.029946713895782],
      [105.8950486229312, 10.033927689416103],
      [105.9031341958592, 10.60534340588056],
      [105.26302633901969, 10.592097358136755],
      [105.23472683377031, 10.025965689453258],
      [105.28593546231775, 10.029946713895782],
    ];
    const point = [105.45964175792358, 10.467463453753894];
    const snappedPoint = getSnappedPoint(point, poly);
    let isOnSegment = false;
    for (let i = 0; i < poly.length - 1; i++) {
      const p1 = poly[i];
      const p2 = poly[i + 1];
      if (pointOnSegment(snappedPoint, [p1, p2])) {
        isOnSegment = true;
        break;
      }
    }
    expect(isOnSegment).toEqual(true);
  });

  it('#3', () => {
    const poly = [
      [105.64546954092106, 10.741242769968252],
      [105.18402467003943, 10.477450463511389],
      [105.57349593619927, 10.233303326448322],
      [105.64546954092106, 10.741242769968252],
    ];
    const point = [105.79376501981187, 10.199845799101553];
    const snappedPoint = getSnappedPoint(point, poly);
    console.log(snappedPoint);
    let isOnSegment = false;
    for (let i = 0; i < poly.length - 1; i++) {
      const p1 = poly[i];
      const p2 = poly[i + 1];
      if (pointOnSegment(snappedPoint, [p1, p2])) {
        isOnSegment = true;
        break;
      }
    }
    expect(isOnSegment).toEqual(true);
  });
});
