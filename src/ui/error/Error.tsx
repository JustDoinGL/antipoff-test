import styles from "./Error.module.scss";
import { ErrorProps } from "./Error.type";

const Error = ({ errorMessage }: ErrorProps) => {
  return <div className={styles.error}>{errorMessage}</div>;
};

export default Error;
