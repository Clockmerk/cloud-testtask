import { ErrorMessage, Field } from "formik";
import s from "./thirdform.module.css";
import { useAppSelector } from "../../redux/store";

export const ThirdForm = () => {
  const formData = useAppSelector((state) => state.form) 

  return (
    <div className={s.thirdform}>
      <label htmlFor="field-about">About</label>
      <Field id="field-about" name="about" as="textarea" />
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text}>Введите ваше описание. Максимальная длина 200 символов, не учитывая пробелов</span>
      </p>
      <span>{formData.about.split(' ').join('').length|| 0}</span>
      <ErrorMessage className={s.error} component="span" name="about" />
    </div>
  );
};
