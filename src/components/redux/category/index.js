import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { SortCategory } from "../../desktop/Home/Header/Search/Category_Location/Utils/Sort";

const initialState = {
  all: [],
  root: [],
  parent: [],
  open: false,
  label: "دسته بندی ها (همه)",
  select: "",
  show: "",
  bShow: "",
  name: {},
  rootSelect: "",
  i18: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addRootCategory: (state, action) => {
      state.root = [...state.root, { ...action.payload }];
    },
    sortRootCategory: (state) => {
      state.root = SortCategory({ category: state.parent, data: state.root });
    },
    sortParentCategory: (state) => {
      var newArray = [];
      state.parent.map((items) => {
        const data = {
          code: items.code,
          item: SortCategory({ category: state.parent, data: items.item }),
        };
        newArray.push(data);
      });
      state.parent = newArray;
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
    handleChangeRootSelect: (state, action) => {
      state.rootSelect = action.payload;
    },
    handleChangei18: (state, action) => {
      state.i18 = action.payload;
    },
    handleChangeSelect: (state, action) => {
      state.select = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.label = action.payload.category.label;
      state.show = action.payload.category.show;
      state.select = action.payload.category.select;
    });
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
  handleChangeRootSelect,
  handleChangei18,
  handleChangeSelect,
  sortRootCategory,
  sortParentCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
