import { useContext, useEffect } from "react";

import PokemonContext from "../../context/pokemons";
export default function Home() {
  const { getPokemons, pokemons } = useContext(PokemonContext);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  console.log(pokemons);
  return <div>Home</div>;
}
