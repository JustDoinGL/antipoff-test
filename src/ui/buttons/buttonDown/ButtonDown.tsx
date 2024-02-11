import UploadLimitMessage from "../../uploadLimitMessage/UploadLimitMessage";
import styles from "./ButtonDown.module.scss";
import { ButtonDownProps } from "./ButtonDown.type";
import Arrow from "../../../assets/svg/down.svg?react";

const ButtonDown = ({ isFull, handleClick }: ButtonDownProps) => {
  return (
    <div className={styles.container}>
      {isFull ? (
        <UploadLimitMessage />
      ) : (
        <button onClick={handleClick} className={styles.btn}>
          <p className={styles.text}>Показать еще</p>
          <div className={styles.icon}>
            <Arrow />
          </div>
        </button>
      )}
    </div>
  );
};

export default ButtonDown;
