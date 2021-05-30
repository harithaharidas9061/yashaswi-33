var backgroundImg;
var snow1,snow2,snow3,snow4,snow5,snow6;
var snowImg,snow2Img,snow3Img,snow4Img,snow5Img,snow6Img;







function preload(){
  backgroundImg=loadImage("snow3.jpg");
  snowImg = loadAnimation("snow25.png","Snow7.png");

  
}

function setup() {
  createCanvas(800,400);
  
  snow1 = createSprite(500,300,20,20); 
  snow1.addAnimation("s",snowImg); 
  snow1.scale = 0.2;

  snow2 = createSprite(100,200,15,15);
  snow2.addAnimation("s",snowImg);
  snow2.scale = 0.2;

  snow3 = createSprite(200,50,20,20);
  snow3.addAnimation("s",snowImg);
  snow3.scale =0.2;

  snow4 = createSprite(500,100,20,20);
  snow4.addAnimation("s",snowImg);
  snow4.scale=0.2;

  snow5 = createSprite(500,400,20,20);
  snow5.addAnimation("s",snowImg);
  snow5.scale=0.2;

  snow6 = createSprite(250,350,20,20);
  snow6.addAnimation("s",snowImg);
  snow6.scale=0.2;
}

function draw() {
  background(backgroundImg);
    

  drawSprites();
  }
