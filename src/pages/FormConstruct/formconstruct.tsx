import { FirstForm } from "../../components/FirstForm/firstform";
import { SecondForm } from "../../components/SecondForm/secondform";
import { ThirdForm } from "../../components/ThirdForm/thirdform";
import s from "./formconstruct.module.css";
import { useAppSelector } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCheckboxes, setUpForm } from "../../redux/slices/formSlice";
import { Formik, Form } from "formik";
import { setStep } from "../../redux/slices/stepReducer";
import { ProgressBar } from "../../components/ProgressBar/progressbar";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useSubmitFormMutation } from "../../redux/slices/apiSlice";
import { StepButtons } from "../../components/StepButtons/stepbuttons";
import { ModalSuccess } from "../../components/ModalSuccess/modalsuccess";
import { ModalFail } from "../../components/ModalFail/modalfail";
import { formtSchema } from "../../constants/yup";

export const FormConstruct = () => {
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const step = useAppSelector((state) => state.step);
  const formData = useAppSelector((state) => state.form);
  const dispatch = useDispatch();

  if (!formData.phone) {
    dispatch(setStep(1));
    return <Navigate to="/" />;
  }

  const checkboxesString: [string] = [""];
  formData.checkbox?.forEach((el) => checkboxesString.push(el.toString()));

  const initialValues = {
    nickname: formData.nickname,
    name: formData.name,
    sername: formData.sername,
    sex: formData.sex,
    advantages: [...formData.advantages],
    checkbox: checkboxesString,
    radio: formData.radio?.toString(),
    about: formData.about,
  };

  const handleValues = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const field = target.name;

    if (
      field !== "checkbox" &&
      field !== "radio" &&
      target.className !== "advantage"
    ) {
      dispatch(setUpForm({ ...formData, [field]: value }));
    }

    if (field === "radio") {
      const numberValue = Number(value);
      dispatch(setUpForm({ ...formData, [field]: numberValue }));
    }

    if (field === "checkbox") {
      const numberValue = Number(value);
      dispatch(setCheckboxes(numberValue));
    }

    if (field === "about") {
      dispatch(setUpForm({ ...formData, [field]: value.trim() }));
    }
  };

  const [submitForm] = useSubmitFormMutation();

  const onSubmit = async () => {
    const res = await submitForm(formData).unwrap();

    if (res.status === "success") {
      setSuccess(true);
      setShowModal(true);
      return dispatch(setUpForm({ ...formData, delete: true }));
    }
    return setShowModal(true);
  };

  return (
    <div className={s.main}>
      <ProgressBar />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formtSchema}
      >
        {({ values }) => (
          <Form onChange={(e) => handleValues(e)}>
            {step === 1 && <FirstForm />}
            {step === 2 && <SecondForm {...values} />}
            {step === 3 && <ThirdForm />}
            <div className={s.main_buttons}>
              <StepButtons />
            </div>
          </Form>
        )}
      </Formik>
      {showModal &&
        createPortal(
          <div className={s.modalBack}>
            <div className={s.modal}>
              {success && <ModalSuccess />}
              {!success && <ModalFail showModal={setShowModal} />}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
