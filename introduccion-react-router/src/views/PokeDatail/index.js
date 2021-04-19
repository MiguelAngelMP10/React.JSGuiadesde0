import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokemonContext from "../../context/pokemons/";

export default function PokeDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail } = useContext(PokemonContext);
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);
  console.log(pokemonDetail);
  return <div>PokeDetail</div>;
}
