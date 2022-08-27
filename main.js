nosex=0;
nosey=0;
function preload(){
clownnose=loadImage("https://i.postimg.cc/NMxdTL1f/clownnose-1.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}

function draw(){
image(video,0,0,300,300);
//fill("red");
//stroke("red");
//circle(nosex,nosey,20);
image(clownnose,nosex,nosey,37,37);
}
function take_snapshot(){
    save("mypicture.jpeg");
    
}
function modelLoaded(){
    console.log("MODEL IS LOADED FOREVER HEHEHE - WRITTEN BY ME = SYESHA CHANDHOK HEHEHEHEHEHE");
}
function gotPoses(results){
    if(results.length>0){
nosex=results[0].pose.nose.x-17;
nosey=results[0].pose.nose.y-17;
    
console.log(results);
console.log("nosex "+nosex);
console.log("nosey "+nosey);

}
}