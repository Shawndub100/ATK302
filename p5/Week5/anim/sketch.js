var x = 0 ;
function setup() {
  // put setup code here
  createCanvas (400,400);
}

function draw() {
  // put drawing code here
  background('blue')
  fill('red')
  textSize(40);
  text("PARASITE", x, 100);
  x = x + 5;
  if (x > width) {
    x = 0 ;
  }
}
