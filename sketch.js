const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var engine;
var world;

var hero, building;
var ground, jewel;

var gameState = "serve";


function setup() {
  createCanvas(1200, 800);

  engine = Engine.create();
  world = engine.world;

  hero = new Hero(1052, 548, 70, 50);
  hero.scale = 0.08;

  ground = new Ground(9, 772, 30, 20);

  jewel = new Jewel(526, 541, 50, 30);
  jewel.scale = 0.3;

  building = new Building(697, 322, 30, 70);
  building.scale = 0.4;

  invisibleGround = createSprite(14, 708, 30, 20);
  invisibleGround.visible = false;

  jewelsGroup = new Group();
  buildingsGroup = new Group();
}

function draw() {
  background("black");
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  textSize(20);
  fill("white")
  text("Score: " + score, 1055, 61);

  if (gameState === "serve") {
    textSize(25);
    fill("white");
    text("Press the space key to play", 390, 251);
    if (keyDown("space")) {
      gameState = "play";
    }

  }
  else if (gameState === "play") {
    hero.display();
    ground.display();

    ground.velocityX = 5;
    spawnJewels();

    if (keyDown("space") && hero.isTouching(jewelsGroup)) {
      jewelsGroup.destroyEach();
      score = score + 10;
    }
    if (keyDown("UP_ARROW") && hero.isTouching(buildingsGroup)) {
      buildingsGroup.destroyEach();
      score = score + 5;
    }
  }
  else if (gameState === "end") {

  }

  hero.display();
  ground.display();
  jewel.display();
  building.display();

  drawSprites();
}