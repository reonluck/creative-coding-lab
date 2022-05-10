let x;
let y;
let amplitude 
var history=[]
function preload(){
  sound = loadSound('assets/ripple.mp3');
}

function setup(){
  let cnv = createCanvas(400,400);
 background(204,229,255);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  
  amplitude = new p5.Amplitude();
 // c=random(-39,39)
}

function draw(){
  let waveform = fft.waveform();
  var vol = amplitude.getLevel();
  beginShape()
  stroke(255)
  for (let a = 0; a < waveform.length; a++){
    x = map(a, 0, waveform.length, 0, width);
    y = map( waveform[a], -1, 1, 0, height);
    z=map(waveform[a],0,1,height,0)
    point(a,z-50)
    
  }

  endShape();

  

 let x1 = frameCount%(1.5*width);
  let y1 = sin(y * 0.08) *5;
  let y2 = sin(y * 0.08) *5+30
noStroke();
  ellipse(x1, y1 + 300, 2);
 ellipse(x1+300, y2 + 300, 2);
  ellipse(x1+50, y1 + 100, 2);
  ellipse(x1-20, y2 + 150, 3);
  //ellipse(x1+200, y1 + 150, 2);
  ellipse(x1, y2 + 200, 4);
  push()
  noStroke()
 fill(255,255,204)
  ellipse(100,400,400,170)
  ellipse(400,400,400,100)
  pop()
  push()
  fill (255)
 text("Ripple", 10, 20);
 text("Click to Play, Click Again to Stop", 10, 40);
  pop()
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}