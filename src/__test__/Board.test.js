const Board = require("../models/Board");

describe("#Board", () => {
  test("it should display the board size in grid values", () => {
    const board = {
      x: 10,
      y: 10
    };
    const board1 = Board.create(board);
    const display = "the grid size of this board is 10, 10";

    expect(board1.displayBoard()).toEqual(display);
  });
  test("it should display the areas on the board that were hit and the ships that were hit", () => {
    const board = {
      x: 10,
      y: 10
    };
    const board1 = new Board(board, "1,2", "1,3");
    const display = `the current hits on the board are 1,2 and the ships positions that were hit are 1,3`;

    expect(board1.displayHits()).toEqual(display);
  });
  test("it should throw an error if the board X axis grid size is less than 1", () => {
    const errorBoard = () => {
      const board = {
        x: 0,
        y: 10
      };
      return Board.create(board);
    };

    const errorMessage = "board size cannot be less than 1";

    expect(errorBoard).toThrow(errorMessage);
  });
  test("it should throw an error if the board Y axis grid size is less than 1", () => {
    const errorBoard = () => {
      const board = {
        x: 10,
        y: 0
      };
      return Board.create(board);
    };

    const errorMessage = "board size cannot be less than 1";

    expect(errorBoard).toThrow(errorMessage);
  });
});
