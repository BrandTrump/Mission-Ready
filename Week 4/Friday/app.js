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

function fetchShowData() {
  fetch("example.json")
    .then((res) => res.json()) // converting to json
    .then((jsonData) => {
      const showDataDiv = document.getElementById("showData");
      showDataDiv.innerHTML = "";
      jsonData.forEach((person) => {
        person.name =
          person.name.charAt(0).toUpperCase() + person.name.slice(1);
        showDataDiv.innerHTML += `<li> ${person.name}  </li>`;
      });
    });
}
