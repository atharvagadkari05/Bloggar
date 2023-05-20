import React, { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }:LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;