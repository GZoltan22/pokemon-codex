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
  var idPositionInTheURL = 6;
  return (
    <div>
      {types.map((type) => {
        const typeURL = type.url;
        const typeID = typeURL.split("/")[idPositionInTheURL];
        return (
          <div key={typeID}>
            <PokemonTypesCardItem type={type} />
          </div>
        );
      })}
    </div>
  );
}

export default PokemonTypesCards;
