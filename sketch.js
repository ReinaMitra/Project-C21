
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(200,300,25,ball_options);
	World.add(world, ball);

	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	groundObj = new Ground(width/2, 580, width,20);
	leftSide = new Ground(450, 530, 20, 80);
	rightSide = new Ground(600, 530,20,80);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,25,25);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0.10});
		console.log(true);
	}
}



