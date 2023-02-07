
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.8,
    frictionAir:0.03
  }
   var rock_properties={
    restitution: 1
   };
   var ground_options ={
     isStatic: true
   };

  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rock= Bodies.circle (200,100,30,rock_properties);
  World.add(world,rock);

  wall= Bodies.rectangle(200,190,200,20,ground_options);
  World.add(world,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,20);
  fill ("blue");
  rect(ground.position.x,ground.position.y,400,20);
  fill("yellow");
 ellipse(rock.position.x,rock.position.y,30);
 fill("brown");
rect(wall.position.x,wall.position.y,200,20);
}

