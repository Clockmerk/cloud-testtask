export const LC_redux = "redux-store";

export const initialState = {
  form: {
    email: "",
    phone: "",
  },
};

export const getInitialState = () => {
  const data = localStorage.getItem(LC_redux);

  return data ? JSON.parse(data) : initialState;
};
