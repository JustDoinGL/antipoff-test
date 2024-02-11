import { Input } from "../../../ui/input/Input";
import styles from "./Item.module.scss";
import { ItemProps } from "./Item.type";

const Item = ({
  title,
  helper,
  value,
  handleSubmit,
  type,
  isRight,
  placeholder,
}: ItemProps) => {
  return (
    <div>
      <p className={styles.title__1111}>{title}</p>
      <Input
        handleChange={handleSubmit}
        helper={helper}
        value={value}
        type={type}
        isRight={isRight}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Item;
