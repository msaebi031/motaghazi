// store/configureStore.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import category from "../category";
import location from "../location";
import demand from "../demand";
import filter from "../filter";
import showdemand from "../showdemand";

const reducers = {
  demand,
  category,
  location,
  filter,
  showdemand,
};
const combinesReducers = combineReducers(reducers);

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    let nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinesReducers(state, action);
  }
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
  preloadedState: false,
});

const makeStore = () => {
  return store;
};

export const wrapper = createWrapper(makeStore);
