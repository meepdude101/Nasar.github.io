// Snake Game
// Nasar Khan
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let snakeX = [];  // Array to store snake X positions
let snakeY = [];  // Array to store snake Y positions
let snakeLength = 3;  // Current length of snake
let appleX;       // Apple X position
let appleY;       // Apple Y position
let direction = "right";  // Starting direction
let score = 0;    // Player's score
let gameSize = 20;  // Size of each grid square

function setup() {
  createCanvas(400, 400);
  frameRate(10);  // speed for gameplay
  
  // Start with a 3-segment snake in the middle
  snakeX = [10, 10, 10];
  snakeY = [10, 9, 8];
  
  // Place first apple
  moveApple();
}

function draw() {
  background(220);
  
  // Move snake in current direction
  moveSnake();
  
  // Draw snake (green squares)
  fill(0, 255, 0);
  for (let i = 0; i < snakeLength; i++) {
    square(snakeX[i] * gameSize, snakeY[i] * gameSize, gameSize);
  }
  
  // Draw apple (red square)
  fill(255, 0, 0);
  square(appleX * gameSize, appleY * gameSize, gameSize);
  
  // Show score
  fill(0);
  textSize(20);
  text("Score: " + score, 10, 30);
  
  // Check if snake ate apple
  if (snakeX[0] === appleX && snakeY[0] === appleY) {
    score += 1;
    // Grow snake by increasing length
    snakeLength += 1;
    // Make arrays bigger for new length
    snakeX[snakeLength - 1] = snakeX[snakeLength - 2];
    snakeY[snakeLength - 1] = snakeY[snakeLength - 2];
    // Move apple
    moveApple();
  }
}

function moveSnake() {
  // Move body segments
  for (let i = snakeLength - 1; i > 0; i--) {
    snakeX[i] = snakeX[i - 1];
    snakeY[i] = snakeY[i - 1];
  }
  
  // Move head based on direction
  if (direction === "right") snakeX[0] += 1;
  if (direction === "left") snakeX[0] -= 1;
  if (direction === "up") snakeY[0] -= 1;
  if (direction === "down") snakeY[0] += 1;
}

function moveApple() {
  appleX = floor(random(width / gameSize));
  appleY = floor(random(height / gameSize));
}

function keyPressed() {
  // Change direction with arrow keys
  if (keyCode === UP_ARROW && direction !== "down") {
    direction = "up";
  }
  if (keyCode === DOWN_ARROW && direction !== "up") {
    direction = "down";
  }
  if (keyCode === LEFT_ARROW && direction !== "right") {
    direction = "left";
  }
  if (keyCode === RIGHT_ARROW && direction !== "left") {
    direction = "right";
  }
}