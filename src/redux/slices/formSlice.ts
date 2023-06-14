import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

export const formSlice = createSlice({
  name: "form",
  initialState: initialState.form,
  reducers: {
    setUpForm: (_, action) => {
      return action.payload;
    },
  },
});

export const { setUpForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
