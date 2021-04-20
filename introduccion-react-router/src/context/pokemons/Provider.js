import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";
export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState();
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getPokemons = async () => {
    try {
      setIsLoading(true);

      setErrorMessage("");
      setHasError(false);

      let params = {
        url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
      };
      const pokemonsResults = await apiCall(params);
      setPokemons(pokemonsResults.results);
    } catch (error) {
      setPokemons([]);
      setErrorMessage("Algo ha pasado, verifica tu conexion");
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("id es requerido");
    try {
      setIsLoading(true);

      setErrorMessage("");
      setHasError(false);

      let params = {
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      };
      const pokemonsDetail = await apiCall(params);
      setPokemonDetail(pokemonsDetail);
    } catch (error) {
      setPokemonDetail({});
      setErrorMessage("Algo ha pasado, verifica tu conexion");
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
