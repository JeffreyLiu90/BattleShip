const Ships = require("../models/Ships");

describe("Ships", () => {
  test("It should throw error if the ship position on board is less than board boundary minimum size of 1", () => {
    errorBoundary = () => {
      const destroyer2 = {
        startingPoint: "A0",
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

      return Ships.create(
        board,
        destroyer2,
        carrier2,
        battleship2,
        cruiser2,
        submarine2
      );
    };

    const errorMessage =
      "The position of the ship cannot be off the board's minimum size";

    expect(errorBoundary).toThrow(errorMessage);
  });
  test("It should throw error if the ship position on board is larger than board boundary maximum size", () => {
    errorBoundary = () => {
      const destroyer2 = {
        startingPoint: "A12",
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

      return Ships.create(
        board,
        destroyer2,
        carrier2,
        battleship2,
        cruiser2,
        submarine2
      );
    };

    const errorMessage =
      "The ship position cannot be off the board's maximum size";

    expect(errorBoundary).toThrow(errorMessage);
  });
  test("It should throw error if the ships' positions overlap each other", () => {
    errorBoundary = () => {
      const destroyer2 = {
        startingPoint: "A2",
        position: "Vertical"
      };

      const carrier2 = {
        startingPoint: "A2",
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

      return Ships.create(
        board,
        destroyer2,
        carrier2,
        battleship2,
        cruiser2,
        submarine2
      );
    };

    const errorMessage = "Ships cannot overlap each other on the board";

    expect(errorBoundary).toThrow(errorMessage);
  });
});
