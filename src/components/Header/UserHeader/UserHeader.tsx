import { useAppSelector } from "../../../hooks/redux";
import { getUserSelector } from "../../../redux/user/selector";
import { Img } from "../../../ui/img/Img";
import styles from "./UserHeader.module.scss";
const UserHeader = () => {
  const { user } = useAppSelector(getUserSelector);

  if (user) {
    return (
      <div className={styles.container}>
        <Img width={187} height={187} url={user.avatar} alt="Avatar" />
        <div className={styles.info}>
          <h1 className="title">
            {user?.first_name} {user?.last_name}
          </h1>
          <p className={styles.text}>Партнер</p>
        </div>
      </div>
    );
  }

  return null;
};

export default UserHeader;
