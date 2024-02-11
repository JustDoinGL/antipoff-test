import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.type";

export const Modal = ({ children }: ModalProps) => {
  return <div className={styles.modal__overlay}>{children}</div>;
};
