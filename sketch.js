var MrJimmyJoe
var jjimg
var bimg, bsprite
var food = 20;
var gameState = 0;
var s11, s12, s13, s14, s15, s21, s22, s23, s24, s25

function preload()
{
	jjimg = loadImage("jj.jpg");
	bimg = loadImage("bb.jpg");
}

function setup() {
	createCanvas(displayWidth-50, displayHeight-50);
	bsprite = createSprite((displayWidth-50)/2, (displayHeight-50)/2, displayWidth-50, displayHeight-50)
	bsprite.addImage(bimg);
	bsprite.scale = 3;
	MrJimmyJoe = createSprite(displayWidth/2-50, displayHeight/2-50, 50, 50);
	MrJimmyJoe.addImage(jjimg);
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (food === 0){
	  clear();
	  gameState = 1;
  }

  if (gameState === 1){
	  createCanvas(displayWidth-50, displayHeight-50);
	  background(230, 230, 230);
	  MrJimmyJoe.visible = false;
	  s11 = createSprite(50, 50, 25, 25);
	  s12 = createSprite(50, 200, 25, 25);
	  s13 = createSprite(50, 350, 25, 25);
	  s14 = createSprite(50, 500, 25, 25);
	  s15 = createSprite(50, 650, 25, 25);

	  s21 = createSprite(displayWidth-100, 50, 25, 25);
	  s22 = createSprite(displayWidth-100, 200, 25, 25);
	  s23 = createSprite(displayWidth-100, 350, 25, 25);
	  s24 = createSprite(displayWidth-100, 500, 25, 25);
	  s25 = createSprite(displayWidth-100, 650, 25, 25);

	  if(mouseX === s11.x || mouseY === s11.y){
		s11.x = mouseX
		s11.y = mouseY
	}
  }

  drawSprites();
  textSize(25);
  fill("black")
  text("Food Left: " + food, displayWidth/2-120, displayHeight/4);
}

function keyPressed(){
	if(keyCode === 32 && gameState === 0){
		food = food-1;
		MrJimmyJoe.scale = MrJimmyJoe.scale+0.2
	}
}

function mousePressed(){
	
}

function mouseDragged(){

}