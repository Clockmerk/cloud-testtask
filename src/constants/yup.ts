import * as Yup from "yup";

export const $regexPhone = /^((\+7)(\(?\d{3}\)?[\ ]?)?[\d\- ]{9})/g;
//const $regexPhoneAdditional = (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g)
export const formStartSchema = Yup.object().shape({
  phone: Yup.string()
    .matches($regexPhone, "Введите телефон")
    .required("Введите телефон"),
  email: Yup.string().email("Некорректный email").required("Введите почту"),
});

export const formtSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(3, "Минимальная длина - 3 символа")
    .max(30, "Максимальная длина - 30 символов")
    .matches(/^([a-zA-ZA-Яа-я0-9]*)$/g, "Используйте только буквы и цифры")
    .required("Укажите nickname"),
  name: Yup.string()
    .min(3, "Минимальная длина - 3 символа")
    .max(50, "Максимальная длина - 50 символов")
    .matches(/^([a-zA-ZA-Яа-я]*)$/g, "Используйте только буквы")
    .required("Введите name"),
  sername: Yup.string()
    .min(3, "Минимальная длина - 3 символа")
    .max(50, "Максимальная длина - 50 символов")
    .matches(/^([a-zA-ZA-Яа-я]*)$/g, "Используйте только буквы")
    .required("Введите sername"),
  sex: Yup.string().oneOf(["man", "woman"]).required("Укажите пол"),
  advantages: Yup.array()
    .of(Yup.string().required("Заполните поле или удалите его"))
    .required(),
  checkbox: Yup.array().of(Yup.number()),
  radio: Yup.number().required("Выберите пункт"),
  about: Yup.string().max(200).required("Укажите описание"),
});
