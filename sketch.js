var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(100,580,200,20)
box2=createSprite(320,580,200,20)
box3=createSprite(540,580,200,20)
box4=createSprite(760,580,200,20)
ball=createSprite(100,200,60,60)
ball.velocityX=5
ball.velocityY=5


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    box1.shapeColor="pink"
    box2.shapeColor="blue"
    box3.shapeColor="purple"
    box4.shapeColor="orange"

if(box1.isTouching(ball)&&ball.bounceOff(box1)){
    ball.shapeColor="pink"
    music.play();
}


if(box2.isTouching(ball)&&ball.bounceOff(box2)){
    ball.shapeColor="blue"
    ball.velocityX=0
    ball.velocityY=0
    music.stop();
}


if(box3.isTouching(ball)&&ball.bounceOff(box3)){
    ball.shapeColor="purple"
}


if(box4.isTouching(ball)&&ball.bounceOff(box4)){
    ball.shapeColor="orange"
}

    drawSprites();
}
