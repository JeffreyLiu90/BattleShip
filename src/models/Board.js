class Board {
  constructor(boundary, hits, shipHits) {
    this.boundary = boundary;
    this.hits = hits;
    this.shipHits = shipHits;
  }

  static create(boundary) {
    if (boundary.x < 1 || boundary.y < 1) {
      throw new Error("board size cannot be less than 1");
    } else {
      return new Board(boundary, [], []);
    }
  }

  displayBoard() {
    return `the grid size of this board is ${this.boundary.x}, ${this.boundary.y}`;
  }

  displayHits() {
    return `the current hits on the board are ${this.hits} and the ships positions that were hit are ${this.shipHits}`;
  }
}

module.exports = Board;
