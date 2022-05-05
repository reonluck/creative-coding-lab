let mySound;
let amplitude
var fft
function preload() {
  mySound = loadSound("assets/march_1.mp3");
  amplitude = new p5.Amplitude();
 
  
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer")
  cnv.mouseClicked(togglePlay)
  amplitude = new p5.Amplitude();
  fft = new p5.FFT()
}

function draw() {
  let level = amplitude.getLevel();
  let dia = map(level, 0, 1, 0, 200);
  let r=random(0,250)
  let g=random(0,250)
  let b=random(0,250)
  fill(r,g,b)
  x=random(0,400)
  y=random(0,400)
  circle(x,y,dia)
  
  push()
  fill (255)
  text("March", 10, 20);
  text("Click to Play, Click Again to Stop", 10, 50);
  pop()
}

function togglePlay() {
  if (mySound.isPlaying()){
    mySound.pause()
  }else{
  mySound.loop();
  }
}