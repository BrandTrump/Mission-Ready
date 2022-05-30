function fetchData() {
  fetch("example.json")
    .then((res) => res.json()) // Converting to JSON
    .then((json) => {
      json.map((person) => {
        person.name =
          person.name.charAt(0).toUpperCase() + person.name.slice(1);
        console.log("Person name:", person.name);
      });
    });
}

// function fetchShowData() {
//   fetch("https://reqres.in/api/users")
//     .then((res) => res.json()) // Converting to json
//     .then((jsonData) => {
//       const showDataDiv = document.getElementById("showData");
//       showDataDiv.innerHTML = "";
//       jsonData.data.forEach((user) => {
//         showDataDiv.innerHTML += `<img src=${user.avatar}> <div> ${user.first_name} ${user.last_name}</div>`;
//       });
//     });
// }

// function fetchShowData() {
//   fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
//     .then((res) => res.json()) // Converting to json
//     .then((jsonData) => {
//       const showDataDiv = document.getElementById("showData");
//       showDataDiv.innerHTML = "";
//       jsonData.results.forEach((pokemon) => {
//         const name = pokemon.name;
//         fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//           .then((res) => res.json())
//           .then((json) => {
//             const showDataDiv = document.getElementById("showData");
//             const image = json.sprites.back_default;

//             showDataDiv.innerHTML += `<img src =${image}><div> ${pokemon.name}</div> `;
//             showDataDiv.style.textAlign = "center";
//           });
//       });
//     });
// }

const getCityWeather = () => {
  const city = document.getElementById("cityName").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
  )
    .then((res) => res.json()) // Converting to json
    .then((jsonData) => {
      const showDataDiv = document.getElementById("showCityWeather");
      const temp = jsonData.main.temp;
      const humidity = jsonData.main.humidity;

      showDataDiv.innerHTML = "";
      showDataDiv.innerHTML += `<h1>Weather for ${city}</h1> <h2>Temperature: ${temp}</h2> <h2>Humidity: ${humidity}</h2>`;
    });
};
