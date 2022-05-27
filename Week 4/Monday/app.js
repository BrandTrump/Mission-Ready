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

// const numArray = [5, 7, 2, 8, 6, 3, 9, 4, 1];

// const descendNums = (array) => array.sort((a, b) => b - a);
// const ascendNums = (array) => array.sort((a, b) => a - b);

// console.log(descendNums(numArray));
// console.log(ascendNums(numArray));

// const characters = [
//   {
//     name: "Tom sawyer",
//     birthDate: 1876,
//     death: 1945,
//   },
//   {
//     name: "Bart Simpson",
//     birthDate: 1989,
//     death: 2017,
//   },
//   {
//     name: "Peter Griffin",
//     birthDate: 1999,
//     death: 2014,
//   },
// ];

// const youngestCharacter = (array) =>
//   array.sort((a, b) =>
//     a.death - a.birthDate < b.death - b.birthDate ? -1 : 1
//   );

// console.log(youngestCharacter(characters));

// const oldestCharacter = (array) =>
//   array.sort((a, b) =>
//     a.death - a.birthDate > b.death - b.birthDate ? -1 : 1
//   );

// console.log(oldestCharacter(characters));

// const sortByName = (array) =>
//   array.sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortByName(characters));

// class Person {
//     constructor(name) {
//     this.name = name;
//     }

//     introduce() {
//     console.log('Hello, my name is ' + this.name);
//     }
//   }

//   const otto = new Person('Otto');
//   otto.introduce();

// class recipes {
//   constructor(title, servings, ingredients) {
//     this.title = title;
//     this.servings = servings;
//     this.ingredients = ingredients;
//   }

//   makeRecipes() {
//     console.log("Your food is ready!");
//   }
//   showDetails() {
//     console.log(`${this.title}, ${this.servings}, ${this.ingredients}`);
//   }
// }

// const recipe1 = new recipes("pizza", 4, ["cheese", "tomato sauce", "basil"]);
// const recipe2 = new recipes("pie", 1, ["steak", "cheese"]);

// recipe1.makeRecipes();
// recipe1.showDetails();
// recipe2.makeRecipes();
// recipe2.showDetails();

// const student = {
//   // data property
//   firstName: "Monica",
//   // accessor property(getter)
//   get getName() {
//     return this.firstName;
//   },
//   set setName(name) {
//     return (this.firstName = name);
//   },
// };

// // accessing data property
// console.log(student.firstName); // Monica
// // accessing getter methods
// console.log(student.getName); // Monica
// // trying to access as a method
// //console.log(student.getName()); // error
// student.setName = "James";
// console.log(student.firstName);

// const bankAccount = {
//   bank: 12,
//   branch: 1234,
//   account: 1234567,
//   suffix: 12,

//   set setSuffix(suffixNum) {
//     return (this.suffix = suffixNum);
//   },
// };

// class CarSales {
//   carList = [];

//   set setCarList(carName) {
//     this.carList.push(carName);
//   }

//   get getCarList() {
//     this.carList.length === 0
//       ? console.log("Sorry! We don’t have any cars yet")
//       : console.log(this.carList);
//   }

//   rentCar() {
//     this.carList.pop();
//   }
//   returnCar(carName) {
//     this.carList.push(carName);
//   }
// }

// const carList1 = new CarSales();
// carList1.setCarList = "Alfa Romeo";
// console.log(carList1.carList);
// carList1.setCarList = "Ferrari";
// console.log(carList1.carList);
// carList1.rentCar();
// console.log(carList1.carList);
