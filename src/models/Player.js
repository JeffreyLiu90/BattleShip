const Ships = require("../models/Ships");
const Board = require("../models/Board");

class Players {
  constructor(boardSize, ships, playerTurn, gameStatus) {
    this.boardSize = boardSize;
    this.ships = ships;
    this.playerTurn = playerTurn;
    this.gameStatus = gameStatus;
  }

  // playerSelect() {
  //   return `Player ${Math.floor(Math.random() * 2) + 1}`;
  // }
  // playerSelect() {
  //   return Math.floor(Math.random() * 2) + 1;
  // }

  static create(board, destroyer, gameStatus) {
    const boardSize = Board.create(board);
    const ships = Ships.create(board, destroyer);
    const playerTurn = 1;

    return new Players(boardSize, ships, playerTurn, gameStatus);
  }
}

class PlayerOne extends Players {
  constructor(board, ships, playerTurn, gameStatus) {
    super(board, ships, playerTurn, gameStatus);
  }
}

module.exports = Players;

const board = {
  x: 10,
  y: 10
};
const destroyer = ["2,2", "3,2"];
const gameStatus = "Ongoing";

const players = Players.create(board, destroyer, gameStatus);

console.log("BOARD SIZE: ", players.boardSize);
console.log("PLAYERS SHIPS: ", players.ships);
console.log("CURRENT TURN: ", players.playerTurn);
console.log("CURRENT GAME STATUS: ", players.gameStatus);
