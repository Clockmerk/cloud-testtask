import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

export const formSlice = createSlice({
  name: "form",
  initialState: initialState.form,
  reducers: {
    setUpForm: (_, action) => {
      return action.payload;
    },
    clearForm: () => {
      return initialState.form;
    },
    setCheckboxes: (state, action) => {
      const checkbox = state.checkbox?.find(
        (element) => element === action.payload
      );

      if (checkbox) {
        return {
          ...state,
          checkbox: state.checkbox.filter(
            (element) => element !== action.payload
          ),
        };
      }

      state.checkbox.push(action.payload);
    },
  },
});

export const { setUpForm, clearForm, setCheckboxes } = formSlice.actions;
export const formReducer = formSlice.reducer;
