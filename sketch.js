var fixedRect, movingRect;


function setup()
{
  createCanvas(1200,800);

  

  movingRect=createSprite(600,400,50,50);
  movingRect.shapeColor="green";
  movingRect.debug = true;

  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  
 



 
  
}

function draw() 
{
  background("pink");  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x);


  if(movingRect.x-fixedRect.x<fixedRect.width/2 +movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2 +movingRect.width/2)
  { 

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{

    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }



  drawSprites();
}
