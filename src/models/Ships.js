class Ships {
  constructor(boundary, positions) {
    this.boundary = boundary;
    this.positions = positions;
  }

  static letterMapper = {
    A: "1",
    B: "2",
    C: "3",
    D: "4",
    E: "5",
    F: "6",
    G: "7",
    H: "8",
    I: "9",
    J: "10"
  };

  static create(boundary, ships) {
    function convertToNumbers(str) {
      const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      return str.replace(/[a-z]/gi, function(m) {
        return letters.indexOf(m.toLowerCase()) + 1;
      });
    }

    const shipPositions = [],
      size = 2;

    const positions = ships.join("");
    const newPositions = convertToNumbers(positions).split("");
    while (newPositions.length > 0) {
      shipPositions.push(newPositions.splice(0, size));
    }

    return new Ships(boundary, shipPositions);
  }
}

module.exports = Ships;

// match(/.{2}/g);
