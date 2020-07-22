var ground,paperBall,dustbin;
var engine,world;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
engine = Engine.create();
world = engine.world;
createCanvas(1600,700);
	ground = new Ground(width/2,620,width,20); 
	paperBall = new Paper(200,450,70);
	dustbin = new dustBin(1200,650);
	Engine.run(engine);
}
function draw(){
background("white");
ground.display();
paperBall.display();
dustbin.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-145});
	}
}
										



















