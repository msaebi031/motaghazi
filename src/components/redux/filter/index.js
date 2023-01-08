import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  open: false,
  count: null,
};

const cartSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleOpenFilter: (state) => {
      state.open = !state.open;
    },
    handleChangeCount: (state, action) => {
      state.count = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.count = action.payload.filter.count;
    },
  },
});

export const { handleOpenFilter, handleChangeCount } = cartSlice.actions;

export default cartSlice.reducer;
