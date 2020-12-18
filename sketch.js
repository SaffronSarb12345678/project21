
var car,wall
var speed,weight
var df


function setup() {
  createCanvas(600,400);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(500,200,60,height/2);
  wall.shapeColor = "blue"
  car.velocityX= speed;
car.shapeColor= "white"
}

function draw() {
  
  background(0);  
  
  if(wall.x-car.x<wall.width/2 +car.width/2)
   car.velocityX = 0;
{
   df =0.5*weight*speed*speed/22500

   if(df<100){
     car.shapeColor = "green"

   }
   if(df>100 && df<180)
   {
     car.shapeColor = "yellow"
   }

   if(df>180){
     car.shapeColor = "red"
   }
  }
drawSprites();
}                                                   