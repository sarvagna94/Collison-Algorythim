var fixed, moving
function setup() {
  createCanvas(1200,800);
  fixed=createSprite(200, 200, 50, 80);
  moving=createSprite(400,200,80,30)
  fixed.shapeColor="green"
  moving.shapeColor="green"
  fixed.debug= true;
  moving.debug=true;
}

function draw() {
  background(0); 
  moving.x=World.mouseX
  moving.y =World.mouseY 
  if(moving.x-fixed.x < fixed.width/2+moving.width/2 &&
    fixed.x-moving.x<fixed.width/2+moving.width/2 &&
    moving.y-fixed.y< fixed.height/2+moving.height/2 &&
    fixed.y-moving.y< fixed.height/2+moving.height/2 )
    {
    moving.shapeColor="pink"
    fixed.shapeColor="pink"
  }
else{
  moving.shapeColor="green"
  fixed.shapeColor="green"
}

  drawSprites();
}