
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  var options={
	isStatic:false,
	restitucion:0.3,friction:0,dencity:1.2
	
  }
	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);
	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
rightSide = new ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display()
  leftSide.display()
rightSide.display()
  drawSprites();
 
}



