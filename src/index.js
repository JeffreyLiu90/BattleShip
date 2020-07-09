const Player = require("./models/Player");

const destroyer2 = ["A10", "A3"];
const carrier2 = [];
const battleship2 = [];
const cruiser2 = [];
const submarine2 = [];
// const carrier2 = ["C1", "C2", "C3", "C4", "C5"];
// const battleship2 = ["D1", "D2", "D3", "D4"];
// const cruiser2 = ["E1", "E2", "E3"];
// const submarine2 = ["F1", "F2", "F3"];

const board = {
  x: 10,
  y: 10
};

const playerTurn = 1;

// const ships2 = destroyer2.concat(carrier2, battleship2, cruiser2, submarine2);
// console.log("ships", ships2);
const player2 = Player.create(
  board,
  playerTurn,
  destroyer2,
  carrier2,
  battleship2,
  cruiser2,
  submarine2
);
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

player2.hitBoard(attack1);
player2.hitBoard(attack2);
console.log(player2.currentGameStatus());
