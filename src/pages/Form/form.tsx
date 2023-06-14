import { useState } from "react";
import { FirstForm } from "../../components/FirstForm/firstform";
import { SecondForm } from "../../components/SecondForm/secondform";
import { ThirdForm } from "../../components/ThirdForm/thirdform";
import s from "./form.module.css";

export const Form = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={s.main}>
      {step === 1 && <FirstForm />}
      {step === 2 && <SecondForm />}
      {step === 3 && <ThirdForm />}
    </div>
  );
};
