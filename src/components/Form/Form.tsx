import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRegistration } from "../../redux/registration/getRegistration";
import { getRegistrationSelector } from "../../redux/registration/selector";
import { ButtonRegister } from "../../ui/buttons/buttonRegister/ButtonRegister";
import styles from "./Form.module.scss";
import { useFormControls } from "../../hooks/useFormControls";
import Item from "./Item/Item";
import { useNavigate } from "react-router-dom";
import { isLoading } from "../../redux/registration/registrationSlice";
import { Modal } from "../../ui/modal/Modal";
import { Spinner } from "../../ui/spinner/Spinner";
import { Status } from "../../redux/@types/enum";
import Error from "../../ui/error/Error";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { disabled, email, password, status } = useAppSelector(
    getRegistrationSelector
  );

  const handleSubmit = (e: FormEvent) => {
    dispatch(isLoading());
    e.preventDefault();
    dispatch(fetchRegistration({ email, password }));
    navigate("/catalog", { replace: true });
  };

  const inputFields = useFormControls();

  return (
    <>
      <form className={styles.form} typeof="submit">
        <h1 className={styles.title}>Регистрация</h1>
        {status === Status.rejected && <Error errorMessage={"Произошла ошибка"} />}

        {inputFields.map((field, index) => (
          <Item
            helper={field.helper}
            value={field.value}
            type={field.type}
            isRight={field.isRight}
            placeholder={field.placeholder}
            handleSubmit={field.handleChange}
            title={field.label}
            key={index}
          />
        ))}

        <ButtonRegister
          text="Зарегистрироваться"
          handleClick={handleSubmit}
          disabled={disabled}
        />
      </form>

      {status === Status.pending && (
        <Modal>
          <Spinner width={50} height={50} />
        </Modal>
      )}
    </>
  );
};

export default Form;
