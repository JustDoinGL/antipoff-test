import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const CatalogLayout = () => {
  return (
    <>
      <Header />
			<main>
				<Outlet />
			</main>
    </>
  );
};

export default CatalogLayout;
