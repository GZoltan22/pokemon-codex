import React from "react";
import { useParams } from "react-router";

function PokemonDetails() {
  const pathName = window.location.pathname;
  const pokemonID = pathName.split("/").pop();

  const pokemonUrl = `https`;
  return (
    <div>
      <p>PokemonDetails page</p>
    </div>
  );
}

export default PokemonDetails;