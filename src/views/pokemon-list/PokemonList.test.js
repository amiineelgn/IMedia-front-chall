import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList"

test('should have a list of pokemon cards  ', () => {
    render(<PokemonList />);
    const cardList = screen.getByTestId('card-list-test')
    const pokemonCard = screen.getByTestId('pokemon-card')
    expect(cardList).toBeInTheDocument();
    expect(cardList).toContainElement(pokemonCard);
    expect(cardList).toHaveClass("container");
})