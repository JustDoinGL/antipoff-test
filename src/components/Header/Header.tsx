import { Link, useLocation, useNavigate } from "react-router-dom";
import CatalogHeader from "./CatalogHeader/CatalogHeader";
import styles from "./Header.module.scss";
import UserHeader from "./UserHeader/UserHeader";
import { ButtonHeader } from "../../ui/buttons/buttonHeader/ButtonHeader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearToken } from "../../redux/registration/registrationSlice";
import { clearFavoriteUsers } from "../../redux/users/usersSlice";
import { getUserSelector } from "../../redux/user/selector";
import UserHeaderSkeleton from "./UserHeader/UserHeaderSkeleton";
import { getUsersSelector } from "../../redux/users/selector";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(getUserSelector);
  const { status: usersStatus } = useAppSelector(getUsersSelector);

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const isCatalogPage =
    pathSegments[0] === "catalog" && pathSegments.length === 2;

  const getHeaderContentComponent = (
    isCatalogPage: boolean,
    status: string
  ) => {
    return isCatalogPage ? (
      status === "pending" ? (
        <UserHeaderSkeleton />
      ) : (
        <UserHeader />
      )
    ) : (
      <CatalogHeader />
    );
  };

  const handleClickBack = () => navigate(-1);
  const handleClickExit = () => {
    dispatch(clearToken());
    dispatch(clearFavoriteUsers());
  };

  if (status === "rejected" && usersStatus !== "fulfilled") {
    return (
      <Link
        style={{ margin: "20px", display: "block" }}
        to={"/catalog"}
      >{`<- Назад`}</Link>
    );
  }

  return (
    <header className={styles.header}>
      {isCatalogPage && (
        <div className={styles.btn__back}>
          <ButtonHeader text="Назад" handleClick={handleClickBack} />
        </div>
      )}
      {getHeaderContentComponent(isCatalogPage, status)}
      <div className={styles.btn__exit}>
        <ButtonHeader text="Выход" handleClick={handleClickExit} />
      </div>
    </header>
  );
};

export default Header;
