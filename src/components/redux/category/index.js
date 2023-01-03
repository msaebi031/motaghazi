import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  root: [],
  parent: [],
  open: false,
  label: "دسته بندی ها (همه)",
  show: "",
  bShow: "",
  name: {},
};

const cartSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addRootCategory: (state, action) => {
      state.root = [{ ...action.payload }, ...state.root];
    },
    addAllCategory: (state, action) => {
      state.all = action.payload;
    },
    addParentCategory: (state, action) => {
      state.parent = action.payload;
    },
    handleOpenCategory: (state) => {
      state.open = !state.open;
    },
    handleChangeLabelCategory: (state, action) => {
      state.label = action.payload;
    },
    handleChangeShow: (state, action) => {
      state.bShow = state.show ?? "";
      state.show = action.payload;
    },
    handleChangeBShow: (state, action) => {
      state.bShow = action.payload;
    },
    handleChangeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {
  addRootCategory,
  addAllCategory,
  addParentCategory,
  handleOpenCategory,
  handleChangeLabelCategory,
  handleChangeShow,
  handleChangeBShow,
  handleChangeName,
} = cartSlice.actions;

export default cartSlice.reducer;
