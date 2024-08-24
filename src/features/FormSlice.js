import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forms: [],
  form: { fields: [] },
};

export const formSlice = createSlice({
  initialState,
  name: "formSlice",
  reducers: {
    addFormField: (state, action) => {
      console.log(action.payload);
      state.form.fields = [...action.payload];
    },
    addFormName: (state, action) => {
      state.form.name = action.payload;
    },
    updateForm: (state, action) => {
      state.form = action.payload;
    },
    addForms: (state, action) => {
      console.log(action.payload);
      state.forms = action.payload;
      localStorage.setItem("formsData", JSON.stringify(state.forms));
    },
  },
});

export const { addFormField, addForms, updateForm } = formSlice.actions;
export default formSlice.reducer;
