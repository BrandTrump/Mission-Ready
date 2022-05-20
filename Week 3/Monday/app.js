// console.log("hello");

// const mystring = "Responsiveness";

// for (let i = 1; i <= mystring.length; i++) {
//   console.log(i);
// }

// let string = "HelloWorld!";

// for (let i = 0; i < string.length; i++) {
//   if (string[i] === "!") {
//     console.log("Error");
//     break;
//   }
//   console.log("Looking at the following letter now " + i);
// }

// const string = "i! a!m! !a! s!t!r!i!n!g";

// for (let i = 0; i < string.length; i++) {
//   if (string[i] === "!") {
//     continue;
//   }
//   console.log(string[i]);
// }

// function myFirstFunciton() {
//   console.log("First function");
// }
// myFirstFunciton();

// function addString(param1, param2) {
//   console.log(param1, param2);
// }

// addString("Hello", "World");
// addString("Toady is", "Monday");

// function combineString(string1, string2) {
//   const combinedString = string1 + string2;
//   // console.log(combinedString);
//   return combinedString;
// }

// console.log(combineString("Toady is", "Tuesday"));

// function checkEmptyString(str) {
//   if (str === "") {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(checkEmptyString("Hello World"));

// const arrowFunciton = (str1, str2) => str1 + str2;

// console.log(arrowFunciton("Hello", "World"));

// const str1 =
//   'The exact phrase she used was "There is no way we will get there in time."';
// const str2 = "Jane's favorite class is english";

// console.log(str1);
// console.log(str2);

// const str1 =
//   'The exact phrase she used was \"There is no way we will get there in time.\"';
// const str2 = "Jane\'s favorite class is english";

// console.log(str1);
// console.log(str2);

// const str1 = "Concentrate all your thoughts";
// const str2 = "upon the work in hand. The sun's rays do not burn";
// const str3 = 'until brought to a focus."';
// const str4 = "— Alexander Graham Bell";

// const fullString = str1 + " " + str2 + " " + str3 + " " + str4;

// console.log(`${fullString}\nString length: ${fullString.length}`);

// function messageCaseConverter(str) {
//   const trimStr = str.trim();
//   if (trimStr.length <= 10) {
//     return trimStr.toUpperCase();
//   } else {
//     return trimStr.toLowerCase();
//   }
// }

// const userMessage = window.prompt("Please enter a sentence");

// alert(messageCaseConverter(userMessage));

// function halfNumber(aNumber) {
//   const halvedNumber = aNumber / 2;
//   console.log(`Half of ${aNumber} is ${halvedNumber}`);
// }

// halfNumber(5);

// function timeInSeconds(minutes) {
//   const seconds = (minutes *= 60);
//   return seconds;
// }

// let userInput = window.prompt("Number of minutes");

// alert(timeInSeconds(parseInt(userInput)));

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(`${person.firstName} ${person.lastName}`);

// const rectangle = {
//   length: 10,
//   width: 5,
// };

// const calcArea = (length, width) => length * width;

// console.log(calcArea(rectangle["length"], rectangle["width"]));

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   favNum: 11,
//   favDay: "Friday",
// };

// console.log(person);

// person.favFood = "Pizza";

// console.log(person);

// delete person.favDay;
// person.favNum *= 2;

// console.log(person);

// const user = {
//   name: "john",
//   age: 5,
//   isAdmin: true,
// };

// for (const key in user) {
//   if (key === "age") {
//     console.log(`${key}: ${user[key]}`);
//   }
// }

// const myFavNumbers = {
//   num1: 6,
//   num2: 23,
//   num3: 24,
// };

// let sum = 0;

// for (const key in myFavNumbers) {
//   sum += myFavNumbers[key];
// }

// console.log(sum);

// const fruits = ["Apple", "Grapes", "Orange"];

// console.log(fruits);

// const numbers = [5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// const avg = sum / numbers.length;
// console.log(avg);

// const objectArray = [
//   { fName: "Brandon", favColor: "Green" },
//   { fName: "John", favColor: "Red" },
// ];

// console.log(objectArray);

// const favRecipe = {
//   title: "Pizza",
//   servings: 2,
//   ingredients: ["mozzarella", "basil", "tomato sauce", "evoo"],
// };

// console.log(favRecipe, favRecipe.ingredients.length);

// favRecipe.ingredients.push("water");

// console.log(favRecipe);

// const favNums = [6, 23, 24];

// const min = Math.min(...favNums);
// const max = Math.max(...favNums);
// const squareMin = Math.sqrt(min);

// console.log(min, max, squareMin);
