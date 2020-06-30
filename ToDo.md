# Do/ Path

1. Create a Repository, and clone it
2. Create Folder structure
3. Download Jest
4. Run a Jest test that will pass to ensure it works

###### ###### Models

# ---------------Board---------------

# Properties

- size
- maybe ships?

# Constructor

- this.x = x (10)
- this.y = y (10)
- this.hitPanels = hitPanels
- this.missPanels = missPanels

# Methods

- static create board
- board status

# Edge Cases

- Board sizes have to be 10,10
- Cannot be less than 0
- Have to be typeof "number"

# Notes

- Can create a mapper style for letter representing a number
- Take in consideration - Hits and Misses on board
- Maybe throw the ship coordinates and board coordinates into an array to find whether it includes to log
- When board is created, and battleships are created, it must adhere to the correct sizes

# ---------------Players---------------

# Properties

- Place or Create Battleships
- Turn
- Attack
- Win and Lose
- Board

# Constructor

- this.battleships = battleships (create multiple at once)
- this.turn = turn
- this.gameStatus = gameStatus

# Methods

- attack()
- setTurn() - P1 to P2
- gameStatus()

# Edge Cases

- If the game status has changed from ongoing to win or lose, then players cannot make anymore moves
- Player
- Player cannot hit off the board boundaries

# Notes

- Perhaps they can create all the battleships at once or by each one
- Static create Player - Board - Ships one by one

# ---------------Battle Ships---------------

# Properties

- Different types of battle ships
- Battle ship positions
- Board boundaries
-

# Constructor

- this.position = position (in each subclass)
- this.status = status (hit or miss?)
- this.boundary = boundary

# Edge Cases

- Battle ships must be conscious of each other's position, can't stack on each other
- Vertical and Horizontal - when created, there is a error catching function to make sure?

# Notes

- Here we can use Extends
- If ship has been hit, it gets pushed out of the array?

# ---------------Position---------------

# Properties

- size

# Constructor

- this.x = x (10)
- this.y = y (10)

# Edge Cases

# Notes

- Can throw in boundary here too
- Static create in position create to make sure they're all correctly stacked
