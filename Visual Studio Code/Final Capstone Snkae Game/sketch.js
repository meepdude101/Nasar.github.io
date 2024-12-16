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


function drawGrid(){
  stroke(200)
  //vert lines
  for (let x = 0; x < width; x+= gridSize) {
    line(x, 0, x, height);
  }
  //horiz lines
  for (let y = 0; y< height; y += gridSize) {
    line(0,y, width, y);
  }
}



