import { Dispatch, SetStateAction } from "react";

export interface FormValuesType {
  email: string;
  phone: string;
  nickname: string;
  name: string;
  sername: string;
  sex: "man" | "woman";
  advantages: string[];
  checkbox: number[];
  radio: number;
  about: string;
  delete: boolean;
}

export interface FormikValuesType {
  nickname: string;
  name: string;
  sername: string;
  sex: "man" | "woman";
  advantages: string[];
  checkbox: string[];
  radio: string;
  about: string;
}

export interface PhoneValueType {
  phone: string | undefined;
}

export interface SetModalType {
  showModal: Dispatch<SetStateAction<boolean>>;
}
