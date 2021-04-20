import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokemonContext from "../../context/pokemons/";
import PokeStats from "./componets/PokeStats";
import Loading from "../../componets/Loading";
import ErrorMessage from "../../componets/ErrorMessage";

export default function PokeDetail() {
  const { id } = useParams();
  const {
    getPokemonDetail,
    pokemonDetail,
    isLoading,
    hasError,
    errorMessage,
  } = useContext(PokemonContext);
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);

  if (isLoading) {
    return <Loading tile="Cargando Pokemon....."></Loading>;
  }

  return (
    <div>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <div>
          <h3 style={{ marginTop: 15, marginBottom: 15 }}>Info General</h3>

          <p>{`Name: ${pokemonDetail?.name}`}</p>
          <p>{`Peso: ${pokemonDetail?.weight}`}</p>
          <p>{`Altura: ${pokemonDetail?.height} cms`}</p>

          <div>
            <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilidades</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []}></PokeStats>
          </div>
        </div>
      )}
    </div>
  );
}
