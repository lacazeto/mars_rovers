//declaring rover
var myRover = {
  position: [0,0],
  direction: 'E',
  symbol: "&#9654"
};

//declaring obstacle
var stone = {
  position: [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1], //create random position for the obstacle, excluding the rover's spawn spot (0,0)
  symbol: "0 "
};

//move rover forward
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if((((rover.position[0] - 1) % 10) + 10) % 10 === stone.position[0] && rover.position[1] === stone.position[1]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[0] = (((rover.position[0] - 1) % 10) + 10) % 10; //move rover, wrapping around the grid case it gets outside
      }
      break;
    case 'E':
      if(((rover.position[1] + 1) % 10) === stone.position[1] && rover.position[0] === stone.position[0]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[1] = (rover.position[1] + 1) % 10;  //move rover, wrapping around the grid case it gets outside
      }
      break;
    case 'S':
      if(((rover.position[0] + 1) % 10) === stone.position[0] && rover.position[1] === stone.position[1]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[0] = (rover.position[0] + 1) % 10  //move rover, wrapping around the grid case it gets outside
      }
      break;
    case 'W':
      if(((((rover.position[1] - 1) % 10) + 10) % 10) === stone.position[1] && rover.position[0] === stone.position[0]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[1] = (((rover.position[1] - 1) % 10) + 10) % 10;  //move rover, wrapping around the grid case it gets outside
      }
      break;
  }
}
  
//move rover backwards
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      if((rover.position[0] + 1) % 10 === stone.position[0] && rover.position[1] === stone.position[1]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[0] = (rover.position[0] + 1) % 10;  //move rover, wrapping around the grid case it gets outside
      }
      break;
    case 'E':
      if((((rover.position[1] - 1) % 10) + 10) % 10 === stone.position[1] && rover.position[0] === stone.position[0]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[1] = (((rover.position[1] - 1) % 10) + 10) % 10;  //move rover, wrapping around the grid case it gets outside
      }
      break;
    case 'S':
      if((((rover.position[0] - 1) % 10) + 10) % 10 === stone.position[0] && rover.position[1] === stone.position[1]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[0] = (((rover.position[0] - 1) % 10) + 10) % 10;  //move rover, wrapping around the grid case it gets outside
      }
      break;
    case 'W':
      if((rover.position[1] + 1) % 10 === stone.position[1] && rover.position[0] === stone.position[0]){ //check if movement is permitted
        console.log("Obstacle on the way. Can't keep going");
      }
      else{
        rover.position[1] = (rover.position[1] + 1) % 10;  //move rover, wrapping around the grid case it gets outside
      }
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
  console.log("Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

//draw grid
function drawGrid() {
  document.write('<div style="padding: 10px 0 0 0;">'); //separate drawn grids apart
  for (var row = 0; row < 10; row++){
    for (var columm = 0; columm < 10; columm++){
      if(myRover.position[0] === row && myRover.position[1] === columm){ //if rover is there positioned, draw it
        document.write("|" + myRover.symbol);
      }
      else if(stone.position[0] === row && stone.position[1] === columm){ //if stone is there positioned, draw it
        document.write("| " + stone.symbol);
      }
      else{
        document.write('| <span style="color: white;">&#743</span> '); //insert a general symbol to make grid width better aligned and make it invisible (white)
      }
    }
    document.write("|" + "<br>"); //end drawing grid line, skip to the next one
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

//main function, executed once user input is submitted
var coordinate;
function execute(){
  var coordinates = document.getElementById("frm1").value;
  drawGrid();
  for(var i = 0; i < coordinates.length; i++){
    coordinate = coordinates[i];
    moveRover(coordinate);
  }
}

//on 1st page load, display grid and roover position
logPosition();
drawGrid();