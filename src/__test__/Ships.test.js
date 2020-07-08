const Ships = require("../models/Ships");

describe("Ships", () => {
  test("It should throw error if the ship position on board is less than board boundary minimum size of 1", () => {
    errorBoundary = () => {
      const board = {
        x: 10,
        y: 10
      };

      const destroyer2 = ["A0"];
      const carrier2 = [];
      const battleship2 = [];
      const cruiser2 = [];
      const submarine2 = [];

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
      const board = {
        x: 10,
        y: 10
      };

      const destroyer2 = ["A11"];
      const carrier2 = [];
      const battleship2 = [];
      const cruiser2 = [];
      const submarine2 = [];

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
      const board = {
        x: 10,
        y: 10
      };

      const destroyer2 = ["A1", "A1"];
      const carrier2 = [];
      const battleship2 = [];
      const cruiser2 = [];
      const submarine2 = [];

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
