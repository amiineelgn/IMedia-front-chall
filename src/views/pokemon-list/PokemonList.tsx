import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as fromPokemonReducer from "../../redux/reducres/PokemonReducer";
import PokemonCard from "../../components/pokemon-card/PokemonCard";
import { RootState } from "../../redux/store";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./PokemonList.scss";

interface IResults {
  name: string;
  url: string
}

function PokemonList() {
  const pokemons = useSelector((state: RootState) => state.pokemons);

  const dsipatch = useDispatch();
  useEffect(() => {
    dsipatch(fromPokemonReducer.loadPokemons());
  }, [dsipatch]);

  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      dsipatch(fromPokemonReducer.loadMorePokemons(pokemons.pokemons.next));
    }
  };
  return (
    <div
      className="main"
      onScroll={handleScroll}
      style={{ overflowY: "scroll", maxHeight: "100vh" }}
    >
      <div data-testid="card-list-test" className="container">
        {pokemons.pokemons.results?.map((el: IResults, index: number) => (
          <div data-testid="pokemon-card" key={index}>
            <PokemonCard key={index} data={el} />
          </div>
        ))}
      </div>
      <div>{pokemons.loading && <CircularProgress />}</div>
    </div>
  );
}

export default PokemonList;
