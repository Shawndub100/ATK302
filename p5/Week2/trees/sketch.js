function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  // put drawing code here
  background('#448CA9');
  noStroke();


  fill('#4f2c06');
  rect(580, 250, 50, 275);

  fill('yellow');
  ellipse(25, 20, 300, 300);

  fill('white');
  ellipse(600, 20, 100, 50);

  fill('white');
  ellipse(550, 20, 100, 50);

  fill('white');
  ellipse(400, 20, 100, 50);

  fill('white');
  ellipse(350, 20, 100, 50);

  /*fill(204);
  triangle(288, 18, 351, 360, 288, 360);*/

  fill('green');
  arc(600, 250, 150, 150, PI, TWO_PI);
}
