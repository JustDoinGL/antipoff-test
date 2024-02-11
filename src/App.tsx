import { Routes, Route } from "react-router-dom";
import CatalogLayout from "./layouts/CatalogLayout";
import { UserPage } from "./pages/UserPage/UserPage";
import { CatalogPage } from "./pages/Catalog/CatalogPage";
import { SignUpPage } from "./pages/SignUp/SignUpPage";
import { RequireAuth } from "./hoc/RequireAuth";
import { NeedAuth } from "./hoc/NeedAuth";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NeedAuth>
            <SignUpPage />
          </NeedAuth>
        }
      />

      <Route
        path="/catalog"
        element={
          <RequireAuth>
            <CatalogLayout />
          </RequireAuth>
        }
      >
        <Route index element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
