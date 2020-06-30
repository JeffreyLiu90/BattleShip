class Board {
  constructor(x, y, hits) {
    this.x = x;
    this.y = y;
    this.hit = hits;
  }

  static create() {
    return new Board(10, 10, ["1,3", "2, 3"]);
  }

  static letterMapper = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10
  };

  displayBoard() {
    return `the current areas on the board that are hit are: ${this.hits}`;
  }
}

const board1 = Board.create();
console.log(board1);
