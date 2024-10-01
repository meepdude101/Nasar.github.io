// user input
// Nasar Khan
// September 12 2024

let size = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //mouse section
  fill(0);
  textSize(tSize);
  text((mouseX + ", " + mouseY), mouseX, mouseY);

  fill(255,0,0);
  circle(width/2, height/2,100);

  
  fill(0,255,0);

  x=x + 10;
  if(x>width) x = 0;
  rect(x, height/2, 60);
}


function mousePressed(){//this function only happens when the mouse is clicked
  //this is called automatically!!
  tSize = random(20,80);
}