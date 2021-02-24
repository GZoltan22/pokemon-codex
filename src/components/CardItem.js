import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import "swiper/swiper-bundle.css";



function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={`pokemon/${props.id}`}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
              alt="Pokemon"
              className="cards__item__img"
            />
          </figure>
          {/* <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div> */}
        </Link>
      </li>
    </>
  );
}

export default CardItem;
