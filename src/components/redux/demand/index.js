import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: [],
  count: 24,
  loading: false,
  icon: null,
};

const demandSlice = createSlice({
  name: "demand",
  initialState,
  reducers: {
    addDataDemand: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    resetDataDemand: (state) => {
      state.data = [];
    },
    changeDataDemand: (state, action) => {
      state.data = action.payload;
    },
    changeCount: (state, action) => {
      state.count = action.payload;
    },
    handleChangeLoading: (state, action) => {
      state.loading = action.payload;
    },
    handleChangeIcon: (state, action) => {
      state.icon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.data = action.payload.demand.data;
      state.icon = action.payload.demand.icon;
      state.loading = action.payload.demand.loading;
      state.count = action.payload.demand.count;
    });
  },
});

export const {
  addDataDemand,
  resetDataDemand,
  changeCount,
  changeDataDemand,
  handleChangeLoading,
  handleChangeIcon,
} = demandSlice.actions;

export default demandSlice.reducer;
