import { FirstForm } from "../../components/FirstForm/firstform";
import { SecondForm } from "../../components/SecondForm/secondform";
import { ThirdForm } from "../../components/ThirdForm/thirdform";
import s from "./formconstruct.module.css";
import { useAppSelector } from "../../redux/store";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUpForm } from "../../redux/slices/formSlice";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { setStep } from "../../redux/slices/stepReducer";
import { ProgressBar } from "../../components/ProgressBar/progressbar";

const formFirstSchema = Yup.object().shape({
  nickname: Yup.string().required("Укажите nickname"),
  name: Yup.string().required("Введите name"),
  sername: Yup.string().required("Введите sername"),
  sex: Yup.string().required("Укажите пол"),
  // advantages: Yup.array().required("Укажите преимущества"),
  // checkbox: Yup.array().required("Укажите пункты"),
  // radio: Yup.number().required("Выберите пункт"),
  // about: Yup.string().required("Укажите описание"),
});

export const FormConstruct = () => {
  const step = useAppSelector((state) => state.step);
  const formData = useAppSelector((state) => state.form);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!formData.phone) {
    dispatch(setStep(1))
    return <Navigate to="/" />;
  }

  const initialValues = {
    nickname: formData.nickname,
    name: formData.name,
    sername: formData.sername,
    sex: formData.sex,
    advantages: formData.advantages,
    checkbox: formData.checkbox,
    radio: formData.radio,
    about: formData.about,
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/");
    } else dispatch(setStep(step - 1));
  };

  const handleForth = (values: {}) => {
    dispatch(setUpForm({ ...formData, ...values }));
    dispatch(setStep(step + 1));
  };

  return (
    <div className={s.main}>
      <ProgressBar />
      <Formik
        initialValues={initialValues}
        onSubmit={handleForth}
        validationSchema={formFirstSchema}
      >
        <Form>
          {step === 1 && <FirstForm />}
          {step === 2 && <SecondForm />}
          {step === 3 && <ThirdForm />}
          <div className={s.main_buttons}>
            <button
              type="button"
              className={s.main_button_back}
              onClick={() => handleBack()}
            >
              Back
            </button>
            <button type="submit" className={s.main_button_forth}>
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
