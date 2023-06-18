setSpeed(1);
penup();
left(90);
pendown();
function draw_circle(x){
    for (i = 0; i <= x; i++){
        forward(10);
        right(5);
    }
    return x;
}

let circle = draw_circle(70);


/// make 3 triangle
/// 4 square
/// etc

 