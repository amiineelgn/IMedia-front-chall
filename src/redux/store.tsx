import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./reducres/PokemonReducer";
import createSagaMiddleware from "@redux-saga/core";
import pokemonSaga from "./sagas/PokemonSaga";


const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
  middleware: [saga],
});

saga.run(pokemonSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
