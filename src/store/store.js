import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import teamReducer from "../slices/teamSlice";

  const store = configureStore({
    reducer: {
        search: searchReducer,
        team: teamReducer,
    }
})

export default store