const polygonOverlap = require('./overlap');

describe('polygonOverlap', () => {
  // Test non-overlapping polygons
  it('returns false for non-overlapping polygons', () => {
    const poly1 = [
      [0, 0],
      [0, 2],
      [2, 2],
      [2, 0],
    ];
    const poly2 = [
      [3, 3],
      [3, 5],
      [5, 5],
      [5, 3],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(false);
  });
  it('returns false for non-overlapping polygons', () => {
    const poly1 = [
      [105.77936947683054, 10.033917699625164],
      [105.77852605532178, 10.033127690693973],
      [105.77954090396713, 10.032655034855722],
      [105.77936947683054, 10.033917699625164],
    ];
    const poly2 = [
      [105.77812150558668, 10.032497325499705],
      [105.77840263548535, 10.031369236513015],
      [105.77940767487598, 10.030940146418928],
      [105.77990668044663, 10.031978266637623],
      [105.77812150558668, 10.032497325499705],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(false);
  });
  it('returns true for overlapping polygons', () => {
    const poly1 = [
      [105.78150136354049, 10.032206461946899],
      [105.78023897154412, 10.033116707902465],
      [105.77968523317378, 10.031790218805824],
      [105.78091465277777, 10.03078113536823],
      [105.78168839393408, 10.031461585455745],
      [105.78150136354049, 10.032206461946899],
    ];
    const poly2 = [
      [105.77812150558668, 10.032497325499705],
      [105.77840263548535, 10.031369236513015],
      [105.77940767487598, 10.030940146418928],
      [105.77990668044663, 10.031978266637623],
      [105.77812150558668, 10.032497325499705],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });
  // polygon 0 and polygon 3
  it('returns false for non-overlapping polygons (0 and 3)', () => {
    const poly1 = [
      [45.782098, -122.043802],
      [45.782158, -122.043724],
      [45.782433, -122.043975],
      [45.782353, -122.044049],
      [45.782098, -122.043802],
    ];
    const poly2 = [
      [45.782336, -122.043605],
      [45.782387, -122.043539],
      [45.78254, -122.04364],
      [45.782499, -122.0437],
      [45.782336, -122.043605],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(false);
  });

  // Test overlapping polygons
  it('returns true for overlapping polygons', () => {
    const poly1 = [
      [0, 0],
      [0, 2],
      [2, 2],
      [2, 0],
    ];
    const poly2 = [
      [1, 1],
      [1, 3],
      [3, 3],
      [3, 1],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });
  // Polygon 4 and polygon 5
  it('returns true for overlapping polygons (4 and 5)', () => {
    const poly1 = [
      [45.782387, -122.043529],
      [45.782433, -122.043469],
      [45.782474, -122.043504],
      [45.782412, -122.043559],
      [45.782387, -122.043529],
    ];
    const poly2 = [
      [45.782438, -122.043564],
      [45.782484, -122.043484],
      [45.782565, -122.043554],
      [45.782519, -122.043625],
      [45.782438, -122.043564],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });
  // Polygon 3 and polygon 5
  it('returns false for very near but not overlap polygons (3 and 5)', () => {
    const poly1 =         [
      [45.782336, -122.043605],
      [45.782387, -122.043539],
      [45.78254, -122.04364],
      [45.782499, -122.0437],
      [45.782336, -122.043605]
    ]
    const poly2 =        [
      [45.782438, -122.043564],
      [45.782484, -122.043484],
      [45.782565, -122.043554],
      [45.782519, -122.043625],
      [45.782438, -122.043564]
    ]
    expect(polygonOverlap(poly1, poly2)).toBe(false);
  });
  // Polygon 3 and polygon 4
  it('returns false for overlapping polygons (3 and 4)', () => {
    const poly1 = [
      [45.782336, -122.043605],
      [45.782387, -122.043539],
      [45.78254, -122.04364],
      [45.782499, -122.0437],
      [45.782336, -122.043605],
    ];
    const poly2 = [
      [45.782387, -122.043529],
      [45.782433, -122.043469],
      [45.782474, -122.043504],
      [45.782412, -122.043559],
      [45.782387, -122.043529],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });
  // Polygon 6 and polygon 5
  it('returns true for overlapping polygons (6 and 5)', () => {
    const poly1 = [
      [45.782565, -122.04361],
      [45.782581, -122.043559],
      [45.782514, -122.043514],
      [45.782535, -122.043474],
      [45.782668, -122.043549],
      [45.782611, -122.04362],
      [45.782565, -122.04361],
    ];
    const poly2 = [
      [45.782438, -122.043564],
      [45.782484, -122.043484],
      [45.782565, -122.043554],
      [45.782519, -122.043625],
      [45.782438, -122.043564],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });

  // Test polygons that share an edge but do not overlap
  it('returns true for polygons that share an edge but do not overlap', () => {
    const poly1 = [
      [0, 0],
      [0, 2],
      [2, 2],
      [2, 0],
    ];
    const poly2 = [
      [2, 0],
      [2, 2],
      [4, 2],
      [4, 0],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });

  // Test polygons that have the same edge and do not overlap
  it('returns true for polygons that have the same edge but do not overlap', () => {
    const poly1 = [
      [0, 0],
      [0, 2],
      [2, 2],
      [2, 0],
    ];
    const poly2 = [
      [2, 0],
      [2, 2],
      [0, 2],
      [0, 0],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });
  // Test one polygon completely inside other
  it('returns true for nested polygon', () => {
    const poly1 = [
      [0, 0],
      [0, 5],
      [5, 5],
      [5, 0],
    ];

    const poly2 = [
      [1, 1],
      [1, 4],
      [4, 4],
      [4, 1],
    ];

    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });
  it('returns true for nested polygon', () => {
    const poly1 = [
      [105.78034318296528, 10.032526742438066],
      [105.78069975140937, 10.032513237970207],
      [105.7806448947245, 10.033499062653533],
      [105.78034318296528, 10.032526742438066],
    ];

    const poly2 = [
      [105.78150136354049, 10.032206461946899],
      [105.78023897154412, 10.033116707902465],
      [105.77968523317378, 10.031790218805824],
      [105.78091465277777, 10.03078113536823],
      [105.78168839393408, 10.031461585455745],
      [105.78150136354049, 10.032206461946899],
    ];

    expect(polygonOverlap(poly2, poly1)).toBe(true);
  });
  // Test two same polygon
  // Test one polygon completely inside other
  it('returns true for same polygon', () => {
    const poly1 = [
      [0, 0],
      [0, 5],
      [5, 5],
      [5, 0],
    ];

    const poly2 = [
      [0, 0],
      [0, 5],
      [5, 5],
      [5, 0],
    ];

    expect(polygonOverlap(poly1, poly2)).toBe(true);
  });
  // Test two polygon very close but not overlap
  it('returns false for two polygon very close but not overlap', () => {
    const poly1 = [
      [0, 0],
      [0, 2],
      [2, 2],
      [2, 0],
    ];
    const poly2 = [
      [3, 0],
      [3, 2],
      [5, 2],
      [5, 0],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(false);
  });
  it('returns false for two polygon very close but not overlap', () => {
    const poly1 = [
      [105.78091917814385, 10.032661787086795],
      [105.78148831623497, 10.033181708459622],
      [105.78084375020268, 10.033161451798563],
      [105.78055575261436, 10.032918371765177],
      [105.78091917814385, 10.032661787086795],
    ];
    const poly2 = [
      [105.78150136354049, 10.032206461946899],
      [105.78023897154412, 10.033116707902465],
      [105.77968523317378, 10.031790218805824],
      [105.78091465277777, 10.03078113536823],
      [105.78168839393408, 10.031461585455745],
      [105.78150136354049, 10.032206461946899],
    ];
    expect(polygonOverlap(poly1, poly2)).toBe(false);
  });
});
