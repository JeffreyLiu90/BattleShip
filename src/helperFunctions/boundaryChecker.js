const boundaryChecker = (firstNum, secondNum, boundary) => {
  if (firstNum < 1 || secondNum < 1) {
    throw new Error(
      "The position of the ship cannot be off the board's minimum size"
    );
  } else if (firstNum > boundary.x || secondNum > boundary.y) {
    throw new Error("The ship position cannot be off the board's maximum size");
  }
};

module.exports = boundaryChecker;
