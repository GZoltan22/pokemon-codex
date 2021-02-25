import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Pokemons from "./components/pages/Pokemons";
import PokemonDetails from "./components/pages/PokemonDetails";
import React, { useState, useEffect } from "react";
import PokemonTypes from "./components/pages/PokemonTypes";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPookemons();
      setPokemons(pokemonsFromServer.results);
    };
    getPokemons();
  }, []);

  // Fetch Pokemons
  const fetchPookemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    return data;
  }; 
  return (
    <>
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <Home pokemons={pokemons} />
            </Route>
            <Route path="/pokemonTypes" component={PokemonTypes}  />
            <Route path="/pokemons">
              <Pokemons pokemons={pokemons}/>
            </Route>
            <Route path="/pokemon/:id" component={PokemonDetails} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
