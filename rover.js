//declare rover
var myRover = {
  position: [0,0],
  direction: 'E',
  symbol: "&#9654"
};

//move rover forward
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0] = (((rover.position[0] - 1) % 10) + 10) % 10
      break;
    case 'E':
      rover.position[1] = (rover.position[1] + 1) % 10
      break;
    case 'S':
      rover.position[0] = (rover.position[0] + 1) % 10
      break;
    case 'W':
      rover.position[1] = (((rover.position[1] - 1) % 10) + 10) % 10
      break;
  }
}
  
//move rover backwards
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0] = (rover.position[0] + 1) % 10
      break;
    case 'E':
      rover.position[1] = (((rover.position[1] - 1) % 10) + 10) % 10
      break;
    case 'S':
      rover.position[0] = (((rover.position[0] - 1) % 10) + 10) % 10
      break;
    case 'W':
      rover.position[1] = (rover.position[1] + 1) % 10
      break;
  }
}

//turn rover right
function turnRight(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      rover.symbol = "&#9654"
      break;
    case 'E':
      rover.direction = 'S'
      rover.symbol = "&#9660"
      break;
    case 'S':
      rover.direction = 'W'
      rover.symbol = "&#9664"
      break;
    case 'W':
      rover.direction = 'N'
      rover.symbol = "&#9650"
      break;
  }
}

//turn rover left
function turnLeft(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      rover.symbol = "&#9664"
      break;
    case 'E':
      rover.direction = 'N'
      rover.symbol = "&#9650"
      break;
    case 'S':
      rover.direction = 'E'
      rover.symbol = "&#9654"
      break;
    case 'W':
      rover.direction = 'S'
      rover.symbol = "&#9660"
      break;
  }
}

//display position in console
function logPosition() {
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

//draw grid
function drawGrid() {
  document.write('<div style="padding: 10px 0 0 0;">');
  for (var row = 0; row < 10; row++){
    for (var columm = 0; columm < 10; columm++){
      if(myRover.position[0] === row && myRover.position[1] === columm){ //if rover is there positioned, draw it
        document.write("|" + myRover.symbol);
      }
      else{
        document.write('| <span style="color: white;">&#743</span> ');
      }
    }
    document.write("|" + "<br>");
  }
  document.write("<div>");
}

//point and move rover
function moveRover(value){
  if (value === "f"){
    goForward(myRover);
    logPosition();
    drawGrid();
  }
  else if (value === "b"){
    goBackward(myRover);
    logPosition();
    drawGrid();
  }
  else if (value === "l"){
    turnLeft(myRover);
    drawGrid();
  }
  else if(value === "r"){
    turnRight(myRover);
    drawGrid();
  }
  else{
    console.log(value + " is not a valid key");
  }
}

var coordinate;
function execute(){
  var coordinates = document.getElementById("frm1").value;
  drawGrid();
  for(var i = 0; i < coordinates.length; i++){
    coordinate = coordinates[i];
    moveRover(coordinate);
  }
}

logPosition();
drawGrid();