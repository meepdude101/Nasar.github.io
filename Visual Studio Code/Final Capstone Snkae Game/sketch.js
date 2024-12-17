// Snake Game
// Nasar Khan
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let snake;
let apple;
let gridSize = 30;
let gridWidth;
let gridHeight;

function setup() {
  // Create canvas that fits the window while maintaining grid alignment
  createCanvas(windowWidth - (windowWidth % gridSize), 
               windowHeight - (windowHeight % gridSize));
  
  // Calculate grid dimensions
  gridWidth = width / gridSize;
  gridHeight = height / gridSize;
  
  // Initialize snake in the center of the grid
  snake = {
    body: [
      {x: floor(gridWidth / 2), y: floor(gridHeight / 2)}
    ],
    dx: 1,  // Initial direction - moving right
    dy: 0
  };
  
  // Place apple in a random location
  placeApple();
  
  // Set frame rate to control game speed
  frameRate(10);
}

function draw() {
  // Clear background
  background(220);
  
  // Draw grid lines (optional, for visual clarity)
  drawGrid();
  
  // Move snake
  moveSnake();
  
  // Draw snake
  drawSnake();
  
  // Draw apple
  drawApple();
  
  // Check for apple eating
  checkAppleCollision();
}

function moveSnake() {
  // Create a new head position based on current direction
  let newHead = {
    x: snake.body[0].x + snake.dx,
    y: snake.body[0].y + snake.dy
  };
  
  // Move snake by adding new head to the front
  snake.body.unshift(newHead);
  
  // Remove last segment (unless snake has eaten an apple)
  snake.body.pop();
}

function drawSnake() {
  fill(0, 255, 0);  // Green snake
  for (let segment of snake.body) {
    rect(
      segment.x * gridSize, 
      segment.y * gridSize, 
      gridSize, 
      gridSize
    );
  }
}

function drawApple() {
  fill(255, 0, 0);  // Red apple
  rect(
    apple.x * gridSize, 
    apple.y * gridSize, 
    gridSize, 
    gridSize
  );
}

function placeApple() {
  apple = {
    x: floor(random(gridWidth)),
    y: floor(random(gridHeight))
  };
}

function checkAppleCollision() {
  // Check if snake head is on the apple
  if (snake.body[0].x === apple.x && 
      snake.body[0].y === apple.y) {
    // Grow snake
    snake.body.push({...snake.body[snake.body.length-1]});
    
    // Place new apple
    placeApple();
  }
}

function drawGrid() {
  stroke(200);
  // Vertical lines
  for (let x = 0; x < width; x += gridSize) {
    line(x, 0, x, height);
  }
  // Horizontal lines
  for (let y = 0; y < height; y += gridSize) {
    line(0, y, width, y);
  }
}

function keyPressed() {
  // Change snake direction based on arrow keys
  if (keyCode === UP_ARROW && snake.dy === 0) {
    snake.dx = 0;
    snake.dy = -1;
  } else if (keyCode === DOWN_ARROW && snake.dy === 0) {
    snake.dx = 0;
    snake.dy = 1;
  } else if (keyCode === LEFT_ARROW && snake.dx === 0) {
    snake.dx = -1;
    snake.dy = 0;
  } else if (keyCode === RIGHT_ARROW && snake.dx === 0) {
    snake.dx = 1;
    snake.dy = 0;
  }
}