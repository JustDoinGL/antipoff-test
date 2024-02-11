import styles from "./Input.module.scss";
import { InputProps } from "./Input.type";
import Eye from "../../assets/svg/eye.svg?react";
import { useState } from "react";

export const Input = ({
  type,
  value,
  handleChange,
  helper,
  isRight,
  placeholder,
}: InputProps) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        type={inputType}
        className={styles.input}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        required
      />
      <div className={styles.eye} onClick={togglePasswordVisibility}>
        {type === "password" && <Eye />}
      </div>

      <span className={isRight ? styles.span : styles.spanRight}>{helper}</span>
    </div>
  );
};
