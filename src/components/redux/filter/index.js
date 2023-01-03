import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const cartSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleOpenFilter: (state) => {
      state.open = !state.open;
    },
  },
});

export const { handleOpenFilter } = cartSlice.actions;

export default cartSlice.reducer;
