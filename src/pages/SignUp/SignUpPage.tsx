import Form from "../../components/Form/Form";
import styles from "./SignUp.module.scss";

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
};

export { SignUpPage };
