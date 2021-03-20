var canvas;
var music;
var block1 , block2 , block3 , block4 ;
var ball , edges ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    block1 = createSprite(0,580,360,30); block1.shapeColor = rgb(0,0,255);
    block2 = createSprite(295,580,200,30); block2.shapeColor = "green";
    block3 = createSprite(515,580,200,30); block3.shapeColor = "red";
    block4 = createSprite(750,500,200,30); block4.shapeColor = "yellow";
    //create 4 different surfaces



    //create box sprite and give velocity
     ball = createSprite(random(20,750),100,40,40)
     ball.shapeColor = "blue";
     ball.velocityX = 4;
     ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1))
    {
         ball.shapeColor = rgb(0,0,255); music.play();
         } 
         if(block2.isTouching(ball))
         {
              ball.shapeColor = "green"; ball.velocityX = 0; 
              ball.velocityY = 0;
               music.stop();
             }
              if(block3.isTouching(ball) && ball.bounceOff(block3))
              {
                   ball.shapeColor ="red";
                 } 
                 if(block4.isTouching(ball) && ball.bounceOff(block4))
                   { 
                       ball.shapeColor = "yellow";
                     }


drawSprites() ;


    //add condition to check if box touching surface and make it box
}
