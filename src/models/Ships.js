class Ships {
  constructor(ships, boundary) {
    this.ships = ships;
    this.boundary = boundary;
  }

  static create(boundary, carrier, battleship, cruiser, submarine, destroyer) {
    //here i can throw these positions into an array. if any has in boundary, then throw error

    //for static create, if the positions are within boundary, ok create
    const carrierShip = Carrier.create(carrier);
    const battleShip = BattleShip.create(battleship);
    const cruiserShip = Cruiser.create(cruiser);
    const submarineShip = Submarine.create(submarine);
    const destroyerShip = Destroyer.create(destroyer);

    const ships = [
      carrierShip,
      battleShip,
      cruiserShip,
      submarineShip,
      destroyerShip
    ];

    return new Ships(ships, boundary);
  }
}

class Carrier extends Ships {
  constructor(position, boundary) {
    super(boundary);
  }
}
class BattleShip extends Ships {
  constructor(position, boundary) {
    super(boundary);
  }
}
class Cruiser extends Ships {
  constructor(position, boundary) {
    super(boundary);
  }
}
class Submarine extends Ships {
  constructor(position, boundary) {
    super(boundary);
  }
}
class Destroyer extends Ships {
  constructor(position, boundary) {
    super(boundary);
  }
}
