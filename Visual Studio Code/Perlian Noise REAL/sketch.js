// Perlin Noise
// Nasar Khan
// 11/20/2024
//

// Explain game

let segmentWidth = 10; // Width of each segment for terrain
let noiseOffset = 0; // Offset for Perlin noise

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);
  renderSmoothTerrain();
}

function renderSmoothTerrain() {
  if (keyIsDown(LEFT_ARROW)) segmentWidth -= 1; // Adjust segment width with arrow keys
  if (keyIsDown(RIGHT_ARROW)) segmentWidth += 1;
  segmentWidth = constrain(segmentWidth, 1, width / 10); // Constrain width adjustment

  let numSegments = width / segmentWidth;
  let maxSegmentHeight = 300;
  noiseOffset += 0.02; // Move the noise offset for smooth terrain changes

  for (let i = 0; i < numSegments; i++) {
    let xPos = i * segmentWidth;
    let segmentHeight = noise(i * 0.1 + noiseOffset) * maxSegmentHeight; // Use Perlin noise for smooth height

    fill(150);
    stroke(0);
    rect(xPos, height, segmentWidth, -segmentHeight); // Draw each smooth segment
  }
}