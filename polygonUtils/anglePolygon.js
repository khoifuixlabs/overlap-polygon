// caculate angle between two line segments

function angleBetweenLines(line1, line2) {
  const angle1 = Math.atan2(line1[1][1] - line1[0][1], line1[1][0] - line1[0][0]);
  const angle2 = Math.atan2(line2[1][1] - line2[0][1], line2[1][0] - line2[0][0]);
  return angle1 - angle2;
}

