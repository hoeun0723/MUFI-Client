import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import * as S from './Layout.style';

const Layout = () => {

  return (
    <S.LayoutWrapper>
      <Header/>
      <Outlet />
    </S.LayoutWrapper>
  );
};

export default Layout;
