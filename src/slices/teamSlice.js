import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name: "team",
  initialState: [],
  reducers: {
    addToTeam: (state, action) => {
        //console.log(state.team)
        // const newState = [...state.team, action.payload]
        state.push(action.payload)
        return state
    },
    removeFromTeam: (state, action) => {},
  },
});

export const { addToTeam, removeFromTeam } = teamSlice.actions;

export default teamSlice.reducer;
