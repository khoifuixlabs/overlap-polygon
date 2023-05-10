const snapType = {
  POLY_TRANSITION: 'POLY_TRANSITION',
  EDGE_TRANSITION: 'EDGE_TRANSITION',
};

const config = {
  WALK_ROOF_DIST: 1.0 * 5,
  SNAP_DEGREE: 0,
  SNAP_DISTANCE: 5,
  SNAP_TYPE: snapType.EDGE_TRANSITION,
};

module.exports = { config, snapType };
