const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;  

var dustbinObj,groundObj, paperObj	
var world;
var bin, binImg,invisibleObj;

function preload(){

	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	//using the different classes
	groundObj=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj = new paper(200,300,10);	

	Engine.run(engine);

	//creating the bin sprite to add image to it
	bin=createSprite(1200,535,20,20);
	bin.addImage(binImg);
	bin.scale=0.7;

	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  //displaying the bodies
  groundObj.display();
  dustbinObj.display();
  paperObj.display();

  drawSprites();
}

function keyPressed(){
	//force applied when up arrow is pressed
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:22,y:-22 })
	}
}
