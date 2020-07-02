class Board {
  constructor(board, hits) {
    this.board = board;
    this.hits = hits;
  }

  static create(board) {
    console.log("BOAARD", board);

    return new Board(board, []);
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
    return `the size is ${this.board.x} and current areas on the board that are hit are: ${this.hits}`;
  }
}

module.exports = Board;

const board1 = Board.create();
console.log(board1);
