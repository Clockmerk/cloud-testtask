import { ErrorMessage, Field, useFormikContext } from "formik";
import s from "./formstart.module.css";
import { $regexPhone } from "../constants/yup";
import { PhoneValueType } from "../../types/types";


export const FormStart = ({ phone }: PhoneValueType) => {
  const formikProps= useFormikContext()
  const values: {phone:string} = formikProps.values as {phone:string};
  const phoneFormik = values.phone;


  if (phone?.search($regexPhone) === 0 && phoneFormik?.search($regexPhone)) {
    formikProps.setFieldValue("phone", phone);
  }

  return (
    <>
      <label htmlFor="field-phone">Номер телефона</label>
      <Field
        id="field-phone"
        name="phone"
        placeholder="+7(999) 999-99-99"
        type="tel"
        value={phone}
        maxLength="17"
      />
      <ErrorMessage className={s.error} component="span" name="phone" />
      <label htmlFor="field-email">Email</label>
      <Field
        id="field-email"
        name="email"
        placeholder="example@email.com"
        type="email"
      />
      <ErrorMessage className={s.error} component="span" name="email" />
      <button type="submit">Apply</button>
    </>
  );
};
