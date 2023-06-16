import { FormValuesType } from "../types/types";

export const LC_redux = "redux-store";

export const initialState = {
  form: {
    checkbox: [],
  } as unknown as FormValuesType,
  step: 1,
};

export const getInitialState = () => {
  const data = localStorage.getItem(LC_redux);

  return data ? JSON.parse(data) : initialState;
};
