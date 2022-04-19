function setup() {
  //Star Speed function(optional)
  let cnv=createCanvas(400, 400);
  cnv.parent("canvasContainer")
  frameRate(5);
}

function draw() {
 
  
  background(0);

  fill(245, 255, 0, 500);
  circle(30, 30, 50);

  noStroke();
  fill(171, 156, 206);
  ellipse(40, 43, 30, 20);
  ellipse(60, 38, 50, 25);
  ellipse(70, 48, 50, 25);
  ellipse(80, 38, 60, 25);

  fill(0, 50);
  rect(0, 0, width, height);
  fill(255);
  ellipse(random(width), random(height), 5.5, 5.5);

  fill(255, 0, 100);
  circle(175, 170, 100);

  fill(255);
  noStroke();
  rect(200, 200, 14, 160);
  rect(140, 200, 14, 175);
  rect(165, 60, 13, 100);
  rect(168, 10, 5, 40);

  beginShape();

  //rect(160,250,39,5)
  //rect(160,260,39,5)

  fill(120);
  rect(153, 200, 13, 175);

  fill(255, 0, 100);

  circle(175, 395, 125);
  circle(175, 170, 100);
  circle(172, 50, 30);

  fill(255);
  beginShape();
  vertex(150, 240);
  vertex(150, 250);
  vertex(200, 240);
  vertex(200, 230);
  endShape();

  fill(0);
  quad(150, 250, 150, 260, 200, 250, 200, 240);

  fill(255);
  beginShape();
  vertex(150, 260);
  vertex(150, 270);
  vertex(200, 260);
  vertex(200, 250);
  endShape();

  fill(255);
  beginShape();
  vertex(150, 290);
  vertex(150, 300);
  vertex(200, 290);
  vertex(200, 280);
  endShape();

  fill(255);
  beginShape();
  vertex(150, 310);
  vertex(150, 320);
  vertex(200, 310);
  vertex(200, 300);
  endShape();

  fill(0);
  quad(150, 300, 150, 310, 200, 300, 200, 290);

  fill(255, 120);
  beginShape();
  vertex(0, 351.5);
  vertex(0, 400);
  vertex(400, 400);
  vertex(400, 232);
  endShape();

  fill(255);
  noStroke();
  rect(200, 200, 14, 149);
  rect(140, 200, 14, 159);
  circle(147, 360, 14);
  circle(207, 346.5, 14);
  circle(147, 200, 14);
  circle(207, 200, 14);

  strokeWeight(3);
  beginShape();
  curveVertex(125, 175);
  curveVertex(222, 175);
  curveVertex(178, 191);
  endShape();
  //below are examples for rectangles
  //nofill()
  //rect(width/2,height/2,50,50);

  stroke(255, 170);
  strokeWeight(3);
  line(0, 350, 1200, 0);
  //fill(255,45,120)
  // stroke(255);
  //  rect(width/2,height/2,50,50);
  // rect(width/2+20,height/2+20,50,50);
  // noStroke();

  //fill(255,20,0);
  //noStroke();
  //ellipse(120,120,100,100)

  //triangle(30, 75, 58, 20, 86, 75);
}
function mouseClicked() {
  console.log(mouseX, mouseY);
}
