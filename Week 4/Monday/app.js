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

let current = 0;

function changeColour() {
  let colourArr = ["blue", "green", "orange", "purple", "red", "brown"];

  if (current >= colourArr.length) {
    current = 0;
  }

  document.body.style.background = colourArr[current];
  current++;
}
