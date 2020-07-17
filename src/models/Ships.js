const boundaryChecker = require("../helperFunctions/boundaryChecker");
const convertToNumbers = require("../helperFunctions/convertToNumbers");
const positionChecker = require("../helperFunctions/positionChecker");

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
    const destroyerLength = 2;
    const carrierLength = 5;
    const battleshipLength = 4;
    const cruiserLength = 3;
    const submarineLength = 3;

    const ships = positionChecker(destroyer2, destroyerLength, boundary).concat(
      positionChecker(carrier2, carrierLength, boundary),
      positionChecker(battleship2, battleshipLength, boundary),
      positionChecker(cruiser2, cruiserLength, boundary),
      positionChecker(submarine2, submarineLength, boundary)
    );

    const duplicatesFilteredShips = [...new Set(ships)];

    if (ships.length !== duplicatesFilteredShips.length) {
      throw new Error("Ships cannot overlap each other on the board");
    }

    return new Ships(boundary, ships);
  }
}

const destroyer2 = {
  startingPoint: "A1",
  position: "Vertical"
};

const carrier2 = {
  startingPoint: "B2",
  position: "Vertical"
};

const battleship2 = {
  startingPoint: "C2",
  position: "Vertical"
};

const cruiser2 = {
  startingPoint: "D2",
  position: "Vertical"
};

const submarine2 = {
  startingPoint: "E2",
  position: "Vertical"
};

const board = {
  x: 10,
  y: 10
};

const ships1 = Ships.create(
  board,
  destroyer2,
  carrier2,
  battleship2,
  cruiser2,
  submarine2
);

console.log(ships1);

module.exports = Ships;
