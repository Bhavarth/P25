
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

	//Create the Bodies Here.
	bin1 = new Bin(600,540)
	paperObject = new Paper(100,650,15)
console.log(paperObject)
	ground= new Ground(400,680,800,10)
	
	console.log(bin1)
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
  
  paperObject.display();
  ground.display();
  bin1.display();
  
  //drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 32, y:-47});
}
if (keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 0, y:2});
}

}

