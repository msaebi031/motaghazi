// store/configureStore.js

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import category from "../category";
import location from "../location";
import demand from "../demand";
import filter from "../filter";

export const wrapper = createWrapper(() =>
  configureStore({
    reducer: {
      demand,
      category,
      location,
      filter,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  })
);
