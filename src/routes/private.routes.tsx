import React from "react";

import LayoutedContainer from "../pages/layoutedContainer";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  isLogged: boolean;
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<IPrivateRoute> = ({ isLogged, children }) => {
  return isLogged ? (
    <LayoutedContainer>{children}</LayoutedContainer>
  ) : (
    <Navigate to="login" />
  );
};

export default PrivateRoutes;
