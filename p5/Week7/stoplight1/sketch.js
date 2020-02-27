var myState = 0
var timer = 0

function setup() {
  // put setup code here
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}
  function draw() {
    // put drawing code here

fill('yellow')
    rect(width / 2, height / 2, 150, 400)


    switch (myState) {
      case 0:
        fill('grey');
        ellipse(width / 2, height / 2, 100, 100);
        fill('red')
        ellipse(width / 2, height / 2 - 100, 100, 100);
        fill('grey')

        ellipse(width / 2, height / 2 + 100, 100, 100);

        timer++;
        if (timer > 200) {
          myState = 1;
          timer = 0;
        }
        break;

      case 1:
        fill('yellow');
        ellipse(width / 2, height / 2, 100, 100);
        fill('grey')
        ellipse(width / 2, height / 2 - 100, 100, 100);
        fill('grey')
        ellipse(width / 2, height / 2 + 100, 100, 100);

        timer++;
        if (timer > 200) {
          myState = 2;
          timer = 0;
        }
        break;


      case 2:
        fill('grey');
        ellipse(width / 2, height / 2, 100, 100);
        fill('grey')
        ellipse(width / 2, height / 2 - 100, 100, 100);
        fill('green')
        ellipse(width / 2, height / 2 + 100, 100, 100);
        timer++;
        if (timer > 200) {
          myState = 0;
          timer = 0;
        }


        break;
      }

    }
