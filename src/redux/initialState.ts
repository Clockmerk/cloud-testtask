export const LC_redux = "redux-store";

export const initialState = {
  form: {
    email: "",
    phone: "",
    nickname: "",
    name: "",
    sername: "",
    sex: "",
    advantages: [],
    checkbox: [],
    radio: 0,
    about: "",
  },
  step: 1,
};

export const getInitialState = () => {
  const data = localStorage.getItem(LC_redux);

  return data ? JSON.parse(data) : initialState;
};
