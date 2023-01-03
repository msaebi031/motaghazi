import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  provinces: [],
  cities: [],
  neighbourhoods: [],
  open: false,
  label: "ایران (همه)",
  show: "",
  last: "",
  bShow: "",
  name: {},
};

const cartSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    handleOpenLocation: (state, action) => {
      state.open = !state.open;
    },
    addAllLocation: (state, action) => {
      state.all = [...state.all, ...action.payload];
    },
    addProvincesLocation: (state, action) => {
      state.provinces = [{ ...action.payload }, ...state.provinces];
    },
    addCitiesLocation: (state, action) => {
      state.cities = action.payload;
    },
    addNeighbourhoodsLocation: (state, action) => {
      state.neighbourhoods = action.payload;
    },
    handleChangeLabelLocation: (state, action) => {
      state.label = action.payload;
    },
    handleChangeShowLocation: (state, action) => {
      state.last = state.show ?? "";
      state.show = action.payload;
    },
    handleChangeBShowLocation: (state, action) => {
      state.bShow = action.payload;
    },
    handleChangeNameLocation: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  addCitiesLocation,
  addProvincesLocation,
  addNeighbourhoodsLocation,
  addAllLocation,
  handleOpenLocation,
  handleChangeLabelLocation,
  handleChangeShowLocation,
  handleChangeBShowLocation,
  handleChangeNameLocation,
} = cartSlice.actions;

export default cartSlice.reducer;
