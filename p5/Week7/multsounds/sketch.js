
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

}

function touchStarted() {
  getAudioContext().resume();
}
