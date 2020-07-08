const Player = require("../models/Player");

describe("#Player", () => {
  test("it should display game status as on going after creating a player", () => {
    const board = {
      x: 10,
      y: 10
    };
    const destroyer2 = ["A10", "A3"];
    const carrier2 = ["C1", "C2", "C3", "C4", "C5"];
    const battleship2 = ["D1", "D2", "D3", "D4"];
    const cruiser2 = ["E1", "E2", "E3"];
    const submarine2 = ["F1", "F2", "F3"];

    const playerTurn = 1;
    const player1 = Player.create(
      board,
      playerTurn,
      destroyer2,
      carrier2,
      battleship2,
      cruiser2,
      submarine2
    );
    const status = "Ongoing";

    expect(player1.gameStatus).toEqual(status);
  });
  test("it should display game status as Finished after creating all ships have been sunk", () => {
    const board = {
      x: 10,
      y: 10
    };
    const destroyer2 = ["A2", "A3"];
    const carrier2 = [];
    const battleship2 = [];
    const cruiser2 = [];
    const submarine2 = [];

    const playerTurn = 1;
    const player1 = Player.create(
      board,
      playerTurn,
      destroyer2,
      carrier2,
      battleship2,
      cruiser2,
      submarine2
    );
    const status = "Finished";

    player1.hitBoard("A2");
    player1.hitBoard("A3");

    expect(player1.gameStatus).toEqual(status);
  });
  test("It should change player after a hit", () => {
    const board = {
      x: 10,
      y: 10
    };

    const destroyer2 = ["A2"];
    const carrier2 = [];
    const battleship2 = [];
    const cruiser2 = [];
    const submarine2 = [];

    const playerTurn = 1;
    const newPlayerTurn = 2;
    const player1 = Player.create(
      board,
      playerTurn,
      destroyer2,
      carrier2,
      battleship2,
      cruiser2,
      submarine2
    );

    player1.hitBoard("A2");

    expect(player1.playerTurn).toEqual(newPlayerTurn);
  });
  test("It should display current player's turn if the game is still ongoing", () => {
    const board = {
      x: 10,
      y: 10
    };

    const destroyer2 = ["A2", "A3"];
    const carrier2 = ["C1", "C2", "C3", "C4", "C5"];
    const battleship2 = ["D1", "D2", "D3", "D4"];
    const cruiser2 = ["E1", "E2", "E3"];
    const submarine2 = ["F1", "F2", "F3"];

    const playerTurn = 1;
    const currentOngoingTurn = `It is now Player 2's turn`;
    const player1 = Player.create(
      board,
      playerTurn,
      destroyer2,
      carrier2,
      battleship2,
      cruiser2,
      submarine2
    );

    player1.hitBoard("A2");

    expect(player1.currentGameStatus()).toEqual(currentOngoingTurn);
  });
  test("It should display current the loser once all ships have been hit and game is over", () => {
    const board = {
      x: 10,
      y: 10
    };

    const destroyer2 = ["A2"];
    const carrier2 = [];
    const battleship2 = [];
    const cruiser2 = [];
    const submarine2 = [];

    const playerTurn = 1;
    const currentOngoingTurn = `Player 2 has lost the game`;
    const player1 = Player.create(
      board,
      playerTurn,
      destroyer2,
      carrier2,
      battleship2,
      cruiser2,
      submarine2
    );

    player1.hitBoard("A2");

    expect(player1.currentGameStatus()).toEqual(currentOngoingTurn);
  });
});
