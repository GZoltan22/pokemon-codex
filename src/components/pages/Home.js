import React, { useState, useEffect } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPookemons();
      setPokemons(pokemonsFromServer.results);
    };
    getPokemons();
  }, []);

  // Fetch Pokemons TODO
  const fetchPookemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    return data;
  };

  console.log(pokemons.results);
  return (
    <>
<<<<<<< Updated upstream
      <HeroSection> /</HeroSection>
      <Cards />
    </>
  );
}

export default Home;
