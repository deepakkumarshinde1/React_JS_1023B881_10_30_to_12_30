import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combine.reducers";

const store = configureStore({
  reducer,
});

export default store;
