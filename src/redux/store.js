// src/redux/store.js

// import configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// import studentReducer
import studentReducer from "./slices/studentSlice";

// create store
const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

//export store
export default store;
