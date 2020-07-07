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
    // This is when the attack comes in the format of B3, splits and joins it into string split by commas, check the split string for letters and change them to numbers
    const hit = this.convertToNumbers(attack.split("").join(",")).split(" ");

    //checker to see if attack exists in ship positions
    const checker = [];

    // Checks if the the second part of attack is double digit or not, then send to ship hits and overall hits
    if (hit[0].length === 5) {
      const unformattedHit = hit.join("");
      const x = unformattedHit[0];
      const y = unformattedHit[1] + unformattedHit[2] + unformattedHit[4];
      const combinedHit = (x + y).split(" ");

      this.playerBoard.hits.push(combinedHit);
      checker.push(combinedHit[0]);
    } else {
      this.playerBoard.hits.push(hit);
      checker.push(hit[0]);
    }

    console.log("checker: ", checker[0]);
    // All the ship positions that have been registered
    const shipPositions = this.ships.positions;

    // Loop through the ship positions, and check whether the attack matches one of them, and if does then push the hit also to all the ships that positions that have been attacked
    shipPositions.map(position => {
      if (position[0] === checker[0]) {
        this.playerBoard.shipHits.push(checker);
      }
    });
    console.log("Current ship positions: ", shipPositions);
    console.log("Current board hits: ", this.playerBoard.hits);
    console.log("Current board ship hits: ", this.playerBoard.shipHits);

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
