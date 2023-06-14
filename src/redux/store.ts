import { configureStore } from "@reduxjs/toolkit";
import { LC_redux, getInitialState } from "./initialState";
import { formReducer } from "./slices/formSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: getInitialState(),
});

store.subscribe(() => {
  localStorage.setItem(LC_redux, JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
