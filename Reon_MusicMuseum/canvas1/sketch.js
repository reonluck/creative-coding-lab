let mySound;
let amplitude

function preload() {
  mySound = loadSound("assets/NightandDream.mp3");
  amplitude = new p5.Amplitude();
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer1")
  cnv.mouseClicked(togglePlay)
  amplitude = new p5.Amplitude();
  

}

function draw() {
  background(0);
  let level = amplitude.getLevel();
  let dia = map(level, 0, 1, 0, 200);
  fill(0, 50);
  rect(0, 0, width, height);
  fill(255);
  ellipse(random(width), random(height), 3, 3);
  fill(255)
  circle(350,40,30)
  push()
  rect(0,250,400,3)
  pop()
  push()
  rect(50,130,0.5,120)
  rect(350,130,0.5,120)
  rect(150,105,0.5,145)
  rect(250,105,0.5,145)
  
  pop()
  push()
  fill(128,128,128)
  rect (170,200,70,200)
  rect(190,190,30,10)
  rect(200,185,10,5)
  rect(204,135,2,50)
  
  pop ()
  push()
  fill(96,96,96)
  rect(120,220,50,180)
  rect(130,210,20,15)
  pop()

  push()
  fill(128,128,128)
  rect(0,280,20,120)
  
  pop()

  

  push()
  fill(64,64,64)
  
  rect(240,280,60,150)
  rect(240,270,20,10)
  rect(280,270,20,10)
  pop()
  noStroke();
  
  fill(255, 255, 102);
  ellipse(width / 2-10, height / 2+10, dia,dia);
  ellipse(width / 2+20, height / 2+30, dia,dia);
  ellipse(width / 2+20, height / 2+50, dia,dia);
  ellipse(width / 2+20, height / 2+90, dia,dia)
  ellipse(width / 2+20, height / 2+150, dia,dia)
  ellipse(width / 2-10, height / 2+30, dia,dia);
  ellipse(width / 2-10, height / 2+50, dia,dia);
  ellipse(width / 2-10, height / 2+70, dia,dia)
  ellipse(width / 2-10, height / 2+90, dia,dia)
  ellipse(width / 2-10, height / 2+110, dia,dia)
  ellipse(width / 2-10, height / 2+130, dia,dia)
  ellipse(width / 2-10, height / 2+150, dia,dia)
  ellipse(width / 2-50, height / 2+30, 1/2*dia,1/2*dia)
  ellipse(width / 2-50, height / 2+50, 1/2*dia,1/2*dia)
  ellipse(width / 2-50, height / 2+70, 1/2*dia,1/2*dia)
  ellipse(width / 2-50, height / 2+90, 1/2*dia,1/2*dia)
  ellipse(width / 2-50, height / 2+130, 1/2*dia,1/2*dia)
  ellipse(width / 2-50, height / 2+170, 1/2*dia,1/2*dia)
  ellipse(width / 2+60, height / 2+170, 1/3*dia,1/3*dia)
  ellipse(width / 2+60, height / 2+90, 1/3*dia,1/3*dia)
  ellipse(width / 2+60, height / 2+110, 1/3*dia,1/3*dia)
  ellipse(width / 2+80, height / 2+90, 1/3*dia,1/3*dia)
  ellipse(width / 2+80, height / 2+170, 1/3*dia,1/3*dia)
  fill(255);
  text("Nights and Dreams", 10, 20);
  text("Click to Play, Click Again to Stop", 10, 50);
  push()
  noFill()
  stroke(255)
  arc(200, 250, 500, 300, 2*HALF_PI,0)
  pop()
  
}

function togglePlay() {
  if (mySound.isPlaying()){
    mySound.pause()
  }else{
  mySound.play();
  }
}