function setup() {
  // put setup code here
  createCanvas (1175,825) ;
  rectMode (CENTER);
}

function draw() {
background('#50CBFC');
//sky
fill('yellow');
ellipse(25, 20, 300, 300);

// cloud
fill(0);
  arc(546, 563, 250, 280, PI, TWO_PI);


fill('white');
ellipse(440, 65, 150, 125);

fill('white');
ellipse(530, 65, 150, 125);

fill('white');
ellipse(700, 65, 150, 125);

fill('white');
ellipse(790, 65, 150, 125);

fill('white');
ellipse(472, 657, 150, 125);
//cloud

//box man
fill('red');
 rect(547, 712, 300, 300);
 if (mouseIsPressed) {
 background('black');
 fill('red');
  rect(547, 548, 300, 300);
  fill('#424242');
  ellipse(440, 65, 150, 125);
  fill('#424242');
  ellipse(530, 65, 150, 125);
  fill('#424242');
  ellipse(700, 65, 150, 125);
  fill('#424242');
  ellipse(790, 65, 150, 125);
  fill('white');
  ellipse(25, 20, 300, 300);
  fill('orange');
    arc(546, 400, 250, 280, PI, TWO_PI);

   } else {
     fill('white');
     ellipse(500, 657, 50, 50);
     fill('white');
     ellipse(600, 657, 50, 50);

     fill('black');
     ellipse(511, 657, 10, 20);
     fill('black');
     ellipse(600, 657, 10, 20);

     fill('pink');
  rect(550, 765, 150, 29);

   }

}

function mouseReleased () {
  console.log(mouseX + ", " + mouseY);
}
