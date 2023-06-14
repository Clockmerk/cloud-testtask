import { useNavigate } from "react-router-dom";
import s from "./firstform.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { setUpForm } from "../../redux/slices/formSlice";
import { useDispatch } from "react-redux";

const formStartSchema = Yup.object().shape({
  phone: Yup.string().required("Введите телефон"),
  email: Yup.string().email("Некорректный email").required("Введите почту"),
});

export const FirstForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    nickname: "",
    name: "",
    sername: "",
    sex: "",
  };

  const onSubmit = async (values: any) => {
    dispatch(setUpForm({ ...values }));
    navigate("/create");
  };

  return (
    <div className={s.firstform}>
      <div className={s.firstform_bar}>Progress bar</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formStartSchema}
      >
        <Form className={s.firstform_form}>
          <label htmlFor="field-nickname">Nickname</label>
          <Field id="field-nickname" name="nickname" placeholder="" />
          <ErrorMessage className={s.error} component="span" name="nickname" />
          <label htmlFor="field-name">Name</label>
          <Field id="field-name" name="nickname" placeholder="" />
          <ErrorMessage className={s.error} component="span" name="name" />
          <label htmlFor="field-sername">Sername</label>
          <Field id="field-sername" name="sername" placeholder="" />
          <ErrorMessage className={s.error} component="span" name="sername" />
          <label htmlFor="field-sex">Sex</label>
          <Field id="field-sex" name="sex" placeholder="" />
          <ErrorMessage className={s.error} component="span" name="sex" />
        </Form>
      </Formik>
      <button className={s.firstform_button_back} onClick={() => navigate("/")}>
        Назад
      </button>
    </div>
  );
};
