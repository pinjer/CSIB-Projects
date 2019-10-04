function setup(){
    createCanvas(800,600);
  }
function cleanvars(){
  var x=(random(100,255));
  var y=(random(100,255));
}
function draw(){
  var x=(random(100,255));
  var y=(random(100,255));
  fill(0,0,0,255);
  rect(125,0,125,125);
  background(255,255,255,100);
  fill(0,0,0,50)
  rect(0,0,125,125)
  if(mouseX<=125 && mouseY<=125 && mouseX> 0 && mouseY> 0){
  fill(random(0,255),random(0,255),random(0,255),random(100,255));
  rect(100+(mouseX*2),100+(mouseY*2),x,y);
  fill(random(0,255)+mouseX,random(0,255)-mouseX,random(0,255),random(100,255));
  rect(x*2,y*3,100*(mouseY/3),100*(mouseY*3));
  x=x+y
  print(x);
  if(x>2000){
    cleanvars();
  }
  if(mouseX<=250 && mouseY<=125 && mouseX>125 && mouseY>125){

    rect(100,100,100,100);
  }
  else{
    text("test",100,100,100,100)
  }
}

}
