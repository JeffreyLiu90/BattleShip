const convertToNumbers = require("../helperFunctions/convertToNumbers");
const boundaryChecker = require("../helperFunctions/boundaryChecker");

const positionChecker = (ship, length, boundary) => {
  if (convertToNumbers(ship.startingPoint[0]) > boundary.y) {
    throw new Error(
      "The first position cannot be larger than the boundary size"
    );
  }

  const startingPosition = convertToNumbers(ship.startingPoint);

  if (startingPosition.length > 3) {
    throw new Error("Invalid position");
  }
  const direction = ship.position;

  const arr = [];

  const firstLetter = convertToNumbers(ship.startingPoint[0]);

  if (direction === "Vertical" && startingPosition.length === 2) {
    let counter = parseInt(startingPosition[1]);
    for (let i = 0; i < length; i++) {
      let firstNum = startingPosition[0];
      let secondNum = counter;
      boundaryChecker(firstNum, secondNum, boundary);
      arr.push(firstNum + "," + secondNum);
      counter += 1;
    }
  } else if (
    direction === "Vertical" &&
    startingPosition.length === 3 &&
    firstLetter.length === 2
  ) {
    let counter = parseInt(startingPosition[2]);
    for (let i = 0; i < length; i++) {
      let firstNum = startingPosition[0] + startingPosition[1];
      let secondNum = counter;
      boundaryChecker(firstNum, secondNum, boundary);
      arr.push(firstNum + "," + secondNum);
      counter += 1;
    }
  }
  //First position is 10
  else if (
    direction === "Vertical" &&
    startingPosition.length === 3 &&
    firstLetter.length === 1
  ) {
    let counter = parseInt(startingPosition[1] + startingPosition[2]);
    for (let i = 0; i < length; i++) {
      let firstNum = startingPosition[0];
      let secondNum = counter;
      boundaryChecker(firstNum, secondNum, boundary);
      arr.push(startingPosition[0] + "," + counter);
      counter += 1;
    }
  }

  //if its a position with just two single digit values
  if (direction === "Horizontal" && startingPosition.length === 2) {
    let counter = parseInt(startingPosition[0]);
    for (let i = 0; i < length; i++) {
      let firstNum = counter;
      let secondNum = startingPosition[1];
      boundaryChecker(firstNum, secondNum, boundary);
      arr.push(counter + "," + secondNum);
      counter += 1;
    }
    //if the first position value is a double digit
  } else if (
    direction === "Horizontal" &&
    startingPosition.length === 3 &&
    firstLetter.length === 2
  ) {
    let counter = parseInt(startingPosition[0] + startingPosition[1]);
    for (let i = 0; i < length; i++) {
      let firstNum = counter;
      let secondNum = startingPosition[2];
      boundaryChecker(firstNum, secondNum, boundary);
      arr.push(counter + "," + secondNum);
      counter += 1;
    }
  } else if (
    direction === "Horizontal" &&
    startingPosition.length === 3 &&
    firstLetter.length === 1
  ) {
    //the first value is single digit, second value is double digit
    let counter = parseInt(startingPosition[0]);
    for (let i = 0; i < length; i++) {
      let firstNum = counter;
      let secondNum = startingPosition[1] + startingPosition[2];
      boundaryChecker(firstNum, secondNum, boundary);
      arr.push(counter + "," + secondNum);
      counter += 1;
    }
  }

  return arr;
};

module.exports = positionChecker;
