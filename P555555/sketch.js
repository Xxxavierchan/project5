var diameter = 400; //declaring my variable

function setup() {
  createCanvas(500,500);//canvs size in pixels

}

function draw() {
  background(255, 251, 0);//background color
//text
  textAlign(CENTER);
  textSize(40);
  text("Merry Xmas✧(•̀ω•́ )", 250, 250);

//draw a little car

  rect(diameter,diameter,80,50);
  ellipse(diameter+20,diameter+50,20,20);
  ellipse(diameter+60,diameter+50,20,20);

//add follow mouse stuff
  fill(random(0,255));
  //draw four ellipse in different sizes
  ellipse(mouseX + random(-2, 2),mouseY,10,10);
  ellipse(mouseX + random(-7, 7), mouseY + 10, 12, 12);
  ellipse(mouseX + random(-9, 9), mouseY + (10 * 2), 14, 14);
  ellipse(mouseX + random(-10, 10), mouseY + (10 * 3), 15, 15);
  ellipse(mouseX + random(-14, 14), mouseY + (10 * 4), 16, 16);

//interactivity
if(mouseIsPressed){
  diameter = 50;
  fill(random(0,255),random(0,255),random(0,255));
}
 else {
  diameter = 400;
  fill(255,251,0);
 }
}
