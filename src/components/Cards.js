import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards({ pokemons }) {


  return (
    <div className="cards">
      <h1>Check out these EPIC Pokemons!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* Path TODO
            it should be later on redirect a page where it can show every pokemon in detail*/}
            {pokemons.map((pokemon, index) => {
              const pokemonURL = pokemon.url;
              const pokemonID = pokemonURL.split("/")[6];
              return (
                <CardItem
                  pokemon={pokemon}
                  key={pokemonID}
                  text="Pokemon description comes here."
                  label={pokemon.name}
                  path=""
                  id = {pokemonID}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
