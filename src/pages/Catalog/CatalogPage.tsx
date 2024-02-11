import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getUsersSelector } from "../../redux/users/selector";
import styles from "./Catalog.module.scss";
import { fetchUsers } from "../../redux/users/getUsers";
import UserCard from "../../components/UserCard/UserCard";
import { useResize } from "../../hooks/useResize";
import ButtonDown from "../../ui/buttons/buttonDown/ButtonDown";
import { getItemsCount } from "../../helpers/getItemsCount";
import Error from "../../ui/error/Error";
import UserCardSkeleton from "../../components/UserCard/UserCardSkeleton";
const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const { page, status, users, isFull } = useAppSelector(getUsersSelector);

  const width = useResize();
  const per_page = getItemsCount(width);

  useEffect(() => {
    dispatch(fetchUsers({ page, per_page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    dispatch(fetchUsers({ page, per_page }));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.users}>
          {users?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {status === "pending" && (
          <div className={styles.users}>
            {Array.from({ length: per_page }, (_, index) => (
              <div key={index} className={styles.userPlaceholder}>
                <UserCardSkeleton />
              </div>
            ))}
          </div>
        )}

        {status === "rejected" && (
          <div className={styles.error}>
            <Error errorMessage="Произошла ошибка" />
          </div>
        )}

        <ButtonDown handleClick={handleClick} isFull={isFull} />
      </div>
    </>
  );
};

export { CatalogPage };
