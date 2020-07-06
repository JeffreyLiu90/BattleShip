class Ships {
  constructor(boundary, positions) {
    this.boundary = boundary;
    this.positions = positions;
  }

  static create(boundary, ships) {
    function convertToNumbers(str) {
      const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      return str.replace(/[a-z]/gi, function(m) {
        return letters.indexOf(m.toLowerCase()) + 1;
      });
    }

    const shipPositionsFinal = [];

    const duplicatesFilteredShips = [...new Set(ships)];

    if (ships.length !== duplicatesFilteredShips.length) {
      throw new Error("Ships cannot overlap each other on the board");
    }

    const initialShipPositions = ships.map(num => {
      console.log("num =", num[0]);
      if (num.length === 3) {
        const number = convertToNumbers(num[0]) + "," + num[1] + num[2];
        console.log("number", [number].splice(0, 1));
        return number;
      } else {
        return num.split("");
      }
    });

    console.log("ships: ", initialShipPositions);

    while (initialShipPositions.length > 0) {
      if (initialShipPositions.includes("0")) {
        throw new Error(
          "The position of the ship cannot be off the board minimum size"
        );
      } else {
        shipPositionsFinal.push(initialShipPositions.splice(0, 2));
      }
    }

    console.log("ship positions: ", shipPositionsFinal);

    // for (let position of shipPositionsFinal) {
    //   console.log("pooos:", position.splice(0, 1));
    // }

    return new Ships(boundary, shipPositionsFinal);
  }
}

module.exports = Ships;
