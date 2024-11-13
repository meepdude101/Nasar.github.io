let segmentWidth = 10; // Width of each segment for terrain

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);
  generateTerrain();
}

function generateTerrain() {
  let numSegments = width / segmentWidth; // Total segments across the canvas
  let maxSegmentHeight = 200; // Limit the maximum segment height

  for (let i = 0; i < numSegments; i++) {
    let xPos = i * segmentWidth; // Position each segment side-by-side
    let segmentHeight = random(maxSegmentHeight); // Random height for basic terrain

    fill(150);
    stroke(0);
    rect(xPos, height, segmentWidth, -segmentHeight); // Draw each segment
  }
}