const Ships = require("../models/Ships");
const Board = require("../models/Board");

class Players {
  constructor(playerBoard, ships, playerTurn, gameStatus) {
    this.playerBoard = playerBoard;
    this.ships = ships;
    this.playerTurn = playerTurn;
    this.gameStatus = gameStatus;
  }

  changePlayer() {
    if (this.playerTurn === 1) {
      this.playerTurn = 2;
    } else {
      this.playerTurn = 1;
    }
  }

  currentGameStatus() {
    if (this.ships.positions.length === this.playerBoard.shipHits.length) {
      this.gameStatus = "Finished";
      console.log("The game is now finished");
      return `Player ${this.playerTurn} has lost the game`;
    } else {
      console.log(`It is now Player ${this.playerTurn}'s turn`);
      return `It is now ${this.playerTurn}'s turn`;
    }
  }

  convertToNumbers(str) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    return str.replace(/[a-z]/gi, function(m) {
      return letters.indexOf(m.toLowerCase()) + 1;
    });
  }

  hitBoard(attack) {
    const unFormattedAttack = attack.split("").join(",");
    const hit = this.convertToNumbers(unFormattedAttack).split(",");
    this.playerBoard.hits.push(hit);

    const shipPositions = this.ships.positions;

    shipPositions.map(position => {
      if (position[0] === hit[0] && position[1] === hit[1]) {
        this.playerBoard.shipHits.push(hit);
      }
    });

    this.changePlayer();
    this.currentGameStatus();
  }

  static create(board, destroyer, gameStatus) {
    console.log("board player: ", board);
    const playerBoard = Board.create(board);
    const ships = Ships.create(board, destroyer);
    const playerTurn = 1;

    return new Players(playerBoard, ships, playerTurn, gameStatus);
  }
}

module.exports = Players;
