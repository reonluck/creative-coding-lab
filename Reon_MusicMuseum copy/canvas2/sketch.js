let mySound;
let amplitude
var fft
function preload() {
  mySound = loadSound("assets/SayGoodbyeToyou_1.mp3");
  amplitude = new p5.Amplitude();
 
  
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer2")
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT()
}

function draw() {
  background(0);
  let level = amplitude.getLevel();
 
  stroke(255)
  var wave = fft.waveform()
 beginShape()
  for (var i=0; i<=180; i++){
    noFill()
    var index = floor(map(i,0,180,0,wave.length-1))
    var r=map(wave[index],-1,1,100,200)
    var x=r*sin(i)+200
    var y=r*cos(i)+200
    vertex(x,y)
  }
  endShape()
  
  push()
  fill (255)
  text("Say Goodbye To You", 10, 20);
  text("Click to Play, Click Again to Stop", 10, 40);
  pop()
}

function togglePlay() {
  if (mySound.isPlaying()){
    mySound.pause()
  }else{
  mySound.loop();
  }
}