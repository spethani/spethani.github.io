var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;
function preload() {
    playerImage=loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage=loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
}
function setup() {
    createCanvas(250,250);
    player = createSprite(width/2, height-25, 0, 0);
    player.addImage(playerImage);
    
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    isGameOver=false;
    
}

function draw() {

    if(keyDown(LEFT_ARROW) && player.position.x<(width-25)) {
        player.position.x=player.position.x-3;
    }
    if(keyDown(RIGHT_ARROW) && player.position.x>25) {
        player.position.x=player.position.x+3;
    }
    enemy.position.y=enemy.position.y+3;
    if(enemy.position.y>height) {
        enemy.position.y=0;
        enemy.position.x=random(5, width-5);
    }
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
    
    background(0,0,100);
    drawSprites();
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
}
}
function mouseClicked() {
    if(isGameOver) {
  isGameOver = false;
  player.position.x = width/2;
  player.position.y = height-25;
  enemy.position.x = width/2;
  enemy.position.y = 0;
    }
}