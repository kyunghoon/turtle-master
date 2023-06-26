//setSpeed(50);
// goto(-160,0);

const draw_circle = (d, s) => {
    for(i = 0; i < s; i++){
            forward(d)
            right(360/s);
    }
}

draw_circle(30, 4);


