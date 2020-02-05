var Montage;
var nord;
var roland;


function setup() {
  // put setup code here
  createCanvas(800,800)
montage  = loadImage("assets/Montage.Jpg")
nord = loadImage("assets/nord.Jpg")
roland = loadImage("assets/roland.Jpg")

}

function draw() {
  // put drawing code here
  image(montage,0 ,0, 400, 200)
  image(nord, 0, 200, 600,200)
  image(roland,0,400,500,200)
}
