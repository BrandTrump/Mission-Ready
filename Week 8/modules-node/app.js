const { addNums, subtractNums, isNumber, removeVowels } =
  require("./myModules").default;

console.log(addNums(2, 2));
console.log(subtractNums(6, 2));
console.log(isNumber(10));
console.log(removeVowels("abcdefghijklmnopqrstuvwxyz"));
