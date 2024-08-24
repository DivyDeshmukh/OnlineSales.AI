import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/FormSlice";

const store = configureStore({
  reducer: {
    formsData: formReducer,
  },
});

export default store;
