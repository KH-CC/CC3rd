function setup() {
createCanvas(windowWidth, windowHeight);
}

var mode ='NONE';

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
  
var x, y, r, z;
var delta = 30;
strokeWeight(0);
for (y=0; y<windowHeight; y+=delta) {
for (x=0; x<windowWidth; x+=delta) {
r = random(0, 1);
z = random(0, 1);
if (r < 0.2 && r> 0.1 ) { fill(250, random(150,200), 183);
switch(mode) {
case 'PETAL':
    ellipse(x, y+delta, delta*1.2, delta);
    break;
case 'SNOWY':
    fill(255);
    ellipse(x, y, delta, delta);
    break;
    case 'YELLOW':
    fill(251, 210, 14);
    ellipse(x, y, delta*0.5, delta*0.5);
    if(z>0.5){ 
    arc(x+delta, y, delta, delta, HALF_PI, PI);}
    break;
    case 'LEAF':
    fill(random(110, 160), 210, 14);
    ellipse(x, y, delta, delta);
    break;

} }
}
}
  
}
function keyPressed() {
switch(key){
  case 'p': mode = "PETAL";
  break;
  case 's': mode = "SNOWY";
  break;
  case 'l': mode = "LEAF";
  break;
  case 'y': mode = "YELLOW";
  break;
  default: mode  = "NONE";
  break;
} print(mode);
  
  
}