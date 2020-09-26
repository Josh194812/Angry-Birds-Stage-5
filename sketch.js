const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,background_image, platform, gametate;
function preload(){
    background_image=loadImage("sprites/bg.png");

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    gamestate=1;


    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(100,300,400,180)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    
  
    sling1 = new slingshot(bird.body,{x:200,y:50});

}

function draw(){
    //console.log(mouseX);
    background(background_image);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    
    bird.display();
    sling1.display();
    platform.display();
}

function mouseDragged(){
    if(gamestate==1){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    gamestate=0;
    sling1.fly();
}
