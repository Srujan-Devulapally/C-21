


var fixedRect, movingRect,glass;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  glass=createSprite(200, 200, 20, 20)
  glass.shapeColor="blue"
}

function draw() 
{
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow";
}else if(isTouching(movingRect,glass)){
  movingRect.shapeColor="pink"
  glass.shapeColor="pink"
}else  {glass.shapeColor="blue"
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}


  
  drawSprites();
}

