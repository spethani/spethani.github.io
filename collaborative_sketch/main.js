

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAEJbZRK5d_knfBuPn8Ffgqtqh_DrUGV1g",
    authDomain: "collaborative-sketch-9d089.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-9d089.firebaseio.com",
    storageBucket: "collaborative-sketch-9d089.appspot.com",
    messagingSenderId: "209188409933"
  };
  firebase.initializeApp(config);

var.pointsData=firebase.database().ref();

var points=[];

function setup() {
  var canvas=createCanvas(400,400);
  background(255);
  fill(0);
  
  pointsData.on("child_added", function (point)) {
    points.push(point.val());
  }
  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(drawPointIfMousePressed);
}
function draw() {
  background(255);
  
  for(var i=0; i<points.length; i++) {
    var point=points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}

function drawPoint() {
  pointsData.push(x: mouseX, y: mouseY);
}
