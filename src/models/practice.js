// let hitter = ["A3", "B3"];

// //1. I need to replace the letters into numbers, and then split with comma in between
// //Change it into their own arrays?

// const newHitter = hitter.join("");

// console.log("New Hitter: ", newHitter);

// function convertToNumbers(str) {
//   var arr = "abcdefghijklmnopqrstuvwxyz".split("");
//   return str.replace(/[a-z]/gi, function(m) {
//     return arr.indexOf(m.toLowerCase()) + 1;
//   });
// }

// console.log(convertToNumbers(newHitter));

// const func2 = word => {
//   const letterMapper = {
//     A: "1",
//     B: "2",
//     C: "3",
//     D: "4",
//     E: "5",
//     F: "6",
//     G: "7",
//     H: "8",
//     I: "9",
//     J: "10"
//   };
//   const newValue = letterMapper[word];
//   return (word = newValue);
// };

// const replace = arr => {
//   return arr.map(word => {
//     func2(word);
//   });
// };

// const yeet = replace(newHitter);
// console.log("yeet: ", yeet);

// const func = item => {
//   let arr = [];
//   let newhitter = item.map(str => str.split("")).flat();

//   while (newhitter.length > 0) {
//     const haha = newhitter.splice(0, 1);
//     arr.push(haha);
//   }

//   return arr;
// };

// const arrays = func(hitter);
// console.log("Arrays: ", arrays);

// replaces

// const replace = arr => {
// const letterMapper = {
//   A: "1",
//   B: "2",
//   C: "3",
//   D: "4",
//   E: "5",
//   F: "6",
//   G: "7",
//   H: "8",
//   I: "9",
//   J: "10"
// };
//   return arr.map(word => {
//     console.log("word0: ", word[0]);
//     const letter = word[0];
//     if (
//       word[0] === ("B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J")
//     ) {
//       return (word[0] = [letterMapper[letter]]);
//     } else {
//       return word;
//     }
//   });
// };

// console.log(replace(arrays));
// const newArrays = arrays.map(word => {
//   const letterMapper = {
//     A: "1",
//     B: "2",
//     C: "3",
//     D: "4",
//     E: "5",
//     F: "6",
//     G: "7",
//     H: "8",
//     I: "9",
//     J: "10"
//   };

//   console.log("word: ", word[0]);
//   console.log("wordLetter: ", letterMapper[word[0]]);
//   return word.includes(
//     "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J"
//   )
//     ? (word[0] = letterMapper[word[0]])
//     : word[0];
// });

// console.log(newArrays);

// console.log(func(hitter));

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

// const positions = [
//   ["2", "3"],
//   ["1", "3"],
//   ["3", "1"],
//   ["3", "2"],
//   ["3", "3"],
//   ["3", "4"],
//   ["3", "5"],
//   ["4", "1"],
//   ["4", "2"],
//   ["4", "3"],
//   ["4", "4"],
//   ["5", "1"],
//   ["5", "2"],
//   ["5", "3"],
//   ["6", "1"],
//   ["6", "2"],
//   ["6", "3"]
// ];

// console.log(positions);

// for (let i of positions) {
//   console.log("i: ", i);
// }

// const pos = [
//   ["2", "3"],
//   ["1", "3"]
// ];

// // pos.includes(["2", "3"]) ? console.log("hello") : console.log("nope");

// const item = ["2", "3"];

// const arr = [];
// const lol = pos.map(
//   position => position[0] === item[0] && position[1] === item[1]
// );

// // const filtered = pos.filter(list => list[0] !== item[0] && list[1] !== item[1]);
// console.log(lol);
function convertToNumbers(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return str.replace(/[a-z]/gi, function(m) {
    return letters.indexOf(m.toLowerCase()) + 1;
  });
}

const hit1 = "A3";

const format = hit1.split("").join(",");
const newer = convertToNumbers(format).split(",");

console.log(newer);
