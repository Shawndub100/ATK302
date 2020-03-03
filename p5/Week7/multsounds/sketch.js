var song1;
var song2;
var song3;

var myState = 0;


function preload() {
  song1 = loadSound('assets/donkey.mp3');
  song2 = loadSound('assets/skate.mp3');
  song3 = loadSound('assets/thrill.mp3');
  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);


}

function draw() {
  switch (myState){

  case 0:
    song1.play();
  myState = 1
  break;

  case 1:
    break;

  case 2:
    song2.play();
  myState = 3
  break;

  case 3:
    break;

  case 4:
    song3.play();
  myState = 5
  break;

  case 5:
    break;
}
}
function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  myState++;
  if (myState > 5) {
    myState = 0 ;
}
}

function touchStarted() {
  getAudioContext().resume();
}
