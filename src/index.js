const Player = require("./models/Player");

const destroyer2 = {
  startingPoint: "A1",
  position: "Vertical"
};

const carrier2 = {
  startingPoint: "B2",
  position: "Vertical"
};

const battleship2 = {
  startingPoint: "C2",
  position: "Vertical"
};

const cruiser2 = {
  startingPoint: "D2",
  position: "Vertical"
};

const submarine2 = {
  startingPoint: "E2",
  position: "Vertical"
};
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

const attack1 = "A1";
const attack2 = "A2";
const attack3 = "B2";
const attack4 = "B3";
const attack5 = "B4";
const attack6 = "B5";
const attack7 = "B6";
const attack8 = "C2";
const attack9 = "C3";
const attack10 = "C4";
const attack11 = "C5";
const attack12 = "D2";
const attack13 = "D3";
const attack14 = "D4";
const attack15 = "E2";
const attack16 = "E3";
const attack17 = "E4";

player2.hitBoard(attack1);
player2.hitBoard(attack2);
player2.hitBoard(attack3);
player2.hitBoard(attack4);
player2.hitBoard(attack5);
player2.hitBoard(attack6);
player2.hitBoard(attack7);
player2.hitBoard(attack8);
player2.hitBoard(attack9);
player2.hitBoard(attack10);
player2.hitBoard(attack11);
player2.hitBoard(attack12);
player2.hitBoard(attack13);
player2.hitBoard(attack14);
player2.hitBoard(attack15);
player2.hitBoard(attack16);
// player2.hitBoard(attack17);

// player2.hitBoard(attack2);
console.log(player2.currentGameStatus());
console.log(player2.ships);
console.log(player2.playerBoard);
console.log(player2.gameStatus);
