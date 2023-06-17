import s from "./stepbuttons.module.css";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/slices/stepReducer";

export const StepButtons = () => {
  const step = useAppSelector((state) => state.step);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    if (step === 1) {
      navigate("/");
    } else dispatch(setStep(step - 1));
  };

  const handleForth = () => {
    dispatch(setStep(step + 1));
  };
  return (
    <>
      <button
        type="button"
        className={s.main_button_back}
        onClick={() => handleBack()}
      >
        Back
      </button>
      {step === 3 && (
        <button type="submit" className={s.main_button_forth}>
          Send
        </button>
      )}
      {step !== 3 && (
        <button
          type="button"
          className={s.main_button_forth}
          onClick={() => handleForth()}
        >
          Next
        </button>
      )}
    </>
  );
};
