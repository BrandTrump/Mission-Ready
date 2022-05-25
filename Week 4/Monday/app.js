// const randNum = Math.floor(Math.random() * 10) + 1;

// const sqareRandNum = Math.sqrt(randNum);
// console.log(randNum, sqareRandNum);

// function changeColour() {
//   if (document.body.style.background === "grey") {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "grey";
//   }
// }

// let current = 0;

// function changeColour() {
//   let colourArr = ["blue", "green", "orange", "purple", "red", "brown"];

//   if (current >= colourArr.length) {
//     current = 0;
//   }

//   document.body.style.background = colourArr[current];
//   current++;
// }

// let current = 1;

// function addCount() {
//   const counter = document.getElementById("counter");
//   counter.textContent = `Counter: ${current}`;
//   current++;
// }

// const textCounter = document.querySelector("p");
// const inputElement = document.querySelector("input");
// inputElement.addEventListener("input", logValue);
// function logValue(e) {
//   textCounter.textContent = `word count: ${e.target.value.length}`;
// }

// function logValue(e) {
//   console.log(e.target.value);
// }

// const inputNum1 = document.getElementById("inputNum1");
// const inputNum2 = document.getElementById("inputNum2");
// const result = document.querySelector("p");
// const sum = document.querySelector("button");

// sum.addEventListener("click", () => {
//   const Num1 = parseInt(inputNum1.value);
//   const Num2 = parseInt(inputNum2.value);

//   const total = Num1 + Num2;

//   result.textContent = `result: ${Num1} + ${Num2} = ${total}`;
// });

// function logValue(e) {
//   textCounter.textContent = `word count: ${e.target.value.length}`;
// }

// const divideNums = (num1, num2) => num1 / num2;

// console.log(divideNums(6, 2));

// const checkIfEven = (num) => num % 2 === 0;

// console.log(checkIfEven(6), checkIfEven(3));

// const divideNums = (num1, num2 = 1) => num1 / num2;

// console.log(divideNums(6, 3));
// console.log(divideNums(10));

// const fruits = ["apple", "mango", "grape", 35, "pineapple"];
// console.log(`push array = ${fruits}`);

// fruits.push("cherry");
// console.log(`push array = ${fruits}`);

// fruits.pop();
// console.log(`pop array = ${fruits}`);

// console.log(`forEach array ${fruits}`);

// fruits.forEach((item) => console.log(item));

// const mapArray = [0, 1, 2, 3];
// console.log(`initial array = ${mapArray}`);

// const arrayAfterMapping = mapArray.map((item) => item + 1);
// console.log(`mapped array ${arrayAfterMapping}`);

// const fruits = ["apple", "mango", "grape"];

// console.log(fruits.map((fruit) => fruit.toUpperCase()));

// const food = ["pizza", "pasta", "cake"];

// const isFavFood = (arrayFood, food) => arrayFood.includes(food);

// console.log(isFavFood(food, "pizza"));

// const unfilteredArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`unfiltered array = ${unfilteredArray}`);

// const filteredArray = unfilteredArray.filter((item) => item > 4);
// console.log(`filtered array = ${filteredArray}`);

// const unfilteredArray = ["hello", "hi", "howdy", "salutations", "greetings"];

// const filterArray = (array, min) => array.filter((item) => item.length > min);
// console.log(`filtered array = ${filterArray(unfilteredArray, 6)}`);

// const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// originalArray.splice(3, 5);

// // splice with function
// // const spliceArray = (array) => array.splice(3, 5);

// // spliceArray(originalArray);

// console.log(originalArray);

// const someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`array = ${someArray}`);

// // a = previous value,  b = current value
// const reducedValue = someArray.reduce((a, b) => a + b);
// console.log(`reduced value = ${reducedValue}`);
