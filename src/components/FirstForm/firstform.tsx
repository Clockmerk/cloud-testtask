import s from "./firstform.module.css";
import { ErrorMessage, Field } from "formik";

export const FirstForm = () => {
  return (
    <div className={s.firstform}>
      <label htmlFor="field-nickname">Nickname</label>
      <Field id="field-nickname" name="nickname" />
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text_big}>
          Максимальная длина 30 символов, буквы и цифры (спец символы запрещены)
        </span>
      </p>
      <ErrorMessage className={s.error} component="span" name="nickname" />

      <label htmlFor="field-name">Name</label>
      <Field id="field-name" name="name" />
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text_medium}>
          Максимальная длина 50 символов, только буквы
        </span>
      </p>
      <ErrorMessage className={s.error} component="span" name="name" />
      <label htmlFor="field-sername">Sername</label>
      <Field id="field-sername" name="sername" />
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text_medium}>
          Максимальная длина 50 символов, только буквы
        </span>
      </p>
      <ErrorMessage className={s.error} component="span" name="sername" />
      <label htmlFor="field-sex">Sex</label>
      <Field id="field-sex" name="sex" as="select" defaultValue="Не выбрано">
        <option value="Не выбрано" disabled hidden>
          Не выбрано
        </option>
        <option id="field-sex-option-man" value="man">
          man
        </option>
        <option id="field-sex-option-woman" value="woman">
          woman
        </option>
      </Field>
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text}>Укажите ваш пол</span>
      </p>
      <ErrorMessage className={s.error} component="span" name="sex" />
    </div>
  );
};
