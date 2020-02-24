var mic;
var vol;
var y = 0 ;

function setup() {

  createCanvas (1175,825) ;
  rectMode (CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('red');

push();
translate(y,0);
rect(547, 548, 300, 300);

fill('orange');
  arc(546, 400, 250, 280, PI, TWO_PI);
pop();
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
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
