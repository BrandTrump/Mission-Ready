const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

function calcBMI(weight, height) {
  const BMI = weight / (height * height);
  return BMI;
}

const markBMI = calcBMI(markWeight, markHeight);
const johnBMI = calcBMI(johnWeight, johnHeight);

if (calcBMI(markWeight, markHeight) > calcBMI(johnWeight, johnHeight)) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

console.log(markBMI);
console.log(johnBMI);

// const dolphinScore = [44, 23, 71];
// const koalaScore = [65, 54, 49];

// function calcScore(score) {
//   const totalScore = (score[0] + score[1] + score[2]) / 3;
//   return totalScore;
// }

// // Arrow Function
// const calcScore = (score) => (score[0] + score[1] + score[2]) / 3;

// const avgDoplhins = calcScore(dolphinScore);
// const avgKoala = calcScore(koalaScore);

// function checkWinner(avgDoplhins, avgKoala) {
//   if (avgDoplhins > avgKoala * 2) {
//     console.log(`Dolphins win ${avgDoplhins} vs. ${avgKoala}`);
//   } else if (avgKoala > avgDoplhins * 2) {
//     console.log(`Koalas win ${avgKoala} vs. ${avgDoplhins}`);
//   } else {
//     console.log("No team wins");
//   }
// }

// console.log(checkWinner(avgDoplhins, avgKoala));

// if (
//   calcScore(dolphinScore) > calcScore(koalaScore) &&
//   calcScore(dolphinScore) >= 100
// ) {
//   console.log("Dophins have a higher score");
// } else if (
//   calcScore(dolphinScore) < calcScore(koalaScore) &&
//   calcScore(koalaScore) >= 100
// ) {
//   console.log("Koalas have a higher score");
// } else if (
//   calcScore(dolphinScore) === calcScore(koalaScore) &&
//   calcScore(dolphinScore) > 100 &&
//   calcScore(koalaScore) > 100
// ) {
//   console.log("There was a draw");
// } else {
//   console.log("No team wins");
// }

// console.log(calcScore(dolphinScore));
// console.log(calcScore(koalaScore));

// const bill = 40;

// function calcTip(totalBill) {
//   totalBill >= 50 && totalBill <= 300
//     ? console.log(
//         `The bill was ${totalBill}, the tip was ${
//           totalBill * 0.15
//         }, and the total value ${totalBill * 1.15}`
//       )
//     : console.log(
//         `The bill was ${totalBill}, the tip was ${
//           totalBill * 0.2
//         }, and the total value was ${totalBill * 1.2}`
//       );
// }

// console.log(calcTip(bill));
