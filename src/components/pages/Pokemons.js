import React from "react";
import "../../App.css";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import PokemonsCards from "../PokemonsCards";

export default function Pokemons({ pokemons }) {
  return (
    <>
    {/* Here Comes a searchBar TODO instead of HeroSection */}
      {/* <HeroSection /> */}
      <PokemonsCards pokemons={pokemons} />
      <Footer />
    </>
  );
}
