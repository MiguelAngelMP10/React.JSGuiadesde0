import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";
export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState();
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
  return (
    <PokemonContext.Provider value={{ getPokemons, pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}
