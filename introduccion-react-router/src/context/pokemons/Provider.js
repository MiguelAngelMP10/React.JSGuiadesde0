import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";
export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState();

  const [pokemonDetail, setPokemonDetail] = useState({});

  const getPokemons = async () => {
    try {
      let params = {
        url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
      };
      const pokemonsResults = await apiCall(params);
      setPokemons(pokemonsResults.results);
    } catch (error) {
      setPokemons([]);
      console.log(error);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("id es requerido");
    try {
      let params = {
        url: `https://pokeapi.co/api/v2/item/${id}`,
      };
      const pokemonsDetail = await apiCall(params);
      setPokemonDetail(pokemonsDetail);
    } catch (error) {
      setPokemonDetail({});
      console.log(error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{ getPokemons, pokemons, getPokemonDetail, pokemonDetail }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
