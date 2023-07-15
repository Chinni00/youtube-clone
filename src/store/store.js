import { configureStore } from "@reduxjs/toolkit";
import youTubeSlice from ".";

const store = configureStore({
    reducer:{youtube:youTubeSlice.reducer}
})

export default store;

