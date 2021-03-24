import { useContext } from "react";

import PokemonContext from "../../context/pokemons";
export default function Home() {
  const myContext = useContext(PokemonContext);
  console.log(myContext);
  return <div>Home</div>;
}
