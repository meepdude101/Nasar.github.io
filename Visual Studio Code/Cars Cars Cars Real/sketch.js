// Traffic Simulation
// Student Name: Nasar Khan
// Date: November 13, 2024
// Description: Simulates traffic with cars, trucks, roads, and signals.

function setup() {
  createCanvas(windowWidth, windowHeight); // Full-screen canvas
}

function draw() {
  background(180); // Gray background
  drawRoad(); // Draw the road
}

// Draws the road and lane markings
function drawRoad() {
  fill(0); // Black road
  noStroke();
  rect(0, height / 2 - 300, width, 600); // Road area

  stroke(255, 255, 0); // Yellow lane divider
  strokeWeight(2);
  for (let x = 0; x < width; x += 20) {
    line(x, height / 2, x + 10, height / 2);
  }

  stroke(255); // White lane markings
  strokeWeight(1);
  for (let x = 0; x < width; x += 40) {
    line(x, height / 2, x + 10, height / 2);
  }
}
