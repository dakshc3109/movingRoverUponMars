var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var nasa_mars_image_array = ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
var random_number = Math.floor(Math.random() * 4)

console.log(random_number);

var rover_width = 100;
var rover_height = 90;

var rover_x = 10;
var rover_y = 10;

//var background_image = "mars.jpg";

var background_image = nasa_mars_image_array[random_number];
var rover_image = "rover.png";

console.log(background_image);

var background_imgTag = new Image();
var rover_imgTag = new Image();

function add(){
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >= 0){
       rover_y = rover_y - 10;
       console.log("when up arrow is pressed"+" x = "+rover_x+" y = "+rover_y);
       uploadBackground();
       uploadRover();
    }
}

function down(){
    if(rover_y <= 500){
       rover_y = rover_y + 10;
       console.log("when up arrow is pressed"+" x = "+rover_x+" y = "+rover_y);
       uploadBackground();
       uploadRover();
    }
}

function left(){
    if(rover_x >= 0){
       rover_x = rover_x - 10;
       console.log("when up arrow is pressed"+" x = "+rover_x+" y = "+rover_y);
       uploadBackground();
       uploadRover();
    }
}

function right(){
    if(rover_x <= 700){
       rover_x = rover_x + 10;
       console.log("when up arrow is pressed"+" x = "+rover_x+" y = "+rover_y);
       uploadBackground();
       uploadRover();
    }
}