import { ErrorMessage, Field } from "formik";
import s from "./thirdform.module.css";
import { useAppSelector } from "../../redux/store";

export const ThirdForm = () => {
  const formData = useAppSelector((state) => state.form);

  return (
    <div className={s.thirdform}>
      <label htmlFor="field-about">About</label>
      <Field id="field-about" name="about" as="textarea" maxLength="200" />
      <div>
        <p className={s.tooltip}>
          <span className={s.tooltip_tip}>Tip</span>

          <span className={s.tooltip_text}>
            Максимальная длина 200 символов, не учитывая пробелов
          </span>
          <span>{formData.about?.split(" ").join("").length || 0}/200</span>
        </p>
      </div>

      <ErrorMessage className={s.error} component="span" name="about" />
    </div>
  );
};
