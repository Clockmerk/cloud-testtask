import s from "./modalsuccess.module.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearForm } from "../../redux/slices/formSlice";
import { setStep } from "../../redux/slices/stepReducer";

export const ModalSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    dispatch(clearForm(null));
    dispatch(setStep(1));
    return navigate("/");
  };
  
    return (
        <div className={s.modal_success}>
          <p>Форма успешно отправлена</p>
          <div>
            <span className={s.modal_circle_done}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
          </div>
          <button id="button-to-main" onClick={() => handleExit()}>
            Home
          </button>
        </div>
      )
}