const Ships = require("../models/Ships");

describe("Ships", () => {
  test("it should convert the string+number value to board coordinates", () => {
    const boundary = {
      x: 10,
      y: 10
    };

    const shipPositions = ["A2"];
    const transformedShipPositions = ["1,2"];

    const ships1 = Ships.create(boundary, shipPositions);

    expect(ships1.positions[0]).toEqual(transformedShipPositions);
  });
  test("It should throw error if the ship position on board is less than board boundary minimum size of 1", () => {
    errorBoundary = () => {
      const board = {
        x: 10,
        y: 10
      };

      const shipPositions = ["A0"];

      return Ships.create(board, shipPositions);
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

      const shipPositions = ["A11"];

      return Ships.create(board, shipPositions);
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

      const shipPositions = ["A1", "A1"];
      return Ships.create(board, shipPositions);
    };

    const errorMessage = "Ships cannot overlap each other on the board";

    expect(errorBoundary).toThrow(errorMessage);
  });
});
