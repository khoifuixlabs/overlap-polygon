const { getSnappedPolygon } = require('../getSnappedPolygon');
const checkOveralp = require('../checkOverlap');
const { getClosestPointsOfTwoPolygons } = require('../polygonDistance');
const { snapType } = require('../../../config');
const config = {
  WALK_ROOF_DIST: 1.0 * 5,
  SNAP_DEGREE: 2,
  SNAP_DISTANCE: Infinity,
  SNAP_TYPE: snapType.POLY_TRANSITION,
};

describe('Test getSnappedPolygon function, if meet condition, polygon will be snapped, distance = 0 and not overlap', () => {
  it('#1', () => {
    const poly1 = [
      [106.04062468931414, 10.183454294703495],
      [105.57292156046236, 10.374790400866416],
      [105.47736930833094, 10.036575348912024],
      [106.04062468931414, 10.183454294703495],
    ];
    const poly2 = [
      [105.59318723360008, 10.407918294632822],
      [106.066193249918, 10.207715634279069],
      [106.13896340627514, 10.268717983421126],
      [105.59318723360008, 10.407918294632822],
    ];
    const resPoly = getSnappedPolygon(poly1, poly2, config);
    expect(getClosestPointsOfTwoPolygons(poly1, resPoly).distance).toBeCloseTo(
      0,
      0.0001
    );
    expect(checkOveralp(poly1, resPoly)).toEqual(false);
  });
  it('#2', () => {
    const poly1 = [
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
    const poly2 = [
      [105.40452386526874, 10.556330170602678],
      [105.5055935268752, 10.29391117660785],
      [105.78050300644537, 10.555005379953712],
      [105.40452386526874, 10.556330170602678],
    ];
    const resPoly = getSnappedPolygon(poly1, poly2, config);
    expect(getClosestPointsOfTwoPolygons(poly1, resPoly).distance).toBeCloseTo(
      0,
      0.0001
    );
    expect(checkOveralp(poly1, resPoly)).toEqual(false);
  });
  it('#3', () => {
    const poly1 = [
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
    const poly2 = [
      [105.69560449069502, 10.297888865436775],
      [105.69560449069502, 10.024638670437014],
      [105.79128377035022, 10.024638670437014],
      [105.79128377035022, 10.297888865436775],
      [105.69560449069502, 10.297888865436775],
    ];
    const resPoly = getSnappedPolygon(poly1, poly2, config);
    expect(getClosestPointsOfTwoPolygons(poly1, resPoly).distance).toBeCloseTo(
      0,
      0.0001
    );
    expect(checkOveralp(poly1, resPoly)).toEqual(false);
  });
});
