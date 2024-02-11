import styles from "./UserCard.module.scss";
import Heart from "../../assets/svg/heart.svg?react";
import { UserCardProps } from "./UserCard.type";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getUsersSelector } from "../../redux/users/selector";
import { setFavoriteUsers } from "../../redux/users/usersSlice";
import { Link } from "react-router-dom";
import { Img } from "../../ui/img/Img";
import { useMouseEnter } from "../../hooks/useMouseEnter";

const UserCard = ({ user }: UserCardProps) => {
  const dispatch = useAppDispatch();
  const { favoriteUsers } = useAppSelector(getUsersSelector);
  const { handleMouseEnter, handleMouseLeave, isHovering } = useMouseEnter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(setFavoriteUsers(user));
  };

  const isUserFavorite = favoriteUsers.some(
    (favoriteUser) => favoriteUser === user.id
  );

  return (
    <>
      <Link to={`/catalog/${user.id}`}>
        <div
          className={`${styles.container} ${isHovering ? styles.hover : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Img url={user.avatar} width={124} height={124} alt="avatar" />

          <p className={`description`}>
            {user.first_name} {user.last_name}
          </p>

          <div
            className={styles.heart}
            onClick={handleClick}
            onMouseEnter={handleMouseLeave}
            onMouseLeave={handleMouseEnter}
          >
            <button
              className={`${styles.btn__heart} ${
                isUserFavorite && styles.active
              }`}
            >
              <Heart />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UserCard;
