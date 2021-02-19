import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Pokemons!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* Path TODO
            it should be later on redirect a page where it can show every pokemon in detail*/}
            <CardItem
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              text="Pokemon description comes here. Bulbasaur is a grass and poison type pokemon etc."
              label="Bulbasaur"
              path="services"
            />
            <CardItem
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              text="Pokemon description comes here. Charmander is a fire type pokemon etc."
              label="Charmander"
              path="services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
              text="Pokemon description comes here. Squirtle is a water type pokemon etc."
              label="Squirtle"
              path="services"
            />
            <CardItem
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              text="Pokemon description comes here. Pikachu is a electric type pokemon etc."
              label="Pikachu"
              path="services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
