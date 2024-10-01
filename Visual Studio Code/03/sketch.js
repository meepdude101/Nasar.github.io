// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

  if (keyIspressed){
    if(key === "a"){
      rY += 10; 
      if(ry > height) rY = 0;
    }
  }

fill(50, 150, 255);
rect(rX, rY, 70, 25, 10, 0);
function keypressed(){
  if (keycode === Down_Arrow){
    rX += 100;
  }
}
