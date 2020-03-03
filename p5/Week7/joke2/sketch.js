var myState = 0
var timer = 0

function setup() {
  // put setup code here
  createCanvas(1000,800) ;
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    background('red')
    textSize(60)
    text('What is a parasite ', 200, 200);

      timer++;
      if (timer > 200){
        myState = 1;
        timer = 0;
      }
    break;

    case 1:
    background('blue')
    text('SOMETHING YOU SEE', 300, 400);
        text('IN PARIS', 300, 400);
    break;

  }
}
