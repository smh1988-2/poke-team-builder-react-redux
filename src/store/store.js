import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import teamReducer from "../slices/teamSlice";

export default configureStore({
    reducer: {
        search: searchReducer,
        team: teamReducer,
    }
})