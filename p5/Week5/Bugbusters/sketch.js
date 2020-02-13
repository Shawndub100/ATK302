var myState = 0

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {

  switch (myState){

    case 0:
      background('red');
      fill('white');
      textSize(100);
      text("case 0", 2, 100);
      break;

    case 1:
      background('blue');
      fill('black');
      textSize(100);
      text("case 1", 100, 100);
      break;

    case 2:
      background('green')
      fill('gold');
      textSize(100);
      text("case 2", 100, 100);
      break;
  }

}


function mouseReleased() {
  myState = myState + 1
  if (myState > 2) {
    myState = 0;
  }

}
