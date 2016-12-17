var canvas = document.createElement("canvas");
var cntx = canvas.getContext("2d");
canvas.width = 144;
canvas.height = 256;

document.body.appendChild(canvas);

//<!------------background image------------>//

var bgReady = false;
var bgImage = new Image();

bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "background.png" /////////////////////////////////////

//<!----------- bird image-------------->
var birdReady = false;
var birdImage = new Image();

birdImage.onload = function() {
    birdReady = true;
};
birdImage.src = "bird.png"

//<!---------- upper bars---------------->
//first upper
var upperOneBar = false;
var upperOneImage = new Image();

upperOneImage.onload = function() {
    upperOneBar = true;
};
upperOneImage.src = "upper.png";
///////////////////////////////
//second upper

var upperTwoBar = false;
var upperTwoImage = new Image();

upperTwoImage.onload = function() {
    upperTwoBar = true;
};
upperTwoImage.src = "upper.png";
////////////////////////////
//third gear

var upperThreeBar = false;
var upperThreeImage = new Image();

upperThreeImage.onload = function() {
    upperThreeBar = true;
};
upperThreeImage.src = "upper.png";

// <!------ lower bars----------->
//first lower bars

var lowerOneReady = false;
var lowerOneImage = new Image();

lowerOneImage.onload = function() {
    lowerOneReady = true;
};
lowerOneImage.src = "lower.png";

//second lower bar

var lowerTwoReady = false;
var lowerTwoImage = new Image();

lowerTwoImage.onload = function() {
    lowerTwoReady = true;
}
lowerTwoImage.src = "lower.png";

//third lower bar

var lowerThreeReady = false;
var lowerThreeImage = new Image();

lowerThreeImage.onload = function() {
    lowerThreeReady = true;
}
lowerThreeImage.src = "lower.png";

//initial bird
var bird = {
    xspeed: 0,
    yspeed: 0,
    xacer: 0,
    yacer: 200,
    x: 2,
    y: 2,
    score: 0
};

var upper1 = {
    xspeed: -30,
    x: 20,
    y: -100
};

var upper2 = {
    xspeed: -30,
    x: 75,
    y: -50
};

var upper3 = {
    xspeed: -30,
    x: 130,
    y: -70
};

var lower1 = {
    xspeed: -30,
    x: 20,
    y: 150   //150
};

var lower2 = {
    xspeed: -30,
    x: 75,
    y: 135    //135
};

var lower3 = {
    xspeed: -30,
    x: 130,
    y: 160
};

//adding key listeners -------------< look in this snippet later>
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
    f = 0;
}, false);


var reset = function() {
    bird.xspeed = 0;
    bird.yspeed = 0;
    bird.x = 0;
    bird.y = 120;
    bird.score = 0;
};

var f = 0;
var difficulty = -40; /// difficulty level

var update = function(modif) {
    bird.score += modif;
    if (38 in keysDown && f == 0) {
        bird.yspeed = -100;
        f = 1;
    }
    bird.x = bird.x + bird.xspeed * modif;
    bird.y = bird.y + bird.yspeed * modif;
    bird.xspeed += bird.xacer * modif;
    bird.yspeed += bird.yacer * modif;
    upper1.x = upper1.x + upper1.xspeed * modif;
    upper2.x = upper2.x + upper2.xspeed * modif;
    upper3.x = upper3.x + upper3.xspeed * modif;
    lower1.x = lower1.x + lower1.xspeed * modif;
    lower2.x = lower2.x + lower2.xspeed * modif;
    lower3.x = lower3.x + lower3.xspeed * modif;

    if (upper1.x < -25) {
        upper1.y = difficulty + 10 - Math.random() * 50;
        upper1.x = 144;
    }
    if (upper2.x < -25) {
        upper2.x = 144;
        upper2.y = difficulty + 10 - Math.random() * 50;
    }
    if (upper3.x < -25) {
        upper3.x = 144;
        upper3.y = difficulty + 10 - Math.random() * 50;
    }
    if (lower1.x < -25) {
        lower1.y =  - difficulty + 160 - Math.random() * 50;
        lower1.x = 144
    }
    if (lower2.x < -25) {
        lower2.x = 144
        lower2.y = - difficulty + 160 - Math.random() * 50;
    }
    if (lower3.x < -25) {
        lower3.x = 144
        lower3.y =  - difficulty + 160 - Math.random() * 50;
    }
    if (bird.y > 256)
    {
      //document.write(bird.score);
      reset();
    }
    if (upper1.x < 15 && bird.y < upper1.y + 135)
    {
      //document.write(bird.score);
      reset();
    }
    if (upper2.x < 15 && bird.y < upper2.y + 135)
    {
      //document.write(bird.score);
      reset();
    }
    if (upper3.x < 15 && bird.y < upper3.y + 135)
    {
      //document.write(bird.score);
      reset();
    }
    if (upper1.x < 15 && bird.y < upper1.y + 135)
    {
      //document.write(bird.score);
      reset();
    }
    if (upper2.x < 15 && bird.y < upper2.y + 135)
    {
      //document.write(bird.score);
      reset();
    }

    if (upper3.x < 15 && bird.y < upper3.y + 135)
    {
      //document.write(bird.score);
      reset();
    }
    if (lower1.x < 15 && bird.y > lower1.y - 10)
    {
      //document.write(bird.score);
      reset();
    }

    if (lower2.x < 15 && bird.y > lower2.y - 10)
    {
      //document.write(bird.score);
      reset();
    }
    if (lower3.x < 15 && bird.y > lower3.y - 10)
    {
      //document.write(bird.score);
      reset();
    }
};
var render = function functionName() {

    if (bgReady) {
        cntx.drawImage(bgImage, 0, 0);
    }
    if (birdImage) {
        cntx.drawImage(birdImage, bird.x, bird.y);
    }
    if (upperOneBar) {
        cntx.drawImage(upperOneImage, upper1.x, upper1.y);
    }
    if (upperTwoBar) {
        cntx.drawImage(upperTwoImage, upper2.x, upper2.y);
    }
    if (upperThreeBar) {
        cntx.drawImage(upperThreeImage, upper3.x, upper3.y);
    }
    if (lowerOneReady) {
        cntx.drawImage(lowerOneImage, lower1.x, lower1.y);
    }
    if (lowerTwoReady) {
        cntx.drawImage(lowerTwoImage, lower2.x, lower2.y);
    }
    if (lowerThreeReady) {
        cntx.drawImage(lowerThreeImage, lower3.x, lower3.y);
    }
    cntx.fillStyle = "rgb(250,250,250)";
    cntx.font = "24px Helvetica";
    cntx.textAlign = "left";
    cntx.textBaseline = "top";
    cntx.fillText = ("score: " + bird.score, 12, 32);
};

var main = function() {
    var now = Date.now();
    var change = now - then;
    update(change / 1000);
    render();
    then = now;
    requestAnimationFrame(main);
};
var then = Date.now();
reset();
main();
