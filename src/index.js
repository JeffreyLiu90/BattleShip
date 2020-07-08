const Players = require("./models/Player");

const gameStatus = "Ongoing";

const destroyer2 = ["A0", "A3"];
const carrier2 = ["C1", "C2", "C3", "C4", "C5"];
const battleship2 = ["D1", "D2", "D3", "D4"];
const cruiser2 = ["E1", "E2", "E3"];
const submarine2 = ["F1", "F2", "F3"];

const board = {
  x: 10,
  y: 10
};

const playerTurn = 1;

const ships2 = destroyer2.concat(carrier2, battleship2, cruiser2, submarine2);

const player2 = Player.create(board, playerTurn, ships2);
console.log("-----------Player 2-------------------");

const attack1 = "A10";
const attack2 = "A3";
const attack3 = "C1";
const attack4 = "C2";
const attack5 = "C3";
const attack6 = "C4";
const attack7 = "C5";
const attack8 = "D1";
const attack9 = "D2";
const attack10 = "D3";
const attack11 = "D4";
const attack12 = "E1";
const attack13 = "E2";
const attack14 = "E3";
const attack15 = "F1";
const attack16 = "F2";
const attack17 = "F3";

console.log("POSITIONS: ", player2.ships.positions);
player2.hitBoard(attack1);
player2.hitBoard(attack2);
// player2.hitBoard(attack3);

// player2.hitBoard(attack4);
// player2.hitBoard(attack5);
// player2.hitBoard(attack6);
// player2.hitBoard(attack7);
// player2.hitBoard(attack8);
// player2.hitBoard(attack9);
// player2.hitBoard(attack10);
// player2.hitBoard(attack11);
// player2.hitBoard(attack12);
// player2.hitBoard(attack13);
// player2.hitBoard(attack14);
// player2.hitBoard(attack15);

// player2.hitBoard(attack16);
// player2.hitBoard(attack17);

// player2.hitBoard(hit2);
// player2.hitBoard(hit3);
// player2.hitBoard(hit4);
// player2.hitBoard(hit5);
// player2.hitBoard(hit6);
// player2.hitBoard(hit7);
// player2.hitBoard(hit8);
// player2.hitBoard(hit9);
// player2.hitBoard(hit10);
// player2.hitBoard(hit11);
// player2.hitBoard(hit12);
// player2.hitBoard(hit13);
// player2.hitBoard(hit14);
// player2.hitBoard(hit15);
// player2.hitBoard(hit16);
// player2.hitBoard(hit17);

////////////////////////////////////////////////////////////////////////////////////////////////////

// const destroyer = ["2,2", "3,2"];
// const carrier = ["10, 1", "10,2", "10,3", "10, 4", "10, 5"];
// const battleship = ["9,1", "9,2", "9,3", "9,4"];
// const cruiser = ["4,1", "8,2", "8,3"];
// const submarine = ["7,1", "7,2", "7,3"];
// const ships = [destroyer, carrier, battleship, cruiser, submarine];

// const player1 = Player.create(ships, gameStatus);

// console.log("-----------Player 1------------------");
// console.log("BOARD SIZE: ", player1.boardSize);
// console.log("PLAYERS SHIPS: ", player1.ships);
// console.log("CURRENT TURN: ", player1.playerTurn);
// console.log("CURRENT GAME STATUS: ", player1.gameStatus);

// const destroyer2 = ["2,3", "3,4"];
