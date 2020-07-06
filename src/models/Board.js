class Board {
  constructor(board, hits, shipHits) {
    this.board = board;
    this.hits = hits;
    this.shipHits = shipHits;
  }

  static create(board) {
    if (board.x < 1 || board.y < 1) {
      throw new Error("board size cannot be less than 1");
    } else {
      return new Board(board, [], []);
    }
  }

  displayBoard() {
    return `the size is ${this.board.x} and current areas on the board that are hit are: ${this.hits}`;
  }
}

module.exports = Board;
