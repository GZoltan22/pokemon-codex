import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import Cards from "./Cards";

function PokemonTypesCardItem({ type }) {
  const [pokemonsByType, setPokemonsByType] = useState([]);

  useEffect(() => {
    const getPokemonsByType = async () => {
      const pokemonsByTypeFromServer = await fetchPokemonsByType();
      setPokemonsByType(pokemonsByTypeFromServer.pokemon.slice(0, 20));
    };
    getPokemonsByType();
  }, []);

  // Fetch Pokemons
  const fetchPokemonsByType = async () => {
    const res = await fetch(type.url);
    const data = await res.json();

    return data;
  };
  console.log(type);
  return pokemonsByType.length > 0 ? (
    <div>
      <Cards pokemons={pokemonsByType} />
    </div>
  ) : (
    <> </>
  );
}

export default PokemonTypesCardItem;
