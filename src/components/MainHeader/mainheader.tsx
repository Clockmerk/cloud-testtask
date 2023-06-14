import { Link } from "react-router-dom";
import s from "./mainheader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/profile-logo.jpg";

export const MainHeader = () => {
  return (
    <div className={s.form_header}>
      <div className={s.form_header_div}>
        <img className={s.form_header_img} src={logo} />
        <div className={s.form_header_textblock}>
          <p className={s.form_header_name}>Денис Сюсин</p>
          <p className={s.form_header_links}>
            <span>
              <FontAwesomeIcon
                icon={faFolder}
                className={s.form_header_spanIcons}
              />
              <Link to="https://t.me/npc_3">Telegram</Link>
            </span>
            <span>
              <FontAwesomeIcon
                icon={faFolder}
                className={s.form_header_spanIcons}
              />
              <Link to="https://github.com/clockmerk">Github</Link>
            </span>
            <span>
              <FontAwesomeIcon
                icon={faFolder}
                className={s.form_header_spanIcons}
              />
              <Link to="http://hh.ru/">Resume</Link>
            </span>
          </p>
        </div>
      </div>
      <hr className={s.form_header_hr} />
    </div>
  );
};
