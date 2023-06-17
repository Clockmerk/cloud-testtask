import { ErrorMessage, Field, FieldArray } from "formik";
import s from "./secondform.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUpForm } from "../../redux/slices/formSlice";
import { useAppSelector } from "../../redux/store";
import { FormValuesType } from "../../types/types";

export const SecondForm = (values: FormValuesType) => {
  const formData = useAppSelector((state) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUpForm({ ...formData, advantages: values.advantages }));
  }, [values.advantages]);

  return (
    <div className={s.secondform}>
      <FieldArray name="advantages">
        {({ remove, push }) => (
          <div>
            <label htmlFor="advantages">Advantages</label>
            {values.advantages.length > 0 &&
              values.advantages.map((element: string, index: number) => (
                <div id="advantages" className={s.secondform_array} key={index}>
                  <div>
                    <Field
                      name={`advantages.${index}`}
                      className="advantage"
                      placeholder="Placeholder"
                      type="text"
                      value={element}
                    />
                  </div>
                  <div>
                    <button type="button" onClick={() => remove(index)}>
                      X
                    </button>
                  </div>
                </div>
              ))}
            <button type="button" onClick={() => push("")}>
              +
            </button>
            <ErrorMessage name="advantages" component="p" className={s.error} />
            <ErrorMessage name="advantage" component="p" className={s.error} />
          </div>
        )}
      </FieldArray>
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
