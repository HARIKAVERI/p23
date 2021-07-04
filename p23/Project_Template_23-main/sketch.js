const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var computerBase;
var player;
var computerplayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	playerBase = new PlayerBase(300,random(450,height-100),180,150)
   //Create Player Base and Computer Base Object
computerBase = new ComputerBase(600,playerBase.body.position.y,180,150)
player = new Player(playerBase.body.position.x,playerBase.body.position.y - 300,100,300)
computerplayer=new ComputerPlayer(computerBase.body.position.x,computerBase.body.position.y-300,100,300)
 }

function draw() {

  background(180);

  Engine.update(engine);
playerBase.display();
computerBase.display();
player.display()
computerplayer.display()

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
