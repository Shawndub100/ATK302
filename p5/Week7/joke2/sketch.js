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
    text('WHAT DOES A HOUSE ', 200, 200);
      text('WEAR TO THE PARTY ', 200, 300);
      timer++;
      if (timer > 200){
        myState = 1;
        timer = 0;
      }
    break;

    case 1:
    background('blue')
    text('ADDRESS LOLOL', 300, 400);
    break;

  }
}
