
const draw_circle = (d, s) => {
    for(let i = 0; i < s; i++){
        forward(d)
        right(360/s);
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


for (let i=0; i < 4; i++) {
    draw_circle(i * 10 + 40, 3 + i);
}
// draw_circle(30, 3 + i);
// draw_circle(30, 3 + i);
// draw_circle(30, 3 + i);
// draw_circle(30, 3 + i);
