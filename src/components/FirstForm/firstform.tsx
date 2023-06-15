import s from "./firstform.module.css";
import { ErrorMessage, Field } from "formik";

export const FirstForm = () => {
  return (
    <div className={s.firstform}>
      <label htmlFor="field-nickname">Nickname</label>
      <Field id="field-nickname" name="nickname" />
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text}>Введите ваш никнейм</span>
      </p>
      <ErrorMessage className={s.error} component="span" name="nickname" />

      <label htmlFor="field-name">Name</label>
      <Field id="field-name" name="name" />
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text}>Введите ваше имя</span>
      </p>
      <ErrorMessage className={s.error} component="span" name="name" />
      <label htmlFor="field-sername">Sername</label>
      <Field id="field-sername" name="sername" />
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text}>Введите ваше отчество</span>
      </p>
      <ErrorMessage className={s.error} component="span" name="sername" />
      <label htmlFor="field-sex">Sex</label>
      <Field id="field-sex" name="sex" as="select" >
        <option value="" disabled  hidden >
          Не выбрано
        </option>
        <option value="man">man</option>
        <option value="woman">woman</option>
      </Field>
      <p className={s.tooltip}>
        Tip
        <span className={s.tooltip_text}>Укажите ваш пол</span>
      </p>
      <ErrorMessage className={s.error} component="span" name="sex" />
    </div>
  );
};
