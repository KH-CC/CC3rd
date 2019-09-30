function setup() {
createCanvas(windowWidth, windowHeight);
}

var mode ='RECT';

function draw() {
background(128, 186, 255);
randomSeed(0);
  
var x, y, r;
var delta = 50;
var backSlashProb = map(mouseX, 0, windowWidth, 0,1);

for (y=0; y<windowHeight; y+=delta) {
for (x=0; x<windowWidth; x+=delta) {
r = random(0, 1);
if (r> 0.2 && r < backSlashProb) {
stroke(255);
strokeWeight(3);
line(x, y, x+delta, y+delta);
} 
}
}
  
var x, y, r;
var delta = 30;
strokeWeight(0);
for (y=0; y<windowHeight; y+=delta) {
for (x=0; x<windowWidth; x+=delta) {
r = random(0, 1);
if (r < 0.2 && r> 0.1 ) { fill(250, random(150,200), 183);
switch(mode) {
case 'RECT':
    ellipse(x, y+delta, delta*1.2, delta);
    break;
case 'ELLIPSE':
    fill(255)
    ellipse(x, y, delta, delta);
    break;
} }
}
}
  
}
function keyPressed() {
switch(key){
  case 'p': mode = "RECT";
  break;
  case 's': mode = "ELLIPSE";
  break;
  default: mode  = "NONE";
  break;
} print(mode);
  
  
}
