// Snake Game
// Nasar Khan
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 30;
let gridWidth;
let gridHeight;

function setup() {
  createCanvas(windowWidth - (windowWidth % gridSize), 
  windowHeight - (windowHeight % gridSize));

  // calculate grid dimensions
  gridWidth = width / gridSize;
  gridHeight = height / gridSize;
}

function draw() {
  background(220);

  drawGrid();
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