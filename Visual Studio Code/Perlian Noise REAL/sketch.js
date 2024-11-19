let segmentWidth = 1; // Width of each segment for terrain
let frameCount = 0; // Counts frames for panning effect
let scrollRate = -0.01; // Controls the direction and speed of terrain panning

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);
  renderTerrain();
}

function renderTerrain() {
  // Zoom in and out of terrain
  if (keyIsDown(LEFT_ARROW)) segmentWidth -= 1;
  if (keyIsDown(RIGHT_ARROW)) segmentWidth += 1;
  segmentWidth = constrain(segmentWidth, 1, width / 10);

  // the number of segments 
  let numSegments = width / segmentWidth; // Total segments across the canvas
  let maxSegmentHeight = 500; // Maximum segment height in pixels
  let accumulatedSegmentHeight = 0; // Sum of heights for all segments
  let highestPeakX = 0, highestPeakY = height; // Track highest point for flag

  let idx = 0;
  for (let i = 0; i < numSegments; i++) {
    let xPos = (i / numSegments) * width; // X-position of each segment
    let segmentHeight = noise(idx / 100 + frameCount * scrollRate) * maxSegmentHeight; // Height on Perlin noise

    // Draw each segment
    fill(135, 206, 235);
    stroke(0);
    strokeWeight(1);
    rect(xPos, height, segmentWidth, -segmentHeight);

    // Check if current segment is the highest
    if (height - segmentHeight < highestPeakY) {
      highestPeakY = height - segmentHeight;
      highestPeakX = xPos + segmentWidth / 2; // Set midpoint of highest segment for flag placement
    }

    accumulatedSegmentHeight += segmentHeight; // Sum of heights for average calculation
    idx++;
  }

  // Calculate average height and draw a line representing it
  let averageSegmentHeight = accumulatedSegmentHeight / numSegments;
  stroke(255, 0, 0);
  strokeWeight(5);
  line(0, height - averageSegmentHeight, width, height - averageSegmentHeight);

  frameCount++; // Increment frame counter for panning effect
  drawFlag(highestPeakX, highestPeakY); // Draw flag at the highest point
}

function drawFlag(x, y) {
  strokeWeight(1);
  stroke(0);
  line(x, y, x, y - 40); // Flagpole

  fill(255, 0, 0);
  triangle(x, y - 40, x, y - 20, x + 20, y - 30); // Flag
}