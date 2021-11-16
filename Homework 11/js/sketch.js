//x and y for below character
var characterX=200;
var characterY=200;

//key codes for each letter
var w=85;
var s=80;
var a=65;
var d=70;

//shape for x and y
var shapeX= 35;
var shapeY= 55;
var shapeXspeed;
var shapeYspeed;

//shapes when mouse is clicked
var mouseshapeX;
var mouseshapeY;
function setup()
{
  creatcanvas(700,800);
  //random speed
  shapeXspeed =Math.floor(math.random() * (math.floor(math.random)() *5)) +1);
  shapeYspeed =Math.floor(math.radnom() * (math.floor(math.random)() *5)) +1);

}

function draw()
{
  background("#E8C7C8")
  stroke(0);
  fill(0);
  //TOP
  rect(0,0 width,10);
  //LEFT
  rect(0,0,10,height);
  //BOTTOM
  rect(0, height-10,width,10);
  //RIGHT
  rect(width-10,0,10,height-50);
}

//exit
textsize(24);
text("Goodbye" , width-75, height-75)

//character
fill(23,40,123)
circle(characterX, characterY, 25);

//keys
if(keyisdown(w))
{
  characterY -=10;
}
if(keyisdown(s))
{
  characterY +=10;
}
if(keyisdown(a)
{
  characterX -=10;
}
if(keyisdown(d))
{
  characterX +=10;
}

//empty
fill(13,145,14)
//shape
circle(shapeX,shapeY,10);

//random when start
shapeXspeed = math.floor(math.random() *(math.floor(math.random() *5)) +1);
shapeYspeed = math.floor(math.random() * (math.floor(math.random() *5)) +1);

//movement
shapeX +=shapeXspeed;
shapeY +=shapeYspeed;

//check out of bounds
if(shap X> width)

{
  shapeX=0;
}
if(shapeX<0)
{
  shapeX=width;
}
if(shapeY> height)
{
  shapeY=0;
}
if(shapeY<0)
{
  shapeY= height;
}

//see if character has left exit
if (characterX > width && characterY >width-55)
{
  fill(0);
  stroke(5);
  textsize(24);
  text("Yay winner", width/2-50, height/2-50);

}

//create shape based on Mouse
fill (120,130,140);
circle(mouseshapeX, mouseshapeY, 25);
}
function mouseclicked()
{
  mouseshapeX= mouseX;
  mouseshapeY= mouseY;
}
/*
function keypressed() {
  if (keycode == right_arrow){
    characterX -=10;
  }
  else if (keycode === right_arrow){
    characterX +=10;
  }
  else if (keycode === up_arrow){
    characterY -=10;
  }

}
*/
