var balloon,balloonImage1,balloonImage2;
var database,position
var bg
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment

function setup() {
  
  database=firebase.database();
  var lball=database.ref("balloon/position")
lball.on("value",pos,sh)
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

 
    if(keyDown(LEFT_ARROW)){
     writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
     writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
     writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
     writeposition(0,+1);
    }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function writeposition(x,y){
  database.ref("balloon/position").set({
      x:balloon.x+x,
      y:balloon.y+y

  })
}
function pos(data){
position=data.val()
balloon.x=position.x
balloon.y=position.y
}
function sh(){
  console.log("1")   
 }
