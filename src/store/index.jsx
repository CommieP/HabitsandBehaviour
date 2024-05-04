import { configureStore } from "@reduxjs/toolkit";

import topBarReducer from "./reducers/topBarNavSlice"

const store = configureStore({
    reducer: {
        topBarNav: topBarReducer
    },
});

export default store;
