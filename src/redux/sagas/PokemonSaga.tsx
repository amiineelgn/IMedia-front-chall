import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as fromPokemonReducer from "../reducres/PokemonReducer";

function* getPokemonsFetch(): any {
  try {
    const pokemons = yield call(() =>
      fetch("https://pokeapi.co/api/v2/pokemon")
    );
    const formatPokesmons = yield pokemons.json();
    yield put(fromPokemonReducer.loadPokemonsSuccess(formatPokesmons));
  } catch (e) {
    yield put(fromPokemonReducer.loadPokemonsFailed());
  }
}

export function* loadMorePokemonListSaga(url: any): any {
  yield delay(400);
  try {
    const response = yield call(() => fetch(url.payload));
    const formatPokesmons = yield response.json();

    yield delay(1000);
    yield put(fromPokemonReducer.loadMorePokemonsSuccess(formatPokesmons));
  } catch (error) {
    yield put(fromPokemonReducer.loadMorePokemonsFailed());
  }
}

function* pokemonSaga() {
  yield takeEvery("pokemons/loadPokemons", getPokemonsFetch);
  yield takeLatest("pokemons/loadMorePokemons", loadMorePokemonListSaga);
}

export default pokemonSaga;
