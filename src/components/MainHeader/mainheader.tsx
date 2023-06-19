import { Link } from "react-router-dom";
import s from "./mainheader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/profile-logo.jpg";
import resume from "../../assets/images/resume.jpg";

export const MainHeader = () => {
  return (
    <div className={s.form_header}>
      <div className={s.form_header_div}>
        <img className={s.form_header_img} src={logo} />
        <div className={s.form_header_textblock}>
          <p className={s.form_header_name}>Денис Сюсин</p>
          <ul className={s.form_header_links}>
            <li>
              <FontAwesomeIcon
                icon={faFolder}
                className={s.form_header_spanIcons}
              />
              <Link to="https://t.me/npc_3" target="_blank">
                Telegram
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFolder}
                className={s.form_header_spanIcons}
              />
              <Link to="https://github.com/clockmerk" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFolder}
                className={s.form_header_spanIcons}
              />
              <Link to={resume} target="_blank">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className={s.form_header_hr} />
    </div>
  );
};
