// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // Space background
  noStroke();

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

  
  drawAstronaut(300, 400);

}


function drawAstronaut(x, y) {
  rectMode(CENTER);
  
  // Helmet
  fill(255); // White
  rect(x, y + 2, 24, 24); 

  fill(0); // Black 
  rect(x, y, 18, 16);

  fill(173, 216, 230); // Light blue 
  rect(x + 6, y - 3, 5, 3);
  
  // Torso 
  fill(255); // White
  rect(x, y + 30, 22, 35);
  
  // Suit details
  fill(255, 0, 0); // Red
  rect(x - 4, y + 23, 5, 5);
  
  fill(0, 0, 255); // Blue
  rect(x + 4, y + 23, 5, 5);
  
  fill(255, 255, 0); // Yellow
  rect(x, y + 28, 5, 5);
  
  // Arms 
  fill(255); // White
  rect(x - 15, y + 25, 10, 25); // Left arm
  rect(x + 15, y + 25, 10, 25); // Right arm
  
  // Hands 
  fill(169, 169, 169); // Light grey
  rect(x - 15, y + 40, 10, 10); // Left glove 
  rect(x + 15, y + 40, 10, 10); // Right glove 

  // Legs 
  fill(255); // White
  rect(x - 6, y + 60, 10, 25); // Left leg
  rect(x + 6, y + 60, 10, 25); // Right leg

  // Boots 
  fill(169, 169, 169); // Grey boots
  rect(x - 6, y + 75, 10, 8); // Left boot
  rect(x + 6, y + 75, 10, 8); // Right boot
}
