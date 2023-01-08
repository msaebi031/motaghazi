import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    open: false,
    openTwo: false,
    data: [],
    skeletons: false,
};

const cartSlice = createSlice({
    name: "showdemand",
    initialState,
    reducers: {
        handleOpenDialog: (state) => {
            state.open = !state.open
        },
        handleOpenDialogTwo: (state) => {
            state.openTwo = !state.openTwo
        },
        addDataRequest: (state, action) => {
            state.data = action.payload;
        },
        handleLoadingSkeleton: (state) => {
            state.skeletons = !state.skeletons
        }
    },


    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.data = action.payload.showdemand.data;
        },
    },
});



export const {
    handleOpenDialog,
    handleOpenDialogTwo,
    addDataRequest,
    handleLoadingSkeleton
} = cartSlice.actions;

export default cartSlice.reducer;
