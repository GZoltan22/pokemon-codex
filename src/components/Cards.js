import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Cards({ pokemons }) {
  var idPositionInTheURL = 6;

  return (
    <div className="cards">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: false }}
        // scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={console.log("slide change")}
        observer={true}
        observeParents={true}
      >
        <h1>Check out these EPIC Pokemons!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {/* Path TODO
            it should be later on redirect a page where it can show every pokemon in detail*/}
              {pokemons.map((pokemon) => {
                const pokemonURL = pokemon.url;
                const pokemonID = pokemonURL.split("/")[idPositionInTheURL];
                return (
                  <SwiperSlide>
                    <CardItem
                      pokemon={pokemon}
                      key={pokemonID}
                      text="Pokemon description comes here."
                      label={pokemon.name}
                      path=""
                      id={pokemonID}
                    />
                  </SwiperSlide>
                );
              })}
              ;
            </ul>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Cards;
