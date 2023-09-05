var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var b1,b2
let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var options = {
  restitution: 1
 }
 ball = Bodies.circle(200,200,10,options)
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  b1 = createImg("up.png")
  b2 = createImg ("right.png")
  b1.size(50,50)
  b2.size(50,50)
  b1.position(20,20)
  b2.position(100,20)
  b1.mouseClicked(vforce)
  b2.mouseClicked(hforce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}
function hforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0,})
}
function vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
}
