class Position {
  constructor(position) {
    this.position = position;
  }

  static create(position) {
    return new Position(position);
  }
}

module.exports = Position;
