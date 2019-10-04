
function setup(){
    createCanvas(400,400);
  }
function draw(){
  if(mouseIsPressed==true){
    background(186, 202, 245,1);
    let red = color(255,0,0);
    let green = color(0,255,0);
    let blue = color(0,0,255);
    let black = color(0,0,0);
    let white = color(255,255,255);
    let yellow = color(255,255,0);
    let pink = color(255,0,255);
    let cyan = color(0,255,255);
    stroke(mouseX,mouseX,mouseY,mouseY);
    fill(black);
    rect(mouseX,mouseY,mouseX,mouseY);
    fill(red);
    rect(mouseY,mouseX,mouseY,mouseX)
    fill(blue);
    rect((mouseX/8),(mouseY/6),(mouseX/4),(mouseX*2))
    fill(yellow)
    rect((mouseY*3),(mouseY/8),(mouseY/-10),(mouseY/6))
    fill(pink)
    rect((mouseX*2),(mouseX*-2),(mouseX/3),(mouseX*-2))
    fill(cyan)
    rect((mouseX*(1/2)),250,(mouseX*(1/5)),100)
    fill(yellow)
    rect((mouseY*3),mouseY,mouseY,(mouseY/2))
    fill(black)
    rect(250,250,25,25)
    fill(green)
    rect((mouseX+100),(mouseX+100),((-1*mouseX)*(mouseY/2)/30),13)
    fill(mouseX-100,mouseX-100,mouseY-100)
    rect((mouseX-100),(mouseX+200),(mouseX/4),(mouseY*6));
    x=400
    y=0
    rect(mouseX-25,mouseY-200,(mouseY*3),mouseX+0)


  }

  }
// //  for (i<10;i++){
//     rect(0,30,20,80);
//     rotate(PI/10);
