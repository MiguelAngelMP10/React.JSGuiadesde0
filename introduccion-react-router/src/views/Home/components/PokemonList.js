import PokemonListItem from "./PokemonListItem";

export default function PokemonList({ pokemons }) {
  return (
    <div>
      {pokemons?.map((pokemon, index) => (
        <PokemonListItem key={index} {...pokemon}></PokemonListItem>
      ))}
    </div>
  );
}
