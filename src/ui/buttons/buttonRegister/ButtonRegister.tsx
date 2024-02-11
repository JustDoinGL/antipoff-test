import styles from "./ButtonRegister.module.scss";
import { ButtonRegisterProps } from "./ButtonRegister.type";

export const ButtonRegister = ({
  text,
  handleClick,
  disabled,
}: ButtonRegisterProps) => {
  return (
    <button className={styles.button} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};
