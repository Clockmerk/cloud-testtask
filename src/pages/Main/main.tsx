import { MainHeader } from "../../components/MainHeader/mainheader";
import { MainBody } from "../../components/MainBody/mainbody";
import s from "./main.module.css";

export const Main = () => {
  return (
    <div className={s.main}>
      <MainHeader />
      <MainBody />
    </div>
  );
};
