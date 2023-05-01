var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg; 
var jumpSound; 
var obsTop1Img, obsTop2Img; 
var obsBottom1Img, obsBottom2Img, obsBottom3Img;
var obstaclesTopGroup; 
var obstaclesBottomGroup;

var PLAY = 1; 
var END = 0; 

var gameState; 

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png"); 
jumpSound = loadSound("assets/jump.mp3"); 
obsTop1Img = loadImage("assets/obsTop1.png"); 
obsTop2Img = loadImage("assets/obsTop2.png"); 
obsBottom1Img = loadImage("./assets/obsBottom1.png") 
obsBottom2Img = loadImage ("./assets/obsBottom2.png")
obsBottom3Img = loadImage ("./assets/obsBottom3.png")
}

function setup(){

//Imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//Crear bases superiores e inferiores
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = true;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//Crear globo      
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
balloon.debug= true;  
balloon.setCollider("circle", 0,0);  

console.log(balloon); 

obstaclesTopGroup = new Group(); 
obstaclesBottomGroup =  new Group();

gameState = PLAY; 

}

function draw(){
  
  background(bgImg);      
        
  if(keyDown("SPACE")) {
    balloon.velocityY = -3;     
    console.log("Mensaje space") 
  }
  balloon.velocityY += 0.05;
 
  if(balloon.isTouching(obstaclesTopGroup)){
    console.log("Colisión"); 
  } 

  balloon.collide(bottomGround); 
  spawnTopObstacles(); 
  spawnBottomObstacles();
  drawSprites();
        
}

function spawnTopObstacles(){
  if(frameCount % 100 === 0){
    var rand = Math.round(random(10, 150)); 
    var obstacle = createSprite(400, rand, 50, 50); 
    obstacle.scale = 0.20; 
    obstacle.velocityX = -4; 

    var aleatorio = Math.round(random(1,2)); 
    
    switch(aleatorio){
      case 1: obstacle.addImage(obsTop1Img); 
      break; 
      case 2: obstacle.addImage(obsTop2Img); 
      break; 
      default: 
      break;
    }

    obstaclesTopGroup.add(obstacle); 
    
  }
}
  function spawnBottomObstacles(){
    console.log("Prueba 1")
  
  if(frameCount % 500 === 0){
    console.log("Prueba 2")
    var rand = Math.round(random(150, 300 )); 
    var obstacle1 = createSprite(400, rand, 50, 50); 
    obstacle1.scale = 0.20; 
    obstacle1.velocityX = -4; 

    var aleatorio = Math.round(random(1,3)); 
    
    switch(aleatorio){
      case 1: obstacle1.addImage(obsBottom1Img); 
      break; 
      case 2: obstacle1.addImage(obsBottom2Img); 
      break; 
      case 3: obstacle1.addImage(obsBottom3Img);
      break;
      default: 
      break;
    }

    obstaclesBottomGroup.add(obstacle1); 
    
  }
}
