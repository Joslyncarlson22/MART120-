function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(51);
    textSize(22)
    text("Check out my sketch", 10,80);

    // head
    fill(255, 204, 0);
    circle(250,100,175);

    // eyes
    strokeWeight(10);
    fill(#0778F9);
    point(200,75);
    point(285,75);

    // nose
    point(245,90);

    // mouth
    ellipse(245, 135, 30, 45)

    // hair
    line(130,175,175,50);
    line(325,50,360,175);
    // body
    fill(#D826E7);
    rect(200,185,100,150);

    // decoration
    fill(255);
    triangle(220,320,250,220,280,320)
    // right arm
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);

    fill(120);
    textSize(22);
    text("Joslyn Carlson",270,500 );


}
