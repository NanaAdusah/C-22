const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;

var ball;

function setup() {
  var canvas = createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(300,580,600,20,ground_options);
  World.add(world,ground);
  console.log(ground.position.x);

  var ball_options = {
    restitution: 1.0
  }
  ball = Bodies.circle(300,300,20,ball_options);
  World.add(world,ball);
}



function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}