import { Dispatch, SetStateAction } from "react";

export interface FormValuesType {
  email: string;
  phone: string;
  nickname: string;
  name: string;
  sername: string;
  sex: "man" | "woman";
  advantages: [string];
  checkbox: [number];
  radio: number;
  about: string;
}

export interface SetModalType {
  showModal: Dispatch<SetStateAction<boolean>>;
}
