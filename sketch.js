var bird;
var pipes = [];
var frameCount = 100;
var screenWidth = document.documentElement.clientWidth;
var score = 0;
var screenHeight = document.documentElement.clientHeight;
var mode;
var highestScore = 0;

function setup() {
    mode = 0;
    createCanvas(screenWidth,screenHeight)

    bird = new Bird();

    pipes.push(new Pipe()); 
}    

function draw() {
   background(0);

   if (mode==0) {   
    fill(255);
    textSize(100);
    text(`press anything`,width/4,height/2);  
    if(highestScore != 0) {
        fill(255);
        textSize(80);
        text(`highscore: ${highestScore}`,width/4,(height/2) + 100);  
        score = 0;
    }
    

   } else {
        showScore();

        for (var i = pipes.length-1; i >= 0; i--) {    
                pipes[i].show();
                pipes[i].update();
                if (pipes[i].hits(bird)) {
                    background(255, 0, 0);
                    mode=0; 
                    pipes = [];
                    
                    if(highestScore < score) {
                        highestScore = score;
                    }
                    score = 0;
                    break;
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
}

function touchStarted() { 
    bird.up(); 
    mode = 1;
} 

function mouseClicked() { 
    bird.up(); 
    mode = 1;
} 

function keyPressed() {
    if(key == ' ') {
        mode = 1;

        bird.up();
    }
}

function showScore() {
    fill(255);
    textSize(100);
    text(score,100,100);
}