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
    function convertToNumbers(str) {
      const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      return str.replace(/[a-z]/gi, function(m) {
        return letters.indexOf(m.toLowerCase()) + 1;
      });
    }

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
      const positionOne = convertToNumbers(ship[0]);
      console.log("pos2: ", ship.length);
      if (positionOne < 1) {
        throw new Error(
          "Ship position cannot be less than the board's minimum size"
        );
      } else if (positionOne > boundary.y) {
        throw new Error(
          "Ship position cannot be larger than board's maximum size"
        );
      } else {
        return ship;
      }
    });

    console.log("final", shipPositionsFinal);
    return new Ships(boundary, shipPositionsFinal);
  }
}

module.exports = Ships;
