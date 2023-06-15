import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

export const stepSlice = createSlice({
  name: "step",
  initialState: initialState.step,
  reducers: {
    setStep: (_, action) => {
      return action.payload;
    },
  },
});

export const { setStep } = stepSlice.actions;
export const stepReducer = stepSlice.reducer;
