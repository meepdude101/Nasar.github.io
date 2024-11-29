// CARS CARS CARS
// Nasar Khan
// November 28, 2024
// traffic simulation with vehicles, road, and traffic lights

let eastboundVehicles = []; // Array for eastbound vehicles
let westboundVehicles = []; // Array for westbound vehicles
let signalController; // Traffic light controller

function setup() {
  // Create canvas that fills the entire window
  createCanvas(windowWidth, windowHeight);

  // Initialize vehicles in each direction
  for (let i = 0; i < 20; i++) {
    // Create westbound vehicles (moving left) on top half of road
    westboundVehicles.push(
      new Vehicle(random(width), height / 2 - 50 + random(-240), 0, -5)
    );
    
    // Create eastbound vehicles (moving right) on bottom half of road
    eastboundVehicles.push(
      new Vehicle(random(width), height / 2 + 30 + random(250), 1, 5)
    );
  }

  // Initialize traffic light system
  signalController = new SignalSystem();
}

// Add new vehicles based on mouse input
function mousePressed() {
  if (keyIsDown(SHIFT)) {
    // Add westbound vehicle when SHIFT is held
    westboundVehicles.push(
      new Vehicle(random(width), height / 2 - 40 + random(-260), 0, -5)
    );
  } else {
    // Add eastbound vehicle on regular left-click
    eastboundVehicles.push(
      new Vehicle(random(width), height / 2 + 40 + random(250), 1, 5)
    );
  }
}

function draw() {
  // Clear background with gray color
  background(180);

  // Draw road markings
  drawRoad();

  // Update and display traffic light
  signalController.update();
  signalController.display();

  // Update and display westbound vehicles
  for (let vehicle of westboundVehicles) {
    vehicle.action();
  }

  // Update and display eastbound vehicles
  for (let vehicle of eastboundVehicles) {
    vehicle.action();
  }
}

// render the road with lane markings
function drawRoad() {
  // Draw black road surface
  fill(0);
  noStroke();
  rect(0, height / 2 - 300, width, 600);

  // Draw dotted yellow lane separator
  stroke(255, 255, 0); // Yellow color
  strokeWeight(2);
  for (let x = 0; x < width; x += 20) {
    line(x, height / 2, x + 10, height / 2);
  }

  // Draw white lane markings
  stroke(255); // White color
  strokeWeight(1);
  for (let pos = 0; pos < width; pos += 40) {
    line(pos, height / 2, pos + 10, height / 2);
  }
}

// represent different types of vehicles
class Vehicle {
  constructor(x, y, dir, spd) {
    this.type = int(random(2)); // 0: car, 1: truck/van
    this.color = color(random(255), random(255), random(255)); // Random color
    this.x = x;
    this.y = y;
    this.direction = dir; // 0 for left, 1 for right
    this.xSpeed = spd; // Initial speed
  }

  // Main action method called every frame
  action() {
    this.move(); // Always move

    // Random chance for additional actions
    if (random(1) < 0.01) this.speedUp();
    if (random(1) < 0.01) this.speedDown();
    if (random(1) < 0.01) this.changeColor();

    this.display(); // Always display
  }

  // Render vehicle based on type and direction
  display() {
    stroke(255); // White outline
    strokeWeight(1);

    if (this.type === 0) {
      // Car rendering
      fill(this.color);
      rect(this.x, this.y, 30, 15); // Body
      rect(this.x + 5, this.y - 7, 20, 10); // Roof
      fill(30);
      ellipse(this.x + 8, this.y + 15, 10, 10); // Front wheel
      ellipse(this.x + 22, this.y + 15, 10, 10); // Rear wheel
    } else {
      // Truck/Van rendering
      fill(this.color);
      if (this.direction === 0) {
        // Westbound (left) - cabin on left
        rect(this.x, this.y, 50, 25); // Trailer
        rect(this.x, this.y - 15, 30, 15); // Cabin
        fill(20);
        ellipse(this.x + 35, this.y + 25, 14, 14); // Front wheel
        ellipse(this.x + 10, this.y + 25, 14, 14); // Rear wheel
      } else {
        // Eastbound (right) - cabin on right 
        rect(this.x, this.y, 50, 25); // Trailer
        rect(this.x + 20, this.y - 15, 30, 15); // Cabin
        fill(20);
        ellipse(this.x + 15, this.y + 25, 14, 14); // Front wheel
        ellipse(this.x + 40, this.y + 25, 14, 14); // Rear wheel
      }
    }
  }

  // Move vehicle only when traffic light is green
  move() {
    if (signalController.currentState === "green") {
      this.x += this.xSpeed;

      if (this.direction === 1 && this.x > width) this.x = 0;
      if (this.direction === 0 && this.x < 0) this.x = width;
    }
  }

  // Increase speed within direction 
  speedUp() {
    this.xSpeed = this.direction === 1 
      ? constrain(this.xSpeed + 1, 0, 15)
      : constrain(this.xSpeed - 1, -15, 0);
  }

  // Decrease speed within direction 
  speedDown() {
    this.xSpeed = this.direction === 1 
      ? constrain(this.xSpeed - 1, 0, 15)
      : constrain(this.xSpeed + 1, -15, 0);
  }

  // Randomly change vehicle color
  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}

// Traffic light control system
class SignalSystem {
  constructor() {
    this.currentState = "green";
    this.timer = 0;
    this.redDuration = 120; // 120 frames of red light
  }

  // Update traffic light state and timer
  update() {
    if (this.timer > 0) {
      this.timer--;

      // Reset to green when timer expires
      if (this.timer === 0) {
        this.currentState = "green";
      }
    }
  }

  // Render traffic light
  display() {
    rectMode(CENTER);

    // Traffic light box
    fill(50);
    rect(width / 2, height / 2 - 400, 80, 150);

    // Light colors
    if (this.currentState === "green") {
      fill(0, 255, 0); // Green
      rect(width / 2, height / 2 - 375, 50, 50);
    } else {
      fill(255, 0, 0); // Red
      rect(width / 2, height / 2 - 375, 50, 50);
    }

    rectMode(CORNER);
  }

  // Toggle traffic light state
  toggleState() {
    if (this.currentState === "green") {
      this.currentState = "red";
      this.timer = this.redDuration;
    }
  }
}

// Toggle traffic light with spacebar
function keyPressed() {
  if (key === " ") {
    signalController.toggleState();
  }
}