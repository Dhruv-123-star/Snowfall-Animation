var c1, c2, snowball, snow;

var c1ImgStand, c1ImgWalk, c1Jump, c2ImgHit, c2ImgLaugh, snowballImg, snowImg;

var bgImg;

function preload() {
 c1ImgStand = loadImage("girlWalking2.png");
 c1ImgWalk = loadAnimation("girlWalking1.png", "girlWalking2.png");
 c1Jump = loadImage("girlJumping.png");
 c2ImgHit = loadImage("boyhitting.png");
 c2ImgLaugh = loadImage("boylaughing.png");
 snowImg = loadImage("snow4.webp");
 snowballImg = loadImage("Snowball.png");
 bgImg = loadImage("snow1.jpg"); 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  c1 = createSprite(230, 630, 50, 50);
  c2 = createSprite(1400,630,50,50);
  snowball = createSprite(1557,585,10,10);

  c1.addAnimation("walk", c1ImgWalk);
  c1.scale = 0.7;
  c2.addImage("hit", c2ImgHit);
  c2.scale = 0.6;
  snowball.addImage("ball", snowballImg);
  snowball.scale = 0.08;
  snowball.lifeTime= 345;
}

function draw() {
  background(bgImg);
  console.log(mouseX , mouseY);

  c1.debug = true;

  if(keyDown("RIGHT_ARROW")) {
     c1.x = c1.x+5;
  }

  if(keyDown("LEFT_ARROW")) {
    c1.x = c1.x-5;
 }

  if(keyDown("space")) {
    snowball.velocityX = -20;
  }

  if(snowball.isTouching(c1)) {
    snowball.visible = false;
    c2.changeImage("laugh", c2ImgLaugh);
  }
  textSize(30);
  fill('skyBlue');
  text("Press the arrow keys to move the girl", 1150,80);


  textSize(30);
  fill('blue');
  text("Press the 'Spacebar' to throw the snowball", 1110, 125);

  drawSprites();
}