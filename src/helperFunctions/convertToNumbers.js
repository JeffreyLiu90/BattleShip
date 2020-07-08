function convertToNumbers(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return str.replace(/[a-z]/gi, function(m) {
    return letters.indexOf(m.toLowerCase()) + 1;
  });
}

module.exports = convertToNumbers;
