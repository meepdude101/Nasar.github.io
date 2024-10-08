// Finding Max/Min
// Mr. Scott
// Oct 3, 2024

let NUM_CIRCLES = 40; 
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  noFill();
  let smallDiameter = Infinity; //60  40
  let smallX = -1;  
  let smallY = -1;
  for(let i = 0; i < NUM_CIRCLES; i++){ //repeat 40
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20,60);   //60 40 51
    if(d < smallDiameter){
      smallDiameter = d;
      smallX = x;
      smallY = y;
    }

    circle(x, y, d);
  }
  fill(255,200,100);
  text(smallDiameter, width/2, height/2);
  circle(smallX, smallY, smallDiameter);
  
}