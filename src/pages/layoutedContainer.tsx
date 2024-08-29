import React from "react";
import { Header } from "../components/header";

interface ILayoutedContainer {
  children: React.ReactNode;
}

const pages: React.FC<ILayoutedContainer> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default pages;
