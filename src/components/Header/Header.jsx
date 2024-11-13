import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import { IcUser } from '../../assets/svg';
import MufiLogo from '../../assets/png/MufiLogoBlack.png';
import { useState } from 'react';

function Header() {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };
    const navLoginPage = ()=> {
        navigate('/login');
    }

    return (
        <S.HeaderWrapper>
            <S.Nav>
            <S.NavLink
          href="#"
          isSpecial={false}
          onClick={() => handleClick("기업소개")}
          className={activeLink === "기업소개" ? "active" : ""}
        >
          기업소개
        </S.NavLink>
        <S.NavLink
          href="#"
          isSpecial={false}
          onClick={() => handleClick("갤러리")}
          className={activeLink === "갤러리" ? "active" : ""}
        >
          갤러리
        </S.NavLink>
        <S.NavLink
          href="#"
          isSpecial={true}
          onClick={() => handleClick("견적문의")}
          className={activeLink === "견적문의" ? "active" : ""}
        >
          견적문의
        </S.NavLink>
        <S.NavLink
          href="#"
          isSpecial={true}
          onClick={() => handleClick("내 프레임")}
          className={activeLink === "내 프레임" ? "active" : ""}
        >
          내 프레임
        </S.NavLink>
        <S.NavLink
          href="#"
          isSpecial={false}
          onClick={() => handleClick("Q & A")}
          className={activeLink === "Q & A" ? "active" : ""}
        >
          Q & A
        </S.NavLink>
            </S.Nav>
            <S.Logo><img src={MufiLogo}/></S.Logo>
            <S.Login onClick={()=>navLoginPage}><IcUser/><div>로그인 해주세요</div></S.Login>
        </S.HeaderWrapper>
    );
}

export default Header;
