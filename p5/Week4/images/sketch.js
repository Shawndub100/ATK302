var Montage;
var nord;
var roland;


function setup() {
  // put setup code here
  createCanvas(800,800)
Montage  = loadImage("assets/Montage.jpg")
nord = loadImage("assets/Nord.jpg")
roland = loadImage("assets/roland.jpg")

}

function draw() {
  // put drawing code here
  image(Montage,0 ,0, 400, 200)
  image(nord, 0, 200, 600,200)
  image(roland,0,400,500,200)
}
