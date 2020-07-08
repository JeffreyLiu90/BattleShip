const Ships = require("../models/Ships");
const Board = require("../models/Board");
const convertToNumbers = require("../helperFunctions/convertToNumbers");

class Player {
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

      return `Player ${this.playerTurn} has lost the game`;
    } else {
      return `It is now Player ${this.playerTurn}'s turn`;
    }
  }

  boundaryChecker(firstNum, secondNum, boundary) {
    if (firstNum < 1 || secondNum < 1) {
      throw new Error("The attack is off the board's minimum size");
    } else if (firstNum > boundary.x || secondNum > boundary.y) {
      throw new Error("The attack is off the board's maximum size");
    }
  }

  hitBoard(attack) {
    const playerBoardHits = this.playerBoard.hits;
    const playerShipPositions = this.ships.positions;
    const playerBoardShipHits = this.playerBoard.shipHits;

    if (attack.length === 3) {
      const firstNum = convertToNumbers(attack[0]);
      const secondNum = attack[1] + attack[2];
      this.boundaryChecker(firstNum, secondNum, this.playerBoard.boundary);
      playerBoardHits.push(attack);
    } else {
      const firstNum = convertToNumbers(attack[0]);
      const secondNum = attack[1];
      this.boundaryChecker(firstNum, secondNum, this.playerBoard.boundary);
      playerBoardHits.push(attack);
    }

    playerShipPositions.map(position => {
      if (position === attack) {
        playerBoardShipHits.push(attack);
      }
    });

    this.changePlayer();
    this.currentGameStatus();
  }

  static create(
    board,
    playerTurn,
    destroyer2,
    carrier2,
    battleship2,
    cruiser2,
    submarine2
  ) {
    const playerBoard = Board.create(board);
    const ships = Ships.create(
      board,
      destroyer2,
      carrier2,
      battleship2,
      cruiser2,
      submarine2
    );

    const gameStatus = "Ongoing";
    return new Player(playerBoard, ships, playerTurn, gameStatus);
  }
}

module.exports = Player;
