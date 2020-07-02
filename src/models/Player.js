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
    if (this.ships.positions.length === 0) {
      this.gameStatus = "Finished";
      return `Player ${this.playerTurn} has lost the game`;
    } else {
      return "Turn Change";
    }
  }

  hitBoard(hit) {
    this.playerBoard.hits.push(hit);
    console.log(this.playerBoard.displayBoard());
    console.log("current hits: ", this.playerBoard.hits);
    console.log("current ship positions: ", this.ships.positions);
    if (this.ships.positions.includes(hit)) {
      const newList = this.ships.positions.filter(item => item !== hit);

      this.ships.positions = newList;
      console.log("current positions: ", newList);
      console.log("HIT");
      this.changePlayer();
      this.currentGameStatus();
    }
  }

  static create(board, destroyer, gameStatus) {
    const playerBoard = Board.create(board);
    const ships = Ships.create(board, destroyer);
    const playerTurn = 1;

    return new Players(playerBoard, ships, playerTurn, gameStatus);
  }
}

module.exports = Players;

const gameStatus = "Ongoing";

const destroyer2 = ["B3", "A3"];
const carrier2 = ["C1", "C2", "C3", "C4", "C5"];
const battleship2 = ["D1", "D2", "D3", "D4"];
const cruiser2 = ["E1", "E2", "E3"];
const submarine2 = ["F1", "F2", "F3"];

const board = {
  x: 10,
  y: 10
};

const ships2 = destroyer2.concat(carrier2, battleship2, cruiser2, submarine2);

const player2 = Players.create(board, ships2, gameStatus);
console.log("-----------Player 2-------------------");
console.log("BOARD SIZE: ", player2.boardSize);
console.log("PLAYERS SHIPS: ", player2.ships.positions);
console.log("CURRENT TURN: ", player2.playerTurn);
console.log("CURRENT GAME STATUS: ", player2.gameStatus);

const hit = "B3";
const hit2 = "3,4";
// player2.hitBoard(hit);
// player2.hitBoard(hit2);
console.log(player2.playerTurn);
console.log("BOARD SIZE: ", player2.playerBoard);

////////////////////////////////////////////////////////////////////////////////////////////////////

// const destroyer = ["2,2", "3,2"];
// const carrier = ["10, 1", "10,2", "10,3", "10, 4", "10, 5"];
// const battleship = ["9,1", "9,2", "9,3", "9,4"];
// const cruiser = ["4,1", "8,2", "8,3"];
// const submarine = ["7,1", "7,2", "7,3"];
// const ships = [destroyer, carrier, battleship, cruiser, submarine];

// const player1 = Players.create(ships, gameStatus);

// console.log("-----------Player 1------------------");
// console.log("BOARD SIZE: ", player1.boardSize);
// console.log("PLAYERS SHIPS: ", player1.ships);
// console.log("CURRENT TURN: ", player1.playerTurn);
// console.log("CURRENT GAME STATUS: ", player1.gameStatus);

// const destroyer2 = ["2,3", "3,4"];
