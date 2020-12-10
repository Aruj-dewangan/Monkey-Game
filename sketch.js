
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   monkey = createSprite(80,315,20,20);
  
  ground = createSprite(400,350,900,10);
  console.log(ground.x);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  score = 0;
  survivalTime = 0;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  

  
}


function draw() {
  background(255);
  
  if(gameState === PLAY) {
    
    ground.x = ground.width/2;
    ground.velocityX = -6;
    
     if(monkey.isTouching(FoodGroup)) {
    FoodGroup.destroyEach();
   }
    
    if(monkey.isTouching(obstacleGroup)) {
    gameState = END;
   }
    
    if (keyWentDown("space")) {
    monkey.y = 200;
  }
  
  if (keyWentUp("space")) {
    monkey.y = 315;
  }
    
    
    
    
  
  
  stroke("white")
  textSize(20);
  fill("white");
  text("score" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.round(frameCount/frameRate())
  text("Survival Time:" + survivalTime,100,50);
    
  
 
  
  banana();
  obstacle();
     
  }else if(gameState === END){
    
    ground.velocityX = 0;
    
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
     stroke("white")
  textSize(20);
  fill("white");
  text("score" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.round(frameCount/frameRate())
  text("Survival Time:" + survivalTime,100,50);
    
           
  }
  
 
  drawSprites();


  
}

function banana() {
  
   
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(400,200,40,10);
    banana.y = Math.round(random(200,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    
    banana.lifetime = 200;
  
    FoodGroup.add(banana);
  }
}

function obstacle() {
  
  if (frameCount % 120 === 0) {
    var obstacle = createSprite(400,330,40,10);
    obstacle.y = Math.round(random(330,330));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    
    obstacle.lifetime = 200;
  
    obstacleGroup.add(obstacle);
  }
  
}











