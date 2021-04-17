var bg,bg_img;
var mario,mario_img;
var mushroom,mushroom_img;
var ground,ground_img;
var invisible_ground;
var life,score;

function preload(){
 bg_img=loadImage("backgroumd.png");
 mario_img=loadImage("mario.png");
 mushroom_img=loadImage("mushroom.png");
 ground_img=loadImage("SM.png"); 
}

function setup() {
  createCanvas(700,500);

  bg=createSprite(350,190);
  bg.addImage(bg_img);
  bg.scale=0.5;

  ground=createSprite(690,450);
  ground.addImage(ground_img);

  mario=createSprite(200,340);
  mario.addImage(mario_img);
  mario.scale=0.11
  mario.debug=false;
  mario.setCollider("rectangle",0,0,60,850);

  invisible_ground=createSprite(350,380,700,20);
  invisible_ground.visible=false;

  life=3;
  score=0;
  
}

function draw() {
  background(0,0,0);
  
  //to find the Y position of standing mario
  //console.log(mario.y);
  //ground moves to left and scrolls infinitely
  ground.velocityX=-4;
  if(ground.x<0){
     ground.x=690;
  }
  //mario is controlled by arrow keys
  if(keyDown(RIGHT_ARROW)){
     mario.x=mario.x+3;
  }
  if(keyDown("space") && mario.y>=300){
     mario.velocityY=-8;
  }
  //Gravity effect on mario
  //increasing the velocity(accleration) by 0.8 units in downward direction
  mario.velocityY=mario.velocityY+0.8;
  //mario should stand on invisible ground
  mario.collide(invisible_ground)

  obstacles();
  
  drawSprites();

  //to display the number of lives and score
  textSize(20);
  stroke("red");
  fill("green")
  text("Lives: "+life,20,20);
  text("Score: "+score,600,20);
  //score increases by one unit after every 15 frames
  if(frameCount%15===0){
     score=score+1;
  }
}

function obstacles(){
 //one mushroom will be spawned after every 160 frames
 if(frameCount%160===0){
   mushroom=createSprite(800,340);
   mushroom.addImage(mushroom_img);
   mushroom.debug=false;
   mushroom.velocityX=-2;

   //to spwan obstacles of different sizes
   var s=Math.round(random(1,3));

   switch(s){
      case 1:mushroom.scale=0.1;
            break;
      case 2:mushroom.scale=0.2;
            break;
      case 3:mushroom.scale=0.25;
            break;            

   }

  

 }
}