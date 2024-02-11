import styles from "./ContactForm.module.scss";
import Phone from "../../assets/svg/phone.svg?react";
import Mail from "../../assets/svg/mail.svg?react";
import { ContactFormProps } from "./ContactForm.type";
import { formatPhoneNumber } from "../../helpers/formattedPhone";

const ContactForm = ({ email }: ContactFormProps) => {
  const phone = "79543334455";

  const formattedPhone = formatPhoneNumber(phone);

  return (
    <form className={styles.form}>
      <a href={`tel:+${phone}`}>
        <label className={styles.label}>
          <Phone />
          {formattedPhone}
        </label>
      </a>
      <a href={`mailto:${email}`}>
        <label className={styles.label}>
          <Mail />
          {email}
        </label>
      </a>
    </form>
  );
};

export default ContactForm;
