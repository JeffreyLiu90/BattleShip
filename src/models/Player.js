class Player {
  constructor(board, ships, playerTurn, gameStatus) {
    this.board = board;
    this.ships = ships;
    this.playerTurn = playerTurn;
    this.gameStatus = gameStatus;
  }

  playerSelect() {
    return `Player ${Math.floor(Math.random() * 2) + 1}`;
  }

  static create(carrier, battleship, cruiser, submarine, destroyer) {
    const boundary = {
      x: 10,
      y: 10
    };
    const ships = Ships.create(
      boundary,
      carrier,
      battleship,
      cruiser,
      submarine,
      destroyer
    );

    const board = Board.create(boundary);
    const playerTurn = this.playerSelect();
    const gameStatus = "Ongoing";
    return Player.create(board, ships, playerTurn, gameStatus);
  }
}
