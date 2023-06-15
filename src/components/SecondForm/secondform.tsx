import { ErrorMessage, Field } from "formik";
import s from "./secondform.module.css";

export const SecondForm = () => {
  return (
    <div className={s.secondform}>
      <label htmlFor="field-advantages">Advantages</label>
      <Field
        id="field-advantages"
        name="advantages"
        className={s.secondform_inputs}
      />
      <ErrorMessage className={s.error} component="span" name="advantages" />

      <label>Checkbox group </label>
      <label htmlFor="field-checkbox-group-1" className={s.secondform_groups}>
        <Field
          id="field-checkbox-group-1"
          name="checkbox"
          type="checkbox"
          value="1"
        />
        1
      </label>
      <label htmlFor="field-checkbox-group-2" className={s.secondform_groups}>
        <Field
          id="field-checkbox-group-2"
          name="checkbox"
          type="checkbox"
          value="2"
        />
        2
      </label>
      <label htmlFor="field-checkbox-group-3" className={s.secondform_groups}>
        <Field
          id="field-checkbox-group-3"
          name="checkbox"
          type="checkbox"
          value="3"
        />
        3
      </label>
      <ErrorMessage className={s.error} component="span" name="checkbox" />

      <label>Radio group </label>
      <label htmlFor="field-radio-group-1" className={s.secondform_groups}>
        <Field type="radio" id="field-radio-group-1" name="radio" value="1" />1
      </label>
      <label htmlFor="field-radio-group-2" className={s.secondform_groups}>
        <Field type="radio" id="field-radio-group-2" name="radio" value="2" />2
      </label>
      <label htmlFor="field-radio-group-3" className={s.secondform_groups}>
        <Field type="radio" id="field-radio-group-3" name="radio" value="3" />3
      </label>

      <ErrorMessage className={s.error} component="span" name="radio" />
    </div>
  );
};
