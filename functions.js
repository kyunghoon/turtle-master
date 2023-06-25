let circle = (x, y, size) => {
  let radius = (deg, d) => {
    const DEG2RAD = Math.PI / 180;
    return d * Math.tan((90 - deg) * DEG2RAD);
  }
  const RESOLUTION = 4;
  const SCALAR = 50;
  let scale = size * SCALAR;
  let sides = scale * RESOLUTION / SCALAR + 3;
  let distance = scale / sides;
  angle(0);
  let a = 360 / sides;
  let r = radius(a, distance);
  goto(x - r, y);
  right(-a/ 2);
  for(let i = 0; i < sides; i++) {
    right(a);
    forward(distance);
  }
  angle(0);
  goto(x, y);
}
