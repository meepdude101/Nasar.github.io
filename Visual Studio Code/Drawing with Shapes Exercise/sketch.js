// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noStroke()

  fill(0,255,0);
  circle(width/2,height/2,100);
  rect(width/2,height/2+41,100);
  rect(width/2-40,height/2+100,20);
  rect(width/2+40,height/2+100,20);
  fill(0,0,0)
  rect(width/2+30,height/2,10);
  rect(width/2-30,height/2,10);
}