const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dartMonkey, dartMonkeyImg;
var dart, dartImg;
var backgroundMap, backgroundMapImg;
var redBloon, redBloonImg;

let engine;
let world;

function preload() {
  dartMonkeyImg = loadImage("dart_monkey.png")
  dartImg = loadImage("monkey_dart.png")
  backgroundMapImg = loadImage("background.jpg")
  redBloonImg = loadImage("red_bloon.png")
}


function setup() {
  createCanvas(1000, 625);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
  redBloon = createSprite(225, 315, 5, 5)
  redBloon.addImage(redBloonImg)
  redBloon.scale = 0.15

  dart = createSprite(500, 315, 5, 5)
  dart.addImage(dartImg)
  dart.scale = 0.05

  dartMonkey = createSprite(500, 315, 5, 5)
  dartMonkey.addImage(dartMonkeyImg)
  dartMonkey.scale = 0.1

  
}

function draw() 
{
  background(backgroundMapImg);

  if(keyDown("SPACE")){
    dart.velocityX =- 24
  }

  
  Engine.update(engine);

  drawSprites()
  
}

