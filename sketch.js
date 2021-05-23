const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var engine;
var world;

var hero, building;
var ground, jewel;


function setup() {
  createCanvas(1200, 800);

  engine = Engine.create();
  world = Engine.world;

  hero = new Hero(1052, 548, 70, 50);
  ground = new Ground(9, 772, 30, 20);
  jewel = new Jewel(526, 541, 50, 30);
  building = new Building(697, 322, 30, 70);
}

function draw() {
  background("black");
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  drawSprites();
}