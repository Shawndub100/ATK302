var myState = 0

function setup() {
  // put setup code here
  createCanvas(800,800) ;
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    background('red')
    text('hello state0!', 100, 100);
    break;

    case 1:
    background('blue')
    text('State1', 100, 100);
    break;

    case 2:
    background('green')
    text('State2', 100, 100);
    break;

    case 3:
    background('yellow')
    text('State3', 100, 100);
    break;

    case 4:
    background('orange')
    text('State4', 100, 100);
    break;

  }
}

function mouseReleased(){
  myState = myState + 1
  if (myState > 4 ){
    mySate = 0;
  }
}
