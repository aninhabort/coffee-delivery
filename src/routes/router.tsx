import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Checkout } from "../pages/checkout";
import PrivateRoutes from "./private.routes";

const isLogged = true

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Home />}/>
      <Route
        path="/*"
        element={
          <PrivateRoutes isLogged={isLogged}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default Router;
