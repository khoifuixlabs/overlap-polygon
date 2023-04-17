function dotProduct(a, b) {
  const [ax, ay] = a;
  const [bx, by] = b;
  return ax * bx + ay * by;
}

module.exports = {
  dotProduct
}