import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";

function PokemonTypesCardItem({ type }) {
  const [pokemonByType, setPokemonByType] = useState([]);

  useEffect(() => {
    const getPokemonByType = async () => {
      const pokemonByTypeFromServer = await fetchPokemonByType();
      setPokemonByType(pokemonByTypeFromServer.pokemon);
    };
    getPokemonByType();
  }, []);

  // Fetch Pokemons
  const fetchPokemonByType = async () => {
    const res = await fetch(type.url);
    const data = await res.json();

    return data;
  };
  console.log(pokemonByType);
  return (
    <div>
      <CardItem />
    </div>
  );
}

export default PokemonTypesCardItem;
