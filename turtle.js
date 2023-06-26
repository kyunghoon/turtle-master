setSpeed(50);
goto(-160,0);

function draw_circle(distance, angle, sides){
    for(i = 0; i < sides; i++){
        forward(distance);
        right(angle);
        
    }
    pieces = 360/sides;

        // create variable that gives you the part of the circle
        // the above is close, need for loop and a variable.
        //forward(20);
        // always know what the function takes and what it returns.


        //how to make the angle a variable
        // how to make the diretion a variable. 
        // both diviisible by the the circle degree 360.


    return pieces;
}


let circle = draw_circle(15, 5, 72);

// console.log(circle);
//HINT circle = 360 
//IF I divide a pie by 3 divide 360 by 3

// make the "n" in draw_circle(n) the number of sides you need.
