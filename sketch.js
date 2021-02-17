const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1,ball1,rope1;

var box11,box12,box13,box14,box15,box16,box17;

var box21,box22,box23,box24,box25,box26;

var box31,box32,box33,box34,box35;

var box41,box42,box43,box44;

var box51,box52,box53;

var box61,box62;

var box71;

function preload() {
    backgroundImg = loadImage("backgroundDaytime.jpg");
    timeb();
}

function setup(){
    var canvas = createCanvas(1275,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(800,500,500,20)

    box11 = new box(650,470,50,50);
    box12 = new box(700,470,50,50);
    box13 = new box(750,470,50,50);
    box14 = new box(800,470,50,50);
    box15 = new box(850,470,50,50);
    box16 = new box(900,470,50,50);
    box17 = new box(950,470,50,50);

    box21 = new box(675,415,50,50);
    box22 = new box(725,415,50,50);
    box23 = new box(775,415,50,50);
    box24 = new box(825,415,50,50);
    box25 = new box(875,415,50,50);
    box26 = new box(925,415,50,50);

    box31 = new box(700,360,50,50);
    box32 = new box(750,360,50,50);
    box33 = new box(800,360,50,50);
    box34 = new box(850,360,50,50);
    box35 = new box(900,360,50,50);

    box41 = new box(725,305,50,50);
    box42 = new box(775,305,50,50);
    box43 = new box(825,305,50,50);
    box44 = new box(875,305,50,50);

    box51 = new box(750,250,50,50);
    box52 = new box(800,250,50,50);
    box53 = new box(850,250,50,50);

    ball1 = new ball(300,300,75,75);

    rope1 = new rope(ball1.body,{x:300,y:300})
}

function draw(){
  background(backgroundImg);
  
  ground1.display();

  ball1.display();
  rope1.display();

  fill("pink");
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  fill("orange");
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  fill("yellow");
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();

  fill("green");
  box41.display();
  box42.display();
  box43.display();
  box44.display();

  fill("blue");
  box51.display();
  box52.display();
  box53.display();
    
 Engine.update(engine);
}

function mouseDragged(){
 Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 rope1.fly();
}

function keyPressed(){
if(keyCode === 32)
 rope1.attached(ball1.body);
}

async function timeb(){
    var respone = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var rejson = await respone.json();
    console.log(rejson);
    var date = rejson.datetime;
    console.log(date);
    var time = date.slice(11,13);
    console.log(time);
    if(time>=6&& time<=16){
     bg = "backgroundDaytime.jpg";
    }else{
     bg = "backgroundNight.jpg";
    }
    backgroundImg = loadImage(bg);
  }