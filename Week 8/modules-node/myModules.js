function addNums(num1, num2) {
  return num1 + num2;
}

function subtractNums(num1, num2) {
  return num1 - num2;
}

function isNumber(num) {
  return Boolean(parseInt(num));
}

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

module.exports = {
  addNums,
  subtractNums,
  isNumber,
  removeVowels,
};
