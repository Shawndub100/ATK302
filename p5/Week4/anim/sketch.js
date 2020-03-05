var x = 0
var myState = 0 ;
var timer = 0 ;
var timer1 = 200 ;


function setup() {
  // put setup code here
  createCanvas (1435,825) ;
  rectMode (CENTER);
}

function draw() {
  // put drawing code here

  background('red')
    text('Congratulations you have found me!!! ', 100, 100);


    timer1 = timer1 - 1;


    if (timer1 <= 0) {
      background(random(256),random(256),random(256));
      text('Congratulations you have found me!!! ', 100, 100);

    timer1 = 1 ;

    }
  push()
  translate(x,0)

  fill('red');
   rect(547, 712, 300, 300);
   fill('white');
   ellipse(500, 657, 50, 50);
   fill('white');
   ellipse(600, 657, 50, 50);
   fill('black');
   ellipse(511, 657, 10, 20);
   fill('black');
   ellipse(600, 657, 10, 20);
   fill('pink');
  rect(550, 765, 150, 29);
pop()

x += 1;
if(x > width ){
  x = -300;
}

  switch(myState){
    case 0:
    background('#F95B00 ')
    textSize(140)
    text('Box Man', 300, 300);
timer++;
if (timer > 200){
  myState = 1;
  timer = 0;
}

    break;

    case 1:
    background('blue')
textSize(50)
    text('One day there was a box.', 400, 300);
      text('his name was Box.', 450, 400);

    timer++;
    if (timer > 200){
      myState = 2;
      timer = 0;
    }
    break;

    case 2:
    background('#8AFF33')
    textSize(50)
        text('Box was red with big eyeballs', 400, 300);
          text('No one could see box.', 450, 400);

            timer++;
            if (timer > 200){
              myState = 3;
              timer = 0;
            }
    break;

    case 3:
    background('yellow')
      rect(100,100,100,100) ;

        text(' I\'ve actually never seen him myself.', 350, 400);
            text('It has been said if you click the square', 350, 500);
              text('you\'ll see him .', 350, 600);
    break;



  }

}


function mouseReleased(){
  myState = myState + 1
  if (myState > 4 ){
    myState = 0;
  }
  function mouseReleased(){
    if((mouseX > 100) && (mouseX < 200) && (mouseY>100) && (mouseY< 200))
    background(random(255))

  }

}
