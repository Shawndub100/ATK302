var x = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER)
}

function draw() {
  // put drawing code here
  background('YELLOW') ;
makeCovid();

push();
translate(x,0);
makeCovid();
x = x + 5;
if( x > width) {
  x = - 300 ;
}
pop();
}



function makeCovid(){

    noStroke();
  fill('red');
    rect(x,10,10,10) ;
    ellipse(x-5, 18, 10, 10) ;
      ellipse(x+5, 18, 10, 10) ;

}
