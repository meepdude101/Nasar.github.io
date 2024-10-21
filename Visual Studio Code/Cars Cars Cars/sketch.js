// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Vehicle(0, color(200, 100, 50), 100, height / 2 - 10, 1, 2);
  truck = new Vehicle(1, color(150, 100, 150), width - 100, height / 2 - 10, -1, 3);
}

function draw() {
  background(220);
  drawRoad();
  car.draw();
  car.move();
  truck.draw();
  truck.move();
}

function drawRoad() {
  fill(0);
  rect(0, height / 2 - 200, width, 400);
  stroke(255);
  strokeWeight(5);
  for (let i = 0; i < width; i += 50) {
    line(i, height / 2, i + 30, height / 2);
  }
}

class Vehicle {
  constructor(type, color, x, y, direction, xSpeed) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }
  
  draw() {
    if (this.type == 0) {
      //draw car
      fill(this.color);
      rect(this.x, this.y, 50, 20);
      fill(255);
      rect(this.x + 10, this.y + 10, 10, 5);
      rect(this.x + 30, this.y + 10, 10, 5);
    } else {
      //draw truck
      fill(this.color);
      rect(this.x, this.y, 70, 25);
      fill(255);
      rect(this.x + 15, this.y + 10, 10, 5 );
      rect(this.x + 45, this.y + 10, 10, 5);
    }
  }
  
  move() {
    //move car left and right
    this.x += this.xSpeed * this.direction;
    if (this.x > width || this.x < 0) {
      this.direction *= -1;
    }
  }
}