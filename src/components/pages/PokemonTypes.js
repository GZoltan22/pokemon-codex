import "../../App.css";
import PokemonTypesCards from "../PokemonTypesCards";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";

function PokemonTypes() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      const typesFromServer = await fetchTypes();
      setTypes(typesFromServer.results);
    };
    getTypes();
  }, [setTypes]);

  // Fetch Pokemons
  const fetchTypes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type");
    const data = await res.json();

    return data;
  };
  return (
    <>
      <PokemonTypesCards types={types} />
      <Footer />
    </>
  );
}

export default PokemonTypes;
