// class Position {
//   constructor(position) {
//     this.position = position;
//   }

//   static create(position) {
//     return new Position(position);
//   }

//   sizeCheck(placementArr) {
//     for (let position of placementArr) {
//       if (position[0] < 0 || position[1] < 0) {
//         throw new Error("Ship position cannot be smaller than 0");
//       } else {
//         console.log("OK!");
//       }
//     }
//   }
// }

// module.exports = Position;

const letterMapper = {
  A: "1",
  B: "2",
  C: "3",
  D: "4",
  E: "5",
  F: "6",
  G: "7",
  H: "8",
  I: "9",
  J: "10"
};

const letters = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J");

let hitter = ["A3", "B3"];

// let newhitter = hitter.map(str => str.split("")).flat();

// console.log("newHitter: ", newhitter);

//1. I need to replace the letters into numbers, and then split with comma in between
//Change it into their own arrays?

const func = item => {
  let arr = [];
  let newhitter = item.map(str => str.split("")).flat();

  while (newhitter.length > 0) {
    const haha = newhitter.splice(0, 1);
    arr.push(haha);
  }

  return arr;
};

const arrays = func(hitter);
console.log(arrays);

// replaces

arrays.map(word => {
  const letterMapper = {
    A: "1",
    B: "2",
    C: "3",
    D: "4",
    E: "5",
    F: "6",
    G: "7",
    H: "8",
    I: "9",
    J: "10"
  };

  return word ===
    ("A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J")
    ? (word = letterMapper[word])
    : word;
});

console.log(func(hitter));

// while (newhitter.length > 0) {
//   return newhitter.splice(0, 1);
// }

// console.log("newHitter: ", newhitter);

// if (
//   newhitter.includes(
//     "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J"
//   )
// ) {
//   console.log("yes");
// }

// while (newhitter.length > 0) {
//   return newhitter.splice(0, 1);
// }
// console.log("Wgile: ", newhitter);

// const letter = newhitter[0];
// console.log("LETTER: ", letter);
// console.log("Value of Letter", letterMapper[letter]);

// console.log("newHitter: ", newhitter);
// const lol = newhitter.splice(0, 1, letterMapper[letter]);
// console.log("NEEW: ", newhitter.join(","));

// var a = ['a','b','c','d','e','f','g']
//   , chunk

// while (a.length > 0) {

//   chunk = a.splice(0,3)

//   console.log(chunk)

// }
// console.log(newnewHitter);
// console.log(
//   "hiyat",
//   hitter.map(str => str.split(" "))
// );
// hitter = [`${letterMapper[hitter[0]]}, 3`];

// console.log(hitter);
// console.log(letterMapper["A"]);
// a = a.map(function(item) { return item == 3452 ? 1010 : item; });
