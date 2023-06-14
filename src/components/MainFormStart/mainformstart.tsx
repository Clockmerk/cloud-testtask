import s from "./mainformstart.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUpForm } from "../../redux/slices/formSlice";

const formStartSchema = Yup.object().shape({
  phone: Yup.string().required("Введите телефон"),
  email: Yup.string().email("Некорректный email").required("Введите почту"),
});

export const MainFormStart = () => {
  const formData = useAppSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    phone: formData.phone,
    email: formData.email,
  };

  const onSubmit = async (values: any) => {
    dispatch(setUpForm({ ...values }));
    navigate("/create");
  };

  return (
    <div className={s.form_start}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formStartSchema}
      >
        <Form className={s.form_start_form}>
          <label htmlFor="phone">Номер телефона</label>
          <Field id="phone" name="phone" placeholder="+7 999 999-99-99" />
          <ErrorMessage className={s.error} component="span" name="phone" />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="example@email.ru"
            type="email"
          />
          <ErrorMessage className={s.error} component="span" name="email" />
          <button type="submit">Начать</button>
        </Form>
      </Formik>
    </div>
  );
};
