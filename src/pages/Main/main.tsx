import { MainHeader } from "../../components/MainHeader/mainheader";
import { MainFormStart } from "../../components/MainFormStart/mainformstart";
import s from "./main.module.css";

export const Main = () => {
  return (
    <div className={s.main}>
      <MainHeader />
      <MainFormStart />
    </div>
  );
};
