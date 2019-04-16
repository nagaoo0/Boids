const flock = [];
var bg= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);

  angleMode(DEGREES);

  for (let i = 0; i <100; i++) {
    flock.push(new Boid());
  }  
}

function draw() {
  colorMode(HSB);
  background(0,0.35);
  colorMode(RGB);
  //noStroke();
  


  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}