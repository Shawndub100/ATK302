var hh;

function preload() {
hh = loadFont('assets/hh.ttf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
}
function draw() {
  fill('#ED225D');   // SETS the color
  textFont(hh, 59);  // SETS the font
  textSize(36);	// SETS the size of the font
  text('HELLO WORLD', 10, 50); // DISPLAYS TEXT WITH THE FONT
}
