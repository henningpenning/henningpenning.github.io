var bird;
var pipes = [];
var frameCount = 100;
var screenWidth = document.documentElement.clientWidth;
var score = 0;
var screenHeight = document.documentElement.clientHeight;
function setup() {
    createCanvas(screenWidth,screenHeight)
    bird = new Bird();

    pipes.push(new Pipe()); 
}    

function draw() {
   background(0);
   showScore();

   for (var i = pipes.length-1; i >= 0; i--) {    
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].hits(bird)) {
            background(255, 0, 0);
            score = 0;
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);

        }  
    }

   bird.update(); 
   bird.show();

    if (frameCount % 100 == 0) {    
        pipes.push(new Pipe());
        score = score + 1;
    }   
}

function touchStarted() { 
    bird.up(); 
} 

function mouseClicked() { 
    bird.up(); 
} 

function keyPressed() {
    if(key == ' ') {
        bird.up();
    }
}

function showScore() {
    fill(255);
    textSize(100);
    text(score,100,100);
    
}