//creating the variables for the castle
var pillar1,pillar2,pillar3,pillar4
var main,door
var p3,p4

function setup() {

  //setting the canvas
  createCanvas(800,400);
  
  //giving the appropriate shape , size and color to the different parts of the castle
  main=createSprite(350,330,220,150)
  main.shapeColor="maroon"

  door = createSprite(360,375,50,50)
  door.shapeColor="black"

 pillar1 = createSprite(250, 300, 50, 200);
 pillar1.shapeColor="pink"

 pillar2 = createSprite(470,300,50,200)
 pillar2.shapeColor="pink"

 pillar3 = createSprite(200,250,50,300)
 pillar3.shapeColor="red"

 pillar4 = createSprite(520,250,50,300)
 pillar4.shapeColor="red"
}

function draw() {
  
  //giving the background color 
  background(0,0,0) 

  // creating the minarets of the castle and giving them brown color
  fill(165,42,42)
triangle(200,20,228,100,172,100) 
triangle(520,20,548,100,492,100)
triangle(359,175,487,255,231,255) 

  drawSprites();
}