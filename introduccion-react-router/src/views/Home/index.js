import { useContext, useEffect } from "react";

import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
export default function Home() {
  const { getPokemons, pokemons, isLoading } = useContext(PokemonContext);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if (isLoading) {
    return <p>Cargando resultados....</p>;
  }

  return (
    <div>
      <PokemonList pokemons={pokemons}></PokemonList>
    </div>
  );
}
