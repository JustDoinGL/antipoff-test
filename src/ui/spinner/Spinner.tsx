import styles from "./Spinner.module.scss";
import { SpinnerProps } from "./Spinner.type";

export const Spinner = ({ width, height }: SpinnerProps) => {
  return <div style={{ width, height }} className={styles.spinner}></div>;
};
