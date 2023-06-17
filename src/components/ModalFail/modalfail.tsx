import s from "./modalfail.module.css";
import { faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetModalType } from "../../types/types";

export const ModalFail = ({ showModal }: SetModalType) => {
  return (
    <div className={s.modal_fail}>
      <div className={s.modal_fail_head}>
        <p>Ошибка</p>
        <button className={s.modal_fail_xmark} onClick={() => showModal(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className={s.modal_fail_symbol}>
        <span className={s.modal_circle_fail}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
      </div>
      <div className={s.modal_fail_button_div}>
        <button
          className={s.modal_fail_button}
          id="button-close"
          onClick={() => showModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
