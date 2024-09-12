// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(500,400);
}

function draw() {
  background(220);
  drawCircle();
}


function drawCircle(){
  fill(101,0,255);
  circle(0,0,50);

  fill(150,225,90);
  circle(width/2,height/2,50);

  fill(255,0,0);
  circle(0,height,50);
  circle(width,0,50);
  circle(width,height,50);

  //draw a circle
  //the screen
  circle(width*0.66,height/2,50)




}