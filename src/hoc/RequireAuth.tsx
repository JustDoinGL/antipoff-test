import { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { getRegistrationSelector } from "../redux/registration/selector";

interface RequireAuthProps {
  children: ReactElement;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const { token } = useAppSelector(getRegistrationSelector);

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export { RequireAuth };
