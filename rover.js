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
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  }
}
  
//move rover backwards
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
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
  for (var row = 0; row < 10; row++){
    for (var columm = 0; columm < 10; columm++){
      if(myRover.position[0] === row && myRover.position[1] === columm){ //if rover is there positioned, draw it
        document.write("|" + myRover.symbol);
      }
      else{
        document.write("| <span>&#743</span> ");
      }
    }
    document.write("|" + "<br>");
  }
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
    console.log("Not a valid key. Try again"); 
  }
}

function execute(){
  var coordinates = document.getElementById("frm1").value;
  console.log(coordinates);
  debugger;
  moveRover(coordinates);
}

logPosition();
drawGrid();