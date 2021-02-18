const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 760,70,70);
    box2 = new Box(920, 760, 70, 70);
    box3 = new Box(700, 670,70,70);
    box4 = new Box(920, 670, 70, 70);
    box5 = new Box(810, 570, 70, 70);

    pig1 = new Pig(810, 770);
    pig2 = new Pig(810, 680);

    log1 = new Log(810, 720, 300, PI/2);
    log2 = new Log(810, 620, 300, PI/2);
    log3 = new Log(760, 570, 150, PI/6);
    log4 = new Log(870, 570, 150, -PI/6);

    bird1 = new Bird(100, 100); 

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();

    pig1.display();

    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}