import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import s from "./progressbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const ProgressBar = () => {
  const step = useAppSelector((state) => state.step);
  const [progressBar, setProgressBar] = useState(s.progress);

  useEffect(() => {
    if (step === 2) {
      setProgressBar(s.progress_50);
    } else if (step === 3) {
      setProgressBar(s.progress_100);
    } else setProgressBar(s.progress);
  }, [step]);

  return (
    <div className={s.main_bar}>
      <div>
        <div className={progressBar}></div>
      </div>
      <div className={s.progress_circle}>
        <span className={step === 1 ? s.circle_active : s.circle_done}>
          <span className={step === 1 ? s.step_done : s.step_done_visible}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </span>
        <span
          className={
            step === 2 ? s.circle_active : step === 3 ? s.circle_done : s.circle
          }
        >
          <span
            className={
              step === 3
                ? s.step_done_visible
                : step === 2
                ? s.step_done
                : s.step_done
            }
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </span>
        <span className={step === 3 ? s.circle_active : s.circle}></span>
      </div>
      <div className={s.progress_number}>
        <span className={s.number_active}>1</span>
        <span
          className={
            step === 2
              ? s.number_active
              : step === 3
              ? s.number_active
              : s.number
          }
        >
          2
        </span>
        <span className={step === 3 ? s.number_active : s.number}>3</span>
      </div>
    </div>
  );
};
