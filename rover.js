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
      rover.symbol = "&#9650"
      break;
    case 'E':
      rover.position[1]++
      rover.symbol = "&#9654"
      break;
    case 'S':
      rover.position[0]--
      rover.symbol = "&#9660"
      break;
    case 'W':
      rover.position[1]--
      rover.symbol = "&#9664"
      break;
  }
}
  
//move rover backwards
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      rover.symbol = "&#9650"
      break;
    case 'E':
      rover.position[1]--
      rover.symbol = "&#9654"
      break;
    case 'S':
      rover.position[0]++
      rover.symbol = "&#9660"
      break;
    case 'W':
      rover.position[1]++
      rover.symbol = "&#9664"
      break;
  }
}

//turn rover right
function turnRight(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }
}

//turn rover left
function turnLeft(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  }
}

console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");

//draw grid
function drawGrid() {
  for (var row = 0; row < 10; row++){
    for (var columm = 0; columm < 10; columm++){
      if(myRover.position[0] === row && myRover.position[1] === columm){ //if rover is there positioned, draw it
        document.write("|" + myRover.symbol);
      }
      else{
        document.write("| &#5867 ");
      }
    }
    document.write("|" + "<br>");
  }
}

drawGrid();

//point and move rover
function moveRover(event){
  if (event.keycode === 70){ //key "f"
    goForward(myRover);
  }
  else if (event.keycode === 66){ //key "b"
    goBackward(myRover);
  }
  else if (event.keycode === 82){ //key "r"
    turnRight(myRover);
  }
  else if(event.keycode === 76){ //key "l"
    turnRight(myRover);
  }
  else{
    //listen for a new key press
    moveRover(event); //run function again
  }
}