import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function PokemonDetails() {
  const [pokemonRes, setPokemonRes] = useState([]);
  const [name, setName] = useState("");
  const [pokemonId, setpokemonId] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState("");
  const [stats, setStats] = useState({
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    specialAttack: "",
    specialDefense: "",
  });
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [eggGroup, setEggGroup] = useState("");
  const [abilities, setAbilities] = useState("");
  const [genderRatioMale, setGenderRatioMale] = useState("");
  const [genderRatioFemale, setGenderRatioFemale] = useState("");
  const [evs, setEvs] = useState("");
  const [hatchSteps, setHatchSteps] = useState("");

  const { id } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

  let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
  useEffect(() => {
    axios.get(pokemonUrl).then((response) => {
      setPokemonRes(response.data);
      setName(response.data.name);
      setImgUrl(response.data.sprites.other["official-artwork"].front_default);
      setpokemonId(id);

      response.data.stats.map((stat) => {
        switch (stat.stat.name) {
          case "hp":
            setStats((prevValues) => {
              return { ...prevValues, hp: stat["base_stat"] };
            });
            break;
          case "attack":
            setStats((prevValues) => {
              return { ...prevValues, attack: stat["base_stat"] };
            });
            break;
          case "defense":
            setStats((prevValues) => {
              return { ...prevValues, defense: stat["base_stat"] };
            });
            break;
          case "speed":
            setStats((prevValues) => {
              return { ...prevValues, speed: stat["base_stat"] };
            });
            break;
          case "special-attack":
            setStats((prevValues) => {
              return { ...prevValues, specialAttack: stat["base_stat"] };
            });
            break;
          case "special-defense":
            setStats((prevValues) => {
              return { ...prevValues, specialDefense: stat["base_stat"] };
            });
            break;
          default:
            setStats((prevValues) => {
              return { ...prevValues };
            });
            break;
        }
      });
    });
  }, []);

  return (
    <div>
      <p>PokemonDetails page</p>
      <h1>{name}</h1>
    </div>
  );
}

export default PokemonDetails;
