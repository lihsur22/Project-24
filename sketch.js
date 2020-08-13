const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var b1, b2, b3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	b1 = new bin(1400,332,200,15);
	b2 = new bin(1308,290,15,100);
	b3 = new bin(1492,290,15,100);

	ball = new Ball(50,200,40);

	ground = Bodies.rectangle(800,350,3200,20,{isStatic:true});
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  fill("yellow");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,2000,20);

  ball.display();

  b1.display();
  b2.display();
  b3.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-65});
  
	}
}