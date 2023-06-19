import s from "./mainbody.module.css";
import { Form, Formik } from "formik";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearForm, setUpForm } from "../../redux/slices/formSlice";
import { useState } from "react";
import { formStartSchema } from "../constants/yup";
import { FormStart } from "../FormStart/formstart";

export const MainBody = () => {
  const formData = useAppSelector((state) => state.form);
  const [phone, setPhone] = useState(formData.phone);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    phone: formData.phone,
    email: formData.email,
  };

  if (formData.delete === true) {
    dispatch(clearForm());
  }

  const startForm = (values: { phone: string; email: string }) => {
    if (values === initialValues) {
      return navigate("/create");
    }

    dispatch(
      setUpForm({
        checkbox: [],
        advantages: [""],
        ...values,
      })
    );
    navigate("/create");
  };

  const formatPhone = (phone: string) => {
    const digits = phone.replace(/[^0-9]/g, "");
    const shortDigits = phone.search(/[^7]{10}/g);
    const length = digits.length;

    if (
      (digits[0] === "7" || digits[0] === "8") &&
      length <= 1 &&
      phone.length === 1
    ) {
      return `+7(`;
    } else if (
      (digits[0] !== "7" && phone.length === 1) ||
      (digits[0] !== "8" && phone.length === 1)
    ) {
      return `+7(${digits.slice(0, 1)}`;
    } else if (digits[0] === "7" && length === 1) {
      return "";
    } else if (length <= 4) {
      return `+7(${digits.slice(1, 4)}`;
    } else if (length <= 7) {
      return `+7(${digits.slice(1, 4)}) ${digits.slice(4, 7)}`;
    } else if (length <= 9) {
      return `+7(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(
        7,
        9
      )}`;
    } else if (length > 10) {
      return `+7(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(
        7,
        9
      )}-${digits.slice(9, 11)}`;
    } else if (shortDigits === 0 && length === 10) {
      return `+7(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
        6,
        8
      )}-${digits.slice(8, 10)}`;
    }
  };

  const handlePhoneChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (target.name === "phone") {
      const formattedValue = formatPhone(value);
      //@ts-ignore
      setPhone(formattedValue);
    }
  };

  return (
    <div className={s.form_start}>
      <Formik
        initialValues={initialValues}
        onSubmit={startForm}
        validationSchema={formStartSchema}
      >
        <Form className={s.form_start_form} onChange={handlePhoneChange}>
          <FormStart phone={phone} />
        </Form>
      </Formik>
    </div>
  );
};
