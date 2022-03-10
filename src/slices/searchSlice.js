import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    loading: false,
    hasErrors: false,
    pokemon: [],
    description: {},
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    getPokemon: (state) => {
      state.loading = true;
    },
    getPokemonSuccess: (state, { payload }) => {
      state.pokemon = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPokemonDescription: (state, { payload }) => {
      state.description = payload;
    },
    getPokemonFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export function fetchPokemon(searchTerm, pokemon) {
  return async (dispatch) => {
    dispatch(getPokemon());
    if (searchTerm.length > 0) {
      try {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`)
          .then((r) => r.json())
          .then((data) => {
            dispatch(getPokemonSuccess(data));
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`)
              .then((r) => r.json())
              .then((description) =>
                dispatch(getPokemonDescription(description))
              );
          });
      } catch (error) {
        dispatch(getPokemonFailure());
      }
    }
  };
}

export const {
  setSearchTerm,
  getPokemon,
  getPokemonDescription,
  getPokemonSuccess,
  getPokemonFailure,
} = searchSlice.actions;

export default searchSlice.reducer;
