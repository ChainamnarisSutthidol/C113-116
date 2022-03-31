noseX=0;
noseY=0;

function preload(){
    mustache=loadImage('https://i.postimg.cc/CLZK3DS6/handlebar-mustache-png.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);

    image(mustache,noseX,noseY,225,150);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is intialized');
}