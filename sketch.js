/*var database;
var numberOfRooms;
var playerCount;
var roomNumber;
var menu,player,game*/

var verticalImg, perpendicularImg, turnImg;
var orientation1 = 'right';

function preload(){
    verticalImg = loadImage('images/horizontalWall.png');
    perpendicularImg = loadImage('images/perpendicularWall.png');
    turnImg = loadImage('images/wallTurn.png');
    plr_right = loadImage('images/plr_right.png');
    plr_left = loadImage('images/plr_left.png');
    plr_up = loadImage('images/plr_up.png');
    plr_down = loadImage('images/plr_down.png');
    plr_upRight = loadImage('images/upRight.png');
    plr_upLeft = loadImage('images/upLeft.png');
    plr_downRight = loadImage('images/downRight.png');
    plr_downLeft = loadImage('images/downLeft.png');
}

function setup(){
    createCanvas(600,600);
    player = createSprite(200,400,10,10);
    player.addImage(plr_right);
    player.scale = 0.2;
    
    wall1 = new Wall(100,230,20,300);
    
    wall2 = new Wall(150,530,300,20);
    
    wall3 = new Wall(200,200,200,20);

    wall4 = new Wall(400,150,20,300);

    wall5 = new Wall(450,400,300,20);

    zombieGroup = new Group();
}

function draw(){
    background(169,132,79);
    imageMode(CENTER);
    angleMode(DEGREES);
    
    movement();
    createBullet();
    spawnZombies();

    drawSprites();
    /*all1.display();
    wall2.display();
    wall3.display();*/

    
}



function movement(){
    if(keyDown(LEFT_ARROW)){
        player.x -= 5;
        player.addImage(plr_left);
        orientation1 = 'left';
    }
    if(keyDown(RIGHT_ARROW)){
        player.x += 5;
        player.addImage(plr_right);
        orientation1 = 'right';
    }
    if(keyDown(UP_ARROW)){
        player.y -= 5;
        player.addImage(plr_up);
        orientation1 = 'up';
    }
    if(keyDown(DOWN_ARROW)){
        player.y += 5;
        player.addImage(plr_down);
        orientation1 = 'down';
    }
    if(keyDown(UP_ARROW)&&keyDown(RIGHT_ARROW)){
        player.addImage(plr_upRight);
        
    }
    if(keyDown(UP_ARROW)&&keyDown(LEFT_ARROW)){
        player.addImage(plr_upLeft);
        
    }
    if(keyDown(DOWN_ARROW)&&keyDown(RIGHT_ARROW)){
        player.addImage(plr_downRight);
        
    }
    if(keyDown(DOWN_ARROW)&&keyDown(LEFT_ARROW)){
        player.addImage(plr_downLeft);
        
    }
    

    
}

function createBullet(){
    if(keyWentDown('space')){
        var positionX;
        var positionY;
        var velocityX;
        var velocityY;
        console.log(orientation1);
        for(var i=0;i<25;i+=5){
            if(orientation1==='right'){
                velocityX = 5;
                velocityY=0;
                positionX = player.x+25;
                positionY = player.y+7;
            }
            if(orientation1 === 'left'){
                velocityX = -5;
                velocityY=0;
                positionX = player.x -25;
                positionY = player.y-7;
                
            }
            if(orientation1 === 'up'){
                velocityY = -5;
                velocityX=0;
                positionX = player.x+10;
                positionY = player.y-20;

            }
            if(orientation1 === 'down'){
                velocityY = 5;
                velocityX=0;
                positionX = player.x-10;
                positionY = player.y+20;

            }

            var bullet = createSprite(positionX,positionY,5,5);
            bullet.velocityX = velocityX;
            bullet.velocityY = velocityY;
            bullet.shapeColor = 'brown';
            
            
            bullet.lifetime = 150;
        }
    }
}

function spawnZombies(){
    if(frameCount%40===0){

        /*var rand = Math.round(random(1,2));

        switch(rand){
            case 1: var zombie = createSprite(300,50,10,10);
                    zombie.shapeColor = 'green';
                    console.log(zombie.y);
                    break;
            case 2:zombie = createSprite(-50,500,10,10);
                   zombie.shapeColor = 'green';
                   zombie.velocityX = random(3,6);
                   break;
        }*/
        
        
       // zombie.velocityX = random(-5,5);
       // zombie.velocityY = random(-5,5);

       // if(zombie.x<-50||zombie.x>650){
         //   zombie.x = random(0,600);
        //}

        var zombie = createSprite(random(0,600),random(0,600),20,20);
        zombie.shapeColor = 'green';

        for(var i=0; i<zombieGroup.length; i++){
            
        }

        if(zombie.x>player.x){
            zombie.x -=2;
        }
        if(zombie.x<player.x){
            zombie+= 2
        }
    }
}