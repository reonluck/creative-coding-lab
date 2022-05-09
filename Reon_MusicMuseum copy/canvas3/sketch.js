let x;
let y;
let amplitude 
function preload(){
  sound = loadSound('assets/ripple.mp3');
}

function setup(){
  let cnv = createCanvas(400,400);
 background(204,229,255);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  
  amplitude = new p5.Amplitude();
}

function draw(){
  let waveform = fft.waveform();
  let level = amplitude.getLevel();

  for (let i = 0; i < waveform.length; i++){
    x = map(i, 0, waveform.length, 0, width);
    y = map( waveform[i], -1, 1, 0, height);
  }
  endShape();

  

  let x1 = frameCount% width;
  let y1 = sin(y * 0.5) *5;
  let y2 = sin(y * 0.5) *5+30
  noStroke();
  ellipse(x1, y1 + 300, 2);
  ellipse(x1, y2 + 300, 2);
  ellipse(x1, y1 + 100, 2);
  ellipse(x1, y2 + 150, 2);
  ellipse(x1, y1 + 150, 2);
  ellipse(x1, y2 + 200, 2);
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