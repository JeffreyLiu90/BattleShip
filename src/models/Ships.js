class Ships {
  constructor(boundary, positions) {
    this.boundary = boundary;
    this.positions = positions;
  }

  static create(boundary, ships) {
    //function to convert strings to numbers based on index position
    function convertToNumbers(str) {
      const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      return str.replace(/[a-z]/gi, function(m) {
        return letters.indexOf(m.toLowerCase()) + 1;
      });
    }

    const shipPositionsFinal = [];

    //to check for duplicates
    const duplicatesFilteredShips = [...new Set(ships)];

    if (ships.length !== duplicatesFilteredShips.length) {
      throw new Error("Ships cannot overlap each other on the board");
    }

    // function to check whether ships adhere to boundary size
    const boundaryChecker = (firstNum, secondNum, boundary) => {
      if (firstNum < 1 || secondNum < 1) {
        throw new Error(
          "The position of the ship cannot be off the board's minimum size"
        );
      } else if (firstNum > boundary.x || secondNum > boundary.y) {
        throw new Error(
          "The ship position cannot be off the board's maximum size"
        );
      }
    };

    // check whether ships are within boundary size, and then if so return in correct format
    const initialShipPositions = ships.map(num => {
      if (num.length === 3) {
        const firstNum = num[0];
        const secondNum = num[1] + num[2];
        boundaryChecker(firstNum, secondNum, boundary);
        return `${convertToNumbers(num[0])},${num[1]}${num[2]}`;
      } else {
        const firstNum = num[0];
        const secondNum = num[1];
        boundaryChecker(firstNum, secondNum, boundary);
        return `${convertToNumbers(num[0])},${num[1]}`;
      }
    });

    //To separate all the ships into into array of arrays
    while (initialShipPositions.length > 0) {
      shipPositionsFinal.push(initialShipPositions.splice(0, 1));
    }

    return new Ships(boundary, shipPositionsFinal);
  }
}

module.exports = Ships;
