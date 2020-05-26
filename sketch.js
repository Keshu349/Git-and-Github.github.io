var bullet;
var wall;
var speed;
var weight;
var thickness;
var Damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "blue";
  weight = random(400,1500);
  speed = random(30,52);
  thickness = random(5,10);
  bullet.velocityX = speed;
}

function draw() {
  background("pink"); 
  if(hasCollided(bullet,wall)){ 
    bullet.velocityX = 0;
   Damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(Damage>10){
      bullet.shapeColor = color("red");
    }
    
    if(Damage<10){
      car.shapeColor = color("green");
    }
    
  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}