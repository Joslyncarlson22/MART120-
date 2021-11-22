// x and y for my character//
var characterX = 100;
var characterY = 100;
// define the key codes for each letter//
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for a//
var shapeX = 30;
var shapeY = 50;
var shapeXspeed;
var shapeYspeed;

//creat a shape when mouse is clicked //
var mouseshapeX;
var mouseshapeY;
function setup()
{
  createcanvas (500,600);
  //random speed at start//
  shapeXspeed = math.floor(math.random() * (math.floor(math.random() *5)) +1);
  shapeYspeed = math.floor(math.random()* (math.floor.(math.random() *5)) +1);
  createcharacter(200,350);
}

function draw()
{
  background(120,45,78);
  stroke(0);
  fill(0);

  //create borders//
  createborder(10);

  //exit/
  textsize(16);
  text("exit", width-50, height-50)

  //create character (200,350);
  drawcharacter();
  charactermovement();

  //potential enemy//
  fill (13,145,14);
  //draw the shape//
  circle(shapeX, shapeY, 10);

  //get random when starts
  shapeXspeed = math.floor(math.random() * (math.floor(math.random() *5)) +1);
  shapeYspeed = math.floor(math.random()* (math.floor.(math.random() *5)) +1);

  //move shape//
  shapeX += shapeXspeed;
  shapeY += shapeYspeed;
  //check to see if the shape has gone out of bounds//
  if (shapeX > width)
  {
    shapeX = 0;
  }
  if (shapeX < 0)
  {
    ShapeX= width;
  }
  if (shapeY > height)
  {
    shapeY = 0;
  }
  if(shapeY <0)
  {
    shapeY = height;
  }
  //check to see if character has left the exit//
  if(characterX > width && characterY > width-50)
  {
    fill(0);
    stroke(5);
    textsize(26);
    text("you win!", width/2-50, height/2-50);
  }

  //create the shape based on the mouse click
  fill (120, 130, 140);
  circle (mouseshapeX, mouseshapeY, 25);
}

function charactermovement()
{
  //handle the keys
  if(keyIsDown(w))
  {
    characterY -= 10;
  }
  if(keyIsDown(s))
  {
    characterY += 10;
  }
  if(keyIsDown(a))
  {
    characterX -= 10;
    console.log ("movement: "+ characterX);
  }
  if(keyIsDown(d))
  {
    characterX += 10;
  }
}
function createcharacter (x,y)
{
  characterX = x;
  characterY = y;
  console.log(characterX);
  //character
  //circle(characterX, CharacterY, 25);
}

function drawcharacter()
{
  fill(23,40,123)
  circle(charcterX,characterY,25);
}
function createborders(thickness)
{
  //TOP
  rect(0,0 width, thickness);
  //LEFT
  rect(0,0,thickness, height);
  //BOTTOM
  rect(0, height-thickness, width, thickness);
  //RIGHT
  rect(width-thickness, 0, thickness, height-50);

}

function mouseClicked()
{
  mouseshapeX = mouseX;
  mouseshapeY = mouseY;
}
/*
function keyPressed(){
  if (keycode ===LEFT_ARROW){
    characterX -= 10;
  }
  else if (keyCode ===RIGHT_ARROW){
    characterX += 10;
  }
  else if (keyCode ===UP_ARROW){
    characterY -= 10;
  }
  else if (keyCode === DOWN_ARROW){
    characterY += 10;
  }

}
*/
