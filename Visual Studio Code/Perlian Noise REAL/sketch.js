// Perlin Noise
// Nasar Khan
// 11/20/2024
//

// Explain game

let segmentWidth = 10; // Width of each segment for terrain
let frameCount = 0; // Frame counter for terrain panning
let scrollRate = -0.01; // Panning speed

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);
  renderTerrainWithPanning();
}

function renderTerrainWithPanning() {
  if (keyIsDown(LEFT_ARROW)) segmentWidth -= 1;
  if (keyIsDown(RIGHT_ARROW)) segmentWidth += 1;
  segmentWidth = constrain(segmentWidth, 1, width / 10);

  let numSegments = width / segmentWidth;
  let maxSegmentHeight = 300;
  let noiseOffset = frameCount * scrollRate;

  for (let i = 0; i < numSegments; i++) {
    let xPos = i * segmentWidth;
    let segmentHeight = noise(i * 0.1 + noiseOffset) * maxSegmentHeight;

    fill(135, 206, 235);
    stroke(0);
    rect(xPos, height, segmentWidth, -segmentHeight);
  }

  frameCount++; // Update frame count for continuous panning
}
