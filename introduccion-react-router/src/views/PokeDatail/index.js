import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokemonContext from "../../context/pokemons/";

export default function PokeDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading } = useContext(
    PokemonContext
  );
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);

  if (isLoading) {
    return <p>Cargando Pokemon.....</p>;
  }

  return (
    <div>
      <p>{`Name: ${pokemonDetail?.name}`}</p>
      <p>{`Peso: ${pokemonDetail?.weight}`}</p>
      <p>{`Altura: ${pokemonDetail?.height} cms`}</p>
    </div>
  );
}
