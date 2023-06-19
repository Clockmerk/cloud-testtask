import { ErrorMessage, Field, FieldArray } from "formik";
import s from "./secondform.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUpForm } from "../../redux/slices/formSlice";
import { useAppSelector } from "../../redux/store";
import { FormikValuesType } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const SecondForm = (values: FormikValuesType) => {
  const formData = useAppSelector((state) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUpForm({ ...formData, advantages: values.advantages }));
  }, [values.advantages]);

  return (
    <div className={s.secondform}>
      <FieldArray name="advantages">
        {({ remove, push }) => (
          <div className={s.secondform_array}>
            <label htmlFor="advantages">Advantages</label>
            {values.advantages.length > 0 &&
              values.advantages.map((element: string, index: number) => (
                <>
                  <div
                    id={`field-advantages-${index}`}
                    className={s.secondform_array_input}
                    key={`advantage-${index}`}
                  >
                    <Field
                      id={`field-advantages-${index}`}
                      name={`advantages.${index}`}
                      className="advantage"
                      type="text"
                      value={element}
                    />
                    <button
                      id={`button-remove-${index}`}
                      className={s.button_remove}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <ErrorMessage
                    name={`advantages.${index}`}
                    component="span"
                    className={s.error}
                  />
                </>
              ))}
            <button
              id="button-remove-add"
              className={s.button_add}
              type="button"
              onClick={() => push("")}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        )}
      </FieldArray>

      <label className={s.groups_head_label}>Checkbox group </label>
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

      <label className={s.groups_head_label}>Radio group </label>
      <label htmlFor="field-radio-group-1" className={s.secondform_groups}>
        <Field type="radio" id="field-radio-group-1" name="radio" value="1" />1
      </label>
      <label htmlFor="field-radio-group-2" className={s.secondform_groups}>
        <Field type="radio" id="field-radio-group-2" name="radio" value="2" />2
      </label>
      <label htmlFor="field-radio-group-3" className={s.secondform_groups}>
        <Field type="radio" id="field-radio-group-3" name="radio" value="3" />3
      </label>

      <ErrorMessage className={s.error} component="p" name="radio" />
    </div>
  );
};
