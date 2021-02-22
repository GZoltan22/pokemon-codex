import React, { useState, useEffect } from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
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
      <HeroSection />
      <Cards pokemons={pokemons} />
      <Footer />
    </>
  );
}

export default Home;
