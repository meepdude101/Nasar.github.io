// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let currentBack = 0;
let sunColor = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // Space background
  noStroke();
  let currentBack = 0;
 
}



function drawAstronaut() {
  rectMode(CENTER);
  
  // Helmet
  fill(255); // White
  rect(mouseX, mouseY + 2, 24, 24); 

  fill(0); // Black 
  rect(mouseX, mouseY, 18, 16);

  fill(173, 216, 230); // Light blue 
  rect(mouseX + 6, mouseY - 3, 5, 3);
  
  // Torso 
  fill(255); // White
  rect(mouseX, mouseY + 30, 22, 35);
  
  // Suit details
  fill(255, 0, 0); // Red
  rect(mouseX - 4, mouseY + 23, 5, 5);
  
  fill(0, 0, 255); // Blue
  rect(mouseX + 4, mouseY + 23, 5, 5);
  
  fill(255, 255, 0); // Yellow
  rect(mouseX, mouseY + 28, 5, 5);
  
  // Arms 
  fill(255); // White
  rect(mouseX - 15, mouseY + 25, 10, 25); // Left arm
  rect(mouseX + 15, mouseY + 25, 10, 25); // Right arm
  
  // Hands 
  fill(169, 169, 169); // Light grey
  rect(mouseX - 15, mouseY + 40, 10, 10); // Left glove 
  rect(mouseX + 15, mouseY + 40, 10, 10); // Right glove 

  // Legs 
  fill(255); // White
  rect(mouseX - 6, mouseY + 60, 10, 25); // Left leg
  rect(mouseX + 6, mouseY + 60, 10, 25); // Right leg

  // Boots 
  fill(169, 169, 169); // Grey boots
  rect(mouseX - 6, mouseY + 75, 10, 8); // Left boot
  rect(mouseX + 6, mouseY + 75, 10, 8); // Right boot
}

function changeBackground() {
  // Change the background color based on currentBack value
  if (currentBack == 0) {
    background(0); // Black (space)
  } else if (currentBack == 1) {
    background(100, 149, 237); // blue
  } else if (currentBack == 2) {
    background(34, 139, 34); // green
  } else if (currentBack == 3) {
    background(255, 182, 193); // pink
  }
}

function keyPressed(){
  if(keyCode === ' '){}
}

function mousePressed() {
  // Check if the middle mouse button is pressed
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4; // Cycle through 0, 1, 2, 3
    changeBackground(); // Update the background based on the new state
  }
}


function draw(){
  changeBackground();
  // Landscape 
  fill(137, 137, 137); // Grey
  ellipse(500, 650, 700, 300); 

  fill(94, 94, 94); // Dark grey
  ellipse(100, 700, 700, 250); 

  fill(167, 168, 151); // Light grey
  ellipse(900, 800, 2000, 300); 

  // Sun
  fill(239, 255, 0); // Yellow
  circle(290, 100, 100); 

  
  drawAstronaut();
}