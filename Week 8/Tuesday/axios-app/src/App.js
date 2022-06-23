import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) => {
      setPokemon(res.data.results);
    });
  }, []);
  return (
    <div className="App">
      <div className="users">
        {users.map((user, index) => (
          <h3 key={index}>
            <img src={user.avatar} alt="img"></img> {user.first_name}{" "}
            {user.last_name}
          </h3>
        ))}
      </div>
      <div className="pokemon">
        {pokemon.map((pokemon, index) => (
          <h3 key={index}>
            {index + 1}. {pokemon.name}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default App;
