import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name: "team",
  initialState: [],
  reducers: {
    addToTeam: (state, action) => {
      if (state.length < 6) {
        state.push(action.payload);
        return state;
      }
    },
    removeFromTeam: (state, action) => {
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    },
  },
});

export const { addToTeam, removeFromTeam } = teamSlice.actions;

export default teamSlice.reducer;
