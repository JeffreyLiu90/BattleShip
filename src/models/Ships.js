const boundaryChecker = require("../helperFunctions/boundaryChecker");
const convertToNumbers = require("../helperFunctions/convertToNumbers");

class Ships {
  constructor(boundary, positions) {
    this.boundary = boundary;
    this.positions = positions;
  }

  static create(
    boundary,
    destroyer2,
    carrier2,
    battleship2,
    cruiser2,
    submarine2
  ) {
    const ships = destroyer2.concat(
      carrier2,
      battleship2,
      cruiser2,
      submarine2
    );

    const duplicatesFilteredShips = [...new Set(ships)];

    if (ships.length !== duplicatesFilteredShips.length) {
      throw new Error("Ships cannot overlap each other on the board");
    }

    const shipPositionsFinal = ships.map(ship => {
      if (ship.length === 3) {
        const firstNum = convertToNumbers(ship[0]);
        const secondNum = ship[1] + ship[2];
        boundaryChecker(firstNum, secondNum, boundary);
        return ship;
      } else {
        const firstNum = convertToNumbers(ship[0]);
        const secondNum = ship[1];
        boundaryChecker(firstNum, secondNum, boundary);
        return ship;
      }
    });

    return new Ships(boundary, shipPositionsFinal);
  }
}

module.exports = Ships;
