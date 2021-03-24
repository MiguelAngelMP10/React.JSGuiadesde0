import PokemonContext from "./index";
export default function PokemonProvider({ children }) {
  return (
    <PokemonContext.Provider value={{ showAler: () => alert(10) }}>
      {children}
    </PokemonContext.Provider>
  );
}
