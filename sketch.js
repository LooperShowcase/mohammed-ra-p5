function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("#001219");
  
  translate(width / 2, height / 2);
  rotate(-90);
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let milliesecond = millis();


  stroke("03071e");
  strokeWeight(5);
  noFill();
  stroke("#03071e")
  ellipse(0, 0, 300, 300);

  let MillieAngle = map(milliesecond, 0, 1000, 0, 360,);
  stroke("#dc2f02");
  arc(0, 0, 250, 250, 0, MillieAngle);



  let secondAngle = map(seconds, 0, 60, 0, 360,open);

  stroke("#370617");
  arc(0, 0, 250, 250, 0, secondAngle);

  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 6);
  stroke("#6a040f");
  arc(0, 0, 220, 220, 0, minuteAngle);

  let hourAngle = map(hours % 12, 0, 12, 0, 360);
  stroke("#7b77bf");
  arc(0, 0, 170, 180, 0, hourAngle);
  push();
  rotate(secondAngle);
  stroke("#6a040f");
  strokeWeight(5);
  line(0, 0, 125, 0);
  pop();
  push();
  rotate(minuteAngle);
  stroke("#9d0208");
  strokeWeight(5);
  line(0, 0, 110, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#dc2f02 ");
  strokeWeight(5);
  line(0, 0, 85, 0);
  pop();
  push()
  strokeWeight(1)
  rotate(90)
  textSize(60)
  stroke("white")
  noFill();
  textFont()
  text(`${hours}:${minutes}:${seconds}`,-110,250)
  pop()
  stroke("pink")
  strokeWeight(1)
  rotate(90)
  textSize(20)
  text("12",-5,-175)
  text("6",5,175)
  text("3",175,0)
  text("9",-175,0)
  stroke("#fca311")
  text("Made by M.R",630,370)
}

