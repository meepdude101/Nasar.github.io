// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawRoad();
}

function drawRoad() {
  fill(0);
  noStroke();
  rect(0, height / 2 - 200, width, 400);
  stroke(255);
  strokeWeight(5);
  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2);
  }
}
