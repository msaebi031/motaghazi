import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: [],
  count: 24,
};

const cartSlice = createSlice({
  name: "demand",
  initialState,
  reducers: {
    addDataDemand: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    changeCount: (state, action) => {
      state.count = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.demand.data;
    },
  },
});

export const { addDataDemand, changeCount } = cartSlice.actions;

export default cartSlice.reducer;
