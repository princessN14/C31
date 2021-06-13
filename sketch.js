var string = "this is coding";
console.log(string);
var number = 100;
console.log(number);
var boolean = true;
console.log(boolean); 
var object;
console.log(object);
object=null; 
console.log(object);
var array1=[1,2,3,4,5];
console.log(array1[0]);
console.log(array1);
var array2=["name",12,true];
console.log(array2); 
var array3=[[1,2],[3,4],[3,4],[4,5]];
console.log(array3);
console.log(array3[0]);
console.log(array3[0][1]);
array3.push("my name");
console.log(array3);
array3.pop();
console.log(array3);
var arr=[1,12,3,14,5]
console.log(arr);
var arr2=[[1,0,12],[7,-3,2],[-5,2,1]]
console.log(arr2[0][1]);
arr.push(9);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

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

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
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
    platform.display();
    //log6.display();
    slingshot.display();    
}


function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   // }
}


function mouseReleased(){
    slingshot.fly();
   // gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }}
