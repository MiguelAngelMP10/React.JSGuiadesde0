import { useContext, useEffect } from "react";
import Loading from "../../componets/Loading";

import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
import ErrorMessage from "../../componets/ErrorMessage";

export default function Home() {
  const {
    getPokemons,
    pokemons,
    isLoading,
    hasError,
    errorMessage,
  } = useContext(PokemonContext);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if (isLoading) {
    return <Loading title="Cargando resultados...."></Loading>;
  }

  return (
    <>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}
