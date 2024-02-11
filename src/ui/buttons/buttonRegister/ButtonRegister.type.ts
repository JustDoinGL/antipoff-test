import { FormEvent } from "react";

export type ButtonRegisterProps = {
  text: "Зарегистрироваться";
  disabled: boolean;
  handleClick: (e: FormEvent) => void;
}