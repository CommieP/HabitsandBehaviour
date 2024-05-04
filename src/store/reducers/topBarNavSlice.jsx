import { createSlice } from "@reduxjs/toolkit";


const topBarNavSlice = createSlice({
    name: "topBarNav",
    initialState : {
        value: 0
    },
    reducers : {
        navigateTopBar : (state, action) => {
            state.value = action.payload
        }
    }
})

export const topBarNavActions = topBarNavSlice.actions;

export default topBarNavSlice.reducer;