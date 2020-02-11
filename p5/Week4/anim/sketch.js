var x = 0

function setup() {
  // put setup code here
  createCanvas (1175,825) ;
  rectMode (CENTER);
}

function draw() {
  // put drawing code here

  background('blue')

  push()
  translate(x,0)
  fill('red');
   rect(547, 712, 300, 300);
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
pop()

x += 3;
if(x > width ){
  x = -300;
}

}
