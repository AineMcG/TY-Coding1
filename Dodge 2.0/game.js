var player; 
var enemy; 
var isGameOver; 
var player;
var playerImage;
var enemy
var enemy2
var enemy3
var enemyImage;
var backgroundImage;
var score;

 
 
 
function gameOver() { 
  background(0); 
  textAlign(CENTER); 
  fill("white"); 
  text("Game Over!", width/2, height/2); 
  text("Click anywhere to try again", width/2, 3*height/4);
  text("Your score was: " + score,width/2, 6*height/6);
} 




 function mouseClicked() {
     if (isGameOver) {
       isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
        enemy2.position.x = width/3;
        enemy2.position.y = 0;
        enemy3.position.x = width/4;
        enemy3.position.y = 0;
        score = 0;
        }
}
 function preload() {
     playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png")
     enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
     backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
     
     
}


function setup() { 
    isGameOver = false; 
    createCanvas(256, 256); 
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy2 = createSprite(width/2, 0, 0, 0);
    enemy3 = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy2.addImage(enemyImage);
    enemy3.addImage(enemyImage)
    enemy.rotationSpeed = 4.0;
    score = 0;
    
} 
 
 
function draw() { 
    if (isGameOver) { 
        gameOver(); 
        
    } else { 
        if (enemy.overlap(player)) { 
            isGameOver = true; 
        } 
        
         if (enemy2.overlap(player)) { 
            isGameOver = true; 
        } 
        
         if (enemy3.overlap(player)) { 
            isGameOver = true; 
        } 
        
        // ...the rest of the draw function 
        background(backgroundImage); 
 
 
        if (keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.width/2))) { 
          player.position.x = player.position.x + 3; 
        } 
 
 
        if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) { 
          player.position.x = player.position.x - 3; 
        } 
 
        enemy.position.y = enemy.position.y + 3;
        enemy2.position.y = enemy2.position.y + 7; 
        enemy3.position.y = enemy3.position.y + 5; 
 
 
        if (enemy.position.y > height) { 
          enemy.position.y = 0; 
          enemy.position.x = random(5, width-5); 
        } 
        
        if (enemy2.position.y > height) { 
          enemy2.position.y = 0; 
          enemy2.position.x = random(5, width-5); 
        } 
        
        if (enemy3.position.y > height) { 
          enemy3.position.y = 0; 
          enemy3.position.x = random(5, width-5); 
        } 
 
 
        drawSprites();    
        
        score = score + 1
        textAlign(CENTER);
        text(score, camera.position.x, 10);
    } 
} 