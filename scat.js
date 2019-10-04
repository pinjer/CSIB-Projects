function setup(){
    createCanvas(800,600);

}
function draw(){
  frameRate(12);
  background(255,255,255,150);

  for (var countRows =0; countRows<10; countRows++){
    for (var countBlocks = 0; countBlocks<6; countBlocks++){
      fill(((mouseX+mouseY)/2)-random(1,countBlocks*10+10),mouseX-random(1,countBlocks*10+10), 100-random(10,25));
      rect(0,0,600,25);
      translate(600,-600)
      rotate(1);
      var valhalla = 600
      valhala = valhalla+100
      translate(valhalla,valhalla)
      ellipse(500,750)
    }

  }
}
