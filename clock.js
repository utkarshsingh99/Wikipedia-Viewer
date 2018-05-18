function setup() {
  var canvas = createCanvas(200,200);
  canvas.parent('sketch');
}
function draw(){
  //background(0);
  clear();
  translate(100,100);
  let hur = hour();
  let min = minute();
  let sec = second();
  noFill();

  stroke(95,158,160);
  strokeWeight(4);
  let s=map(sec,0,60,-PI/2,PI*2-PI/2);
  arc(0,0,100,100,-PI/2,s);

  stroke(13, 186, 177);
  strokeWeight(4);
  let m=map(min,0,60,-PI/2,PI*2-PI/2);
  arc(0,0,152,152,-PI/2,m);

  stroke(200);
  strokeWeight(4);
  let h=map(hur,0,12,-PI/2,PI*2-PI/2);
  arc(0,0,144,144,-PI/2,h);

  push();
  rotate(s);
  stroke(95,158,160);
  line(0,0,74,0);
  pop();

  push();
  rotate(m);
  stroke(13, 186, 177);
  line(0,0,70,0);
  pop();

  push();
  rotate(h);
  stroke(200);
  line(0,0,50,0);
  pop();

}
