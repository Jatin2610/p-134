img = "";

function preload(){
img = loadImage("babysleeping picture.jpg");
}

function setup() {
    canvas = createCanvas(640, 320);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 560);
    fill("#FF0000");
    text("person 99%", 45, 75);
    noFill();
    stroke("#FF0000");
    rect( 30, 60, 450, 320 );
}