import { createSlice } from "@reduxjs/toolkit";

export const pokemonReducer = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: {
        count: 0,
        previous: null,
        next: "",
        results: [],
    },
    loading: false,
  },
  reducers: {
    loadPokemons: (state) => {
      state.loading = true;
    },
    loadPokemonsSuccess: (state: any, action) => {
      state.pokemons = action.payload;
      state.loading = false;
    },
    loadPokemonsFailed: (state) => {
      state.loading = false;
    },

    loadMorePokemons: (state, url ) => {
      state.loading = true;
    },
    loadMorePokemonsSuccess: (state: any, action) => {
      state.pokemons.results = [...state.pokemons.results.concat(action.payload.results)];
      state.pokemons.next= action.payload.next
      state.loading = false;
    },
    loadMorePokemonsFailed: (state) => {
      state.loading = false;
    },


  },
});

export const { 
  //load list actions
  loadPokemons, loadPokemonsSuccess, loadPokemonsFailed,
  // load more in the list actions
  loadMorePokemons, loadMorePokemonsSuccess, loadMorePokemonsFailed
  
  } =
  pokemonReducer.actions;

export default pokemonReducer.reducer;
