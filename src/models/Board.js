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
    return `the grid size of this board is ${this.board.x}, ${this.board.y}`;
  }

  displayHits() {
    return `the current hits on the board are ${this.hits} and the ships positions that were hit are ${this.shipHits}`;
  }
}

module.exports = Board;
