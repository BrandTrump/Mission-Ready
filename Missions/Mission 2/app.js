const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const compareButton = document.getElementById("compareButton");

const leftCompare = document
  .getElementById("left-comparison")
  .querySelector("h3");
const rightCompare = document
  .getElementById("right-comparison")
  .querySelector("h3");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

const infoF40 = {
  acceleration: 4.1,
  quarterMile: 11.9,
  mile: 20.9,
};

const infoF50 = {
  acceleration: 3.87,
  quarterMile: 11.5,
  mile: 21.7,
};

function compareCars(car1, car2) {
  const keys1 = Object.keys(car1);

  for (const key of keys1) {
    if (car1[key] < car2[key]) {
      leftCompare.innerHTML += `The F40 has a faster ${key} time of: ${car1[key]} <br><br>`;
      leftCompare.style.animation = "display-comparison 0.3s ease-in";
    } else {
      console.log(`The F50 has a faster time of: ${car2[key]}`);
      rightCompare.innerHTML += `The F50 has a faster ${key} time of: ${car2[key]} <br><br>`;
      rightCompare.style.animation = "display-comparison 0.3s ease-in";
    }
  }
  document.body.style.animation = "comparison-bg 0.3s ease-in forwards";
  compareButton.disabled = true;
}
