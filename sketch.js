var x = 0;
var y = 0;
var speed = 3;

function setup(){
    createCanvas(900,700);
}

function draw(){
    background(247,64,112);
    //I wrote this so background changes to green when clicked 
    if(mouseIsPressed){
        background(90,200,100);
        
    }
   //makes outline white, 6px thick, no color inside shapes
    stroke(255);
    strokeWeight(6);
    noFill();
    
    if(mouseY<150){
        fill(200,100,350);
    }
    else{
        noFill();
    }
    
   
   //this is a circle 
    ellipse(x,200,100,100);
   
    //this code is going to get the circle to move on its own

  
   
      // console.log("CIRCLE IS OFF THE SCREEN!!!")
  // }
  
   x = x + speed;

  if(x>width || x<0){

      console.log("CIRCLE IS OFF THE SCREEN!!")
 speed = speed * -1
  }
  x=x+speed
   console.log(x);
}

 

 