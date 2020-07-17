const Player = require("../models/Player");

describe("#Player", () => {
  test("it should display game status as on going after creating a player", () => {
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
    const board = {
      x: 10,
      y: 10
    };

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
    const destroyer2 = {
      startingPoint: "A2",
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
    const board = {
      x: 10,
      y: 10
    };

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

    const attacks = [
      "A2",
      "A3",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "C2",
      "C3",
      "C4",
      "C5",
      "D2",
      "D3",
      "D4",
      "E2",
      "E3",
      "E4"
    ];

    attacks.forEach(attack => player1.hitBoard(attack));
    expect(player1.gameStatus).toEqual(status);
  });
  test("It should change player after a hit", () => {
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
    const board = {
      x: 10,
      y: 10
    };

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
    const destroyer2 = {
      startingPoint: "A2",
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
    const board = {
      x: 10,
      y: 10
    };
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
    const destroyer2 = {
      startingPoint: "A2",
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
    const board = {
      x: 10,
      y: 10
    };

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

    const attacks = [
      "A2",
      "A3",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "C2",
      "C3",
      "C4",
      "C5",
      "D2",
      "D3",
      "D4",
      "E2",
      "E3",
      "E4"
    ];

    attacks.forEach(attack => player1.hitBoard(attack));

    expect(player1.currentGameStatus()).toEqual(currentOngoingTurn);
  });
  test("It should throw an error if the hit is invalid", () => {
    const errorHit = () => {
      const destroyer2 = {
        startingPoint: "A2",
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
      const board = {
        x: 10,
        y: 10
      };

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

      return player1.hitBoard("G200");
    };

    const errorMessage = "Invalid position";

    expect(errorHit).toThrow(errorMessage);
  });
});
