import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    loading: false,
    hasErrors: false,
    pokemon: [],
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
    getPokemonFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export function fetchPokemon(searchTerm) {
  return async (dispatch) => {
    dispatch(getPokemon());
    if (searchTerm.length > 0) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`
        );
        const data = await response.json();

        dispatch(getPokemonSuccess(data));
      } catch (error) {
        dispatch(getPokemonFailure());
      }
    }
  };
}

export const {
  setSearchTerm,
  getPokemon,
  getPokemonSuccess,
  getPokemonFailure,
} = searchSlice.actions;

export default searchSlice.reducer;
