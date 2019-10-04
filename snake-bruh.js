var graphic;

function setup(){
  createCanvas(800,600);
  graphic = loadImage("snake-bruh.jpg");
}
function draw(){
  background(0,0,0);
  stroke("#fff0");
  scale((mouseX+mouseY)/1200)
  image(graphic, mouseX-400,mouseY-230);
}
