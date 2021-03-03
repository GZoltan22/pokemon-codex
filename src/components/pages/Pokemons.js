import React from "react";
import "../../App.css";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import PokemonCards from "../PokemonCards";

export default function Pokemons({ pokemons }) {
  return (
    <>
      <HeroSection />
      <PokemonCards pokemons={pokemons} />
      <Footer />
    </>
  );
}
