// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectWidth = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  staircase();
}


function staircase(){

  for(let x = 0; x <= width; x += rectWidth){
    noFill();

    let rectHeight = noise(x * 0.002);
    

    rectHeight = map(rectHeight, 0, 1, 500, 100);

    rect(x, height, rectWidth, -rectHeight);

  }
}
