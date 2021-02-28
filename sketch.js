var bird;
var pipes = [];
var frameCount = 100;
function setup() {
    createCanvas(400,600)
    bird = new Bird();

    pipes.push(new Pipe()); 
}

function draw() {
   background(0);

   for (var i = pipes.length-1; i >= 0; i--) {    
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].hits(bird)) {
            background(255, 0, 0);
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);

        }
    }

   bird.update(); 
   bird.show();

    if (frameCount % 100 == 0) {    
        pipes.push(new Pipe());
    }

   
}

function keyPressed() {
    if(key == ' ') {
        bird.up();
    }
}