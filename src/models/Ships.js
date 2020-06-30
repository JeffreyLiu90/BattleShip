const Position = require("../models/Position");

class Ships {
  constructor(boundary, positions) {
    this.boundary = boundary;
    this.positions = positions;
  }

  static create(boundary, destroyer) {
    // , battleship, cruiser, submarine, destroyer

    //here i can throw these positions into an array. if any has in boundary, then throw error

    //for static create, if the positions are within boundary, ok create

    // const battleShip = BattleShip.create(battleship);
    // const cruiserShip = Cruiser.create(cruiser);
    // const submarineShip = Submarine.create(submarine);
    // const destroyerShip = Destroyer.create(destroyer);
    const destroyerShip = Position.create(destroyer);
    return new Ships(boundary, destroyerShip);
  }
}

// class Destroyer extends Ships {
//   constructor(boundary, position) {
//     super(boundary);
//     this.position = position;
//   }

//   static create(destroyer) {
//     const position = Position.create(destroyer);
//     return new Destroyer(position);
//   }
// }
// class BattleShip extends Ships {
//   constructor(position, boundary) {
//     super(boundary);
//   }
// }
// class Cruiser extends Ships {
//   constructor(position, boundary) {
//     super(boundary);
//   }
// }
// class Submarine extends Ships {
//   constructor(position, boundary) {
//     super(boundary);
//   }
// }
// class Destroyer extends Ships {
//   constructor(position, boundary) {
//     super(boundary);
//   }
// }

module.exports = Ships;
