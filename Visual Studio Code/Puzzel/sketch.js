// Puzzel Game
// Nasar Khan
// 11/4/2024
//

// Puzzel game where you have to either get the entire board black or entire board white

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];

let flipPattern = "cross"; // Initial flip pattern is set to "cross"

function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomizeBoard();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();            //render the current game board to the screen (and the overlay)
  checkWinCondition(); 

}



function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (keyIsDown(SHIFT)) {
    flip(currentCol, currentRow);
  } 
  else if (flipPattern === "cross") {
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  } 
  else if (flipPattern === "square") {
    // Square pattern flips
    flip(currentCol, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow + 1);
    flip(currentCol + 1, currentRow + 1);

  }
}



function keyPressed() {
  // Switch to square pattern when spacebar is pressed
  if (key === ' ') {
    flipPattern = (flipPattern === "cross") ? "square" : "cross";
  }
}


function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }



fill(100, 255, 100, 100);  // Semi-transparent blue for overlay
  
  
  // Highlight current cell and adjacent cells in a cross pattern
  if (flipPattern === "cross") {
    highlightCell(currentCol, currentRow);
    highlightCell(currentCol - 1, currentRow);
    highlightCell(currentCol + 1, currentRow);
    highlightCell(currentCol, currentRow - 1);
    highlightCell(currentCol, currentRow + 1);
  } else if (flipPattern === "square") {
    highlightCell(currentCol, currentRow);
    highlightCell(currentCol + 1, currentRow);
    highlightCell(currentCol, currentRow + 1);
    highlightCell(currentCol + 1, currentRow + 1);
  }
}

function highlightCell(col, row) {
  // Check if the cell is within bounds before drawing overlay
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
  }
}

function checkWinCondition() {
  let allZeroes = true; // Flag to check if all elements are 0
  let all255 = true;    // Flag to check if all elements are 255

  // Loop through each element in gridData
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      if (gridData[row][col] !== 0) {
        allZeroes = false; // Set flag to false if an element is not 0
      }
      if (gridData[row][col] !== 255) {
        all255 = false;    // Set flag to false if an element is not 255
      }
    }
  }

  // If either allZeroes or all255 is true, display "You Win"
  if (allZeroes || all255) {
    textSize(32);
    textAlign(CENTER, CENTER);

    // Set text color based on the win condition
    if (all255) {
      fill(0);  // Set text color to black if all elements are white
    } else {
      fill(255); // Set text color to white if all elements are black
    }

    text("You Win!", width / 2, height / 2);
  }
}

function randomizeBoard() {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      gridData[row][col] = random([0, 255]);  // Randomly set each element to either 0 or 255
    }
  }
}

function square() {
  if (keyIsDown( )) {
}
}