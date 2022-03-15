import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    loading: false,
    hasErrors: false,
    pokemon: [],
    description: {},
    typeEffectiveness: [],
    team: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.pokemon = []
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
    getPokemonTypeEffectiveness: (state, action) => {
      state.pokemon[state.pokemon.length - 1] = {
        ...(state.pokemon["type_effectiveness"] = action.payload),
      };
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

export function fetchPokemon(searchTerm) {
  return async (dispatch) => {
    dispatch(getPokemon());
    if (searchTerm.length > 0) {
      try {
        // get the basic pokemon info and add it to the store
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`)
          .then((response) => {
            if (response.ok) {
               
          response.json()
          .then((data) => {
            console.log("data",data)
            dispatch(getPokemonSuccess(data));

            // loop through the types (1 or 2) and add them to an array, used in action.payload and appended to the most recent pokemon
            let typeEffectivenessArray = [];
            for (let i = 0; i < data.types.length; i++) {
              fetch(`${data.types[i].type.url}`)
                .then((r) => r.json())
                .then((typeEffectiveness) => {
                  typeEffectivenessArray = [
                    ...typeEffectivenessArray,
                    typeEffectiveness,
                  ];
                  dispatch(getPokemonTypeEffectiveness(typeEffectivenessArray));
                });
            }

            //grab the description and add it to the store
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`)
              .then((r) => r.json())
              .then((description) => {
                dispatch(getPokemonDescription(description));
              });
          });
            } else {
              dispatch(getPokemonFailure());
            }
          }
          
         
          )} catch (error) {
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
  getPokemonTypeEffectiveness,
} = searchSlice.actions;

export default searchSlice.reducer;