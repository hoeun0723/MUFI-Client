import { Outlet } from "react-router-dom";
import { useMobile } from "../hooks/useMobile";
import Header from "../components/Header/Header";

const Layout = () => {
  useMobile();

  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default Layout;
