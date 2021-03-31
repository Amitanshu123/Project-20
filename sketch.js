
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse1.png","images/mouse2.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(550,550,50,50);
     cat.addImage(catImg1);
     cat.scale = 0.1;
     cat.velocityX = -3;



     mouse = createSprite(150,550,20,20);
     mouse.addImage(mouseImg1);
     mouse.scale = 0.1;
     mouse.debug = true;
     

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("catRunning",catImg2);
       cat.changeAnimation("catRunning");
       cat.debug = true;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
  }
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
 }


}
