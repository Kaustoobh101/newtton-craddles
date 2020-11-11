const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var chain;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


    roofs = new Ground(400,100,600,40);
  bob1=new Ball(200,500,50);
  bob2=new Ball(300,500,50);
  bob3=new Ball(400,500,50);
  bob4=new Ball(500,500,50);
  bob5=new Ball(600,500,50);
rope1= new Chain(bob1.body,roof.body,{x:-200,y:0})
rope2= new Chain(bob2.body,roof.body,{x:-100,y:0})
rope3= new Chain(bob3.body,roof.body,{x:0,y:0})
rope4= new Chain(bob4.body,roof.body,{x:100,y:0})
rope5= new Chain(bob5.body,roof.body,{x:200,y:0})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
