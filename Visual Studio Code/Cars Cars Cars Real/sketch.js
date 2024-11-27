// Traffic Simulation
// Student Name: Nasar Khan
// Date: November 13, 2024
// Description: Simulates traffic with cars, trucks, roads, and signals.

let eastboundVehicles = []; // Vehicles moving right
let westboundVehicles = []; // Vehicles moving left

function setup() {
  createCanvas(windowWidth, windowHeight); // Full-screen canvas

  // Add vehicles to each direction
  for (let i = 0; i < 10; i++) {
    // Westbound vehicles (left-moving)
    westboundVehicles.push(new Vehicle(random(width), height / 2 - 50, 0, -2));

    // Eastbound vehicles (right-moving)
    eastboundVehicles.push(new Vehicle(random(width), height / 2 + 50, 1, 2));
  }
}

function draw() {
  background(180); // Gray background
  drawRoad(); // Draw the road

  // Draw all vehicles
  for (let vehicle of westboundVehicles) {
    vehicle.display();
  }
  for (let vehicle of eastboundVehicles) {
    vehicle.display();
  }
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

// Vehicle class to represent cars and trucks
class Vehicle {
  constructor(x, y, dir, spd) {
    this.type = int(random(2)); // 0: car, 1: truck
    this.color = color(random(255), random(255), random(255)); // Random color
    this.x = x; // X position
    this.y = y; // Y position
    this.direction = dir; // 0: left, 1: right
    this.xSpeed = spd; // Speed
  }

  // Display the vehicle
  display() {
    stroke(255); // White outline
    strokeWeight(1);

    if (this.type === 0) {
      // Car
      fill(this.color);
      rect(this.x, this.y, 30, 15); // Body
      rect(this.x + 5, this.y - 7, 20, 10); // Roof
      fill(30);
      ellipse(this.x + 8, this.y + 15, 10, 10); // Front wheel
      ellipse(this.x + 22, this.y + 15, 10, 10); // Rear wheel
    } else {
      // Truck
      fill(this.color);
      rect(this.x, this.y, 50, 25); // Trailer
      rect(this.x, this.y - 15, 30, 15); // Cabin
      fill(20);
      ellipse(this.x + 10, this.y + 25, 14, 14); // Rear wheel
      ellipse(this.x + 35, this.y + 25, 14, 14); // Front wheel
    }
  }
}
