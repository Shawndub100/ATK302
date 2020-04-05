var cars = [] ;
var frogpos;
var myState = 0;
var maxCars = 10;
var maxTimer = 12*60;
var timer = maxTimer ;

function setup() {
  // put setup code here
  createCanvas(800, 800);

  for( var i = 0 ; i < maxCars; i ++){
    cars.push(new Car());

  }

frogpos = createVector(400,height-100) ;
textAlign(CENTER) ;
}

function draw() {
  // put drawing code here
  switch(myState) {
    case 0:
    background('red');
    fill('white');
    textSize(24);
    text("Welcome to my game! Click to proceed", width/2, height/2);
    break;

    case 1:
    game();
    timer = timer - 1;
    if (timer <= 0){
      timer = maxTimer;
      myState= 3;
    }

    break;

    case 2:
    background('yellow')
        textSize(24);
    text("congrats you won", width/2, height/2);
    break;

    case 3:
    background('green')
    fill('white') ;
        textSize(24);
    text("oops you lost", width/2, height/2);
    break;
}

}

function mouseReleased () {
  switch(myState) {
    case 0:
    myState = 1;
    break ;

      case 2 :
      cars = [];
      for( var i = 0 ; i < maxCars; i ++){
        cars.push(new Car());
      }
          myState = 0;
      break ;

      case 3 :

      for( var i = 0 ; i < maxCars; i ++){
        cars.push(new Car());
      }
          myState = 0;
      break ;
  }
}


function game() {
  background('gray')

    for( var i = 0 ; i <cars.length; i ++) {

        cars[i].display();
        cars[i].drive();
        if (cars[i].pos.dist(frogpos) < 50) {
          cars.splice(i,1) ;
        }
    }

if (cars.length == 0){
  myState = 2 ;


}
fill('green')
ellipse(frogpos.x,frogpos.y,100,100);
  checkForKeys();
}

function checkForKeys(){
  if(keyIsDown(LEFT_ARROW)) frogpos.x -= 5;
    if(keyIsDown(RIGHT_ARROW)) frogpos.x += 5;
      if(keyIsDown(UP_ARROW)) frogpos.y -= 5;
        if(keyIsDown(DOWN_ARROW)) frogpos.y += 5;
}






//our class
function Car(){
this.pos = createVector(random(width), random(height)) ;
this.vel = createVector(random(-5, 5),random(-5,5)) ;
this.r = random(255);
this.g = random(255);
this.b = random(255);

  this.display = function(){
    fill(this.r, this.g, this.b)
    rect(this.pos.x,this.pos.y,30, 30);
  }


      this.drive = function() {
        this.pos.add(this.vel);
        if (this.pos.x > width) this.pos.x = 0 ;
        if (this.pos.x < 0) this.pos.x = width ;
        if (this.pos.y > height) this.pos.y = 0 ;
        if (this.pos.y < 0) this.pos.y = height ;

        }
}
