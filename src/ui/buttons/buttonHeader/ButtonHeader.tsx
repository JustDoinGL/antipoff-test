import { useResize } from "../../../hooks/useResize";
import styles from "./ButtonHeader.module.scss";
import { ButtonHeaderProps } from "./ButtonHeader.type";
import Exit from "../../../assets/svg/exit.svg?react";
import Back from "../../../assets/svg/back.svg?react";

export const ButtonHeader = ({ text, handleClick }: ButtonHeaderProps) => {
  const width = useResize();

  if (width < 950) {
    return <button className={styles.button__small} onClick={handleClick}>{text === 'Выход' ? <Exit /> : <Back />}</button>
  }
    return (
      <button className={styles.button} onClick={handleClick}>
        {text}
      </button>
    );
};
