
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paperObject, paper, groundObject;
var side1, side2, side3, dustbinObject;

function preload()
{
	dustbinObject = loadImage("dustbingreen.png");
	paperObject = loadImage("paper.png")	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperObject = new Paper(100, 590, 100);
	groundObject = new Ground(400, 650, 50, 2050);
	dustbinObject = new Dustbin(750, 660, 200, 200);
	side1 = new Side(505, 540, 10, 190);
	side2 = new Side(600, 630, 180, 10);
	side3 = new Side(695, 540, 10, 190);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperObject.display();
  groundObject.display();
  side1.display();
  side2.display();
  side3.display();
  dustbinObject.display();
  
  
  
  

  

  
  
  
  
  
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:700, y:-700});
		
		
		
	}
}



