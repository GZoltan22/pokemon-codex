import React from "react";
import PokemonTypesCardItem from "./PokemonTypesCardItem";
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

function PokemonTypesCards({ types }) {
  return (
    <div>
      {types.map((type, index) => {
        return <PokemonTypesCardItem type={type} key={index} />;
      })}
    </div>
  );
}

export default PokemonTypesCards;
