var car, wall;
var speed, weight;

function setup() {
  speed = random(55,90);
  weight = random(400,1500);
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
 wall = createSprite(750, 200, 60, height/2);
}

function draw() {
  background('255,255,255'); 
 car.velocityX = speed;
  
  if(wall.x-car.x<(car.width+wall.width/2)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation<100){
      car.shapeColor = 'green';
    }
    if(deformation<100 && deformation>100){
     car.shapeColor = 'green';
    }
    if(deformation>100){
     car.shapeColor = 'red';
    }
  }
  drawSprites();
}