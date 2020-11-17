var fixedRect, movingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(800,400,80,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background("aqua");  
  drawSprites();
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="salmon";
    movingRect.shapeColor="magenta";
  }
  else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  }
}