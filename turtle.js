
const draw_circle = (d, a) => {
  goto(-calc_radius(d,360/a), 0);
  for(let i = 0; i < a; i++){
    forward(d);
    right(360/a);
  }
}


// loop through the draw_circle to make 
// different shapes with different sizes.

// for (i = 0; i < 4; i++){
// draw_circle;
// }


// draw_circle(30, 3);
// draw_circle(40, 4);
// draw_circle(50, 5);
// draw_circle(60, 6);


for (let i = 0; i < 8; i++) {
    draw_circle(i * 5 + 40, 8 + i);
}
// draw_circle(30, 3 + i);
// draw_circle(30, 3 + i);
// draw_circle(30, 3 + i);
// draw_circle(30, 3 + i);

// --- level 7.1---//

function calc_radius(d,a){
  return d * Math.tan((90 - a) * (Math.PI / 180));
}



