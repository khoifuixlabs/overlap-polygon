const snapType = {
  POLY_TRANSITION: 'POLY_TRANSITION',
  EDGE_TRANSITION: 'EDGE_TRANSITION',
};

const config = {
  WALK_ROOF_DIST: 1.0 * 5,
  SNAP_DEGREE: 50,
  SNAP_DISTANCE: Infinity,
  SNAP_TYPE: snapType.EDGE_TRANSITION,
};

module.exports = { config, snapType };
