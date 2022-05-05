var s=function(sketch1){
sketch1. mySound;
sketch1. amplitude

sketech1.preload=()=>{
  sketch1.mySound = loadSound("assets/NightandDream.mp3");
  sketch1.amplitude = new p5.Amplitude();
}

sketch1.setup=()=> {
  sketch1.createCanvas(400, 400);
  
  sketch1.mouseClicked(togglePlay)
  sketch1.amplitude = new p5.Amplitude();
}

sketch1. draw=()=> {
  sketch1.background(0);
  sketch1.level = sketch1.amplitude.getLevel();
  sketch1.dia = sketch1.map(level, 0, 1, 0, 200);
  sketch1.fill(255)
  sketch1.circle(350,40,30)
  sketch1.push()
  sketch1.rect(0,250,400,3)
  sketch1.pop()
  sketch1.push()
  sketch1.rect(50,130,0.5,120)
  sketch1.rect(350,130,0.5,120)
  sketch1.rect(150,105,0.5,145)
  sketch1.rect(250,105,0.5,145)
  
  sketch1.pop()
  sketch1.push()
  sketch1.fill(128,128,128)
  sketch1.rect (170,200,70,200)
  sketch1.rect(190,190,30,10)
  sketch1.rect(200,185,10,5)
  sketch1.rect(204,135,2,50)
  
  sketch1.pop ()

  sketch1.fill(96,96,96)
  sketch1.rect(120,220,50,180)
  sketch1.rect(130,210,20,15)
  sketch1.pop()

  sketch1. push()
  sketch1.fill(128,128,128)
  sketch1. rect(0,280,20,120)
  
  sketch1. pop()

  

  sketch1.push()
  sketch1. fill(64,64,64)
  
  sketch1.rect(240,280,60,150)
  sketch1.rect(240,270,20,10)
  sketch1. rect(280,270,20,10)
  sketch1.pop()
  sketch1.noStroke();
  
  sketch1.fill(255, 255, 102);
  sketch1.ellipse(sketch1.width / 2-10,sketch1.height / 2+10,sketch1. dia,sketch1.dia);
  sketch1. ellipse(sketch1.width / 2+20, sketch1.height / 2+30, sketch1.dia,sketch1.dia);
  sketch1. ellipse(sketch1.width / 2+20, sketch1.height / 2+50, sketch1.dia,sketch1.dia);
  sketch1.ellipse(sketch1.width / 2+20,sketch1. height / 2+90,sketch1. dia,sketch1.dia)
  sketch1.ellipse(sketch1.width / 2+20, sketch1.height / 2+150,sketch1. dia,sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-10, sketch1.height / 2+30, sketch1.dia,sketch1.dia);
  sketch1. ellipse(sketch1.width / 2-10,sketch1. height / 2+50, sketch1.dia,sketch1.dia);
  sketch1.ellipse(sketch1.width / 2-10,sketch1. height / 2+70, sketch1.dia,sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-10, sketch1.height / 2+90, sketch1.dia,sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-10, sketch1.height / 2+110, sketch1.dia,sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-10, sketch1.height / 2+130, sketch1.dia,sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-10, sketch1.height / 2+150, sketch1.dia,sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-50, sketch1.height / 2+30, 1/2*sketch1.dia,1/2*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-50, sketch1.height / 2+50, 1/2*sketch1.dia,1/2*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-50, sketch1.height / 2+70, 1/2*sketch1.dia,1/2*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-50, sketch1.height / 2+90, 1/2*sketch1.dia,1/2*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-50, sketch1.height / 2+130, 1/2*sketch1.dia,1/2*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2-50, sketch1.height / 2+170, 1/2*sketch1.dia,1/2*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2+60, sketch1.height / 2+170, 1/3*sketch1.dia,1/3*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2+60, sketch1.height / 2+90, 1/3*sketch1.dia,1/3*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2+60,sketch1. height / 2+110, 1/3*sketch1.dia,1/3*sketch1.dia)
  sketch1. ellipse(sketch1.width / 2+80, sketch1.height / 2+90, 1/3*sketch1.dia,1/3*sketch1.dia)
  sketch1.ellipse(sketch1.width / 2+80,sketch1. height / 2+170, 1/3*sketch1.dia,1/3*sketch1.dia)
  sketch1.fill(255);
  sketch1. text("Nights and Dreams", 10, 20);
  sketch1. text("Click to Play, Click Again to Stop", 10, 50);
  sketch1.push()
  sketch1. noFill()
  sketch1. stroke(255)
  sketch1.arc(200, 250, 500, 300, 2*HALF_PI,0)
  sketch1. pop()
  
}

sketch1. togglePlay=()=> {
  if (sketch1.mySound.isPlaying()){
    sketch1. mySound.pause()
  }else{
    sketch1.mySound.play();
  }
}
}
var myp5=new p5(s,'convasContainer1')