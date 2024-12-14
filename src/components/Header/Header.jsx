import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import { IcUser } from '../../assets/svg';
import MufiLogo from '../../assets/png/MufiLogoBlack.png';
import { useEffect, useState } from 'react';

function Header() {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(null);
    const [userName, setUserName] = useState(localStorage.getItem('USER_NAME'));

    useEffect(() => {
      const handleStorageChange = () => {
          setUserName(localStorage.getItem('USER_NAME'));
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      // 같은 탭에서 값이 변경될 때에도 감지
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = function (key, value) {
          originalSetItem.apply(this, [key, value]);
          if (key === 'USER_NAME') {
              handleStorageChange(); // 상태 업데이트
          }
      };
  
      return () => {
          window.removeEventListener('storage', handleStorageChange);
          localStorage.setItem = originalSetItem; // 기존 동작 복원
      };
  }, []);
  

  const handleClick = (link) => {
    setActiveLink(link);
    navigate(link);
  };

    return (
        <S.HeaderWrapper>
            <S.Nav>
            <S.NavLink
          href="/introduce"
          isSpecial={false}
          onClick={() => handleClick("/introduce")}
          className={activeLink === "기업소개" ? "active" : ""}
        >
          기업소개
        </S.NavLink>
        <S.NavLink
          href="/gallery"
          isSpecial={false}
          onClick={() => handleClick("/gallery")}
          className={activeLink === "갤러리" ? "active" : ""}
        >
          갤러리
        </S.NavLink>
        <S.NavLink
          href="/reservation"
          isSpecial={true}
          onClick={() => handleClick("/reservation")}
          className={activeLink === "견적문의" ? "active" : ""}
        >
          견적문의
        </S.NavLink>
        <S.NavLink
          href="/custom-frame"
          isSpecial={true}
          onClick={() => handleClick("/custom-frame")}
          className={activeLink === "내 프레임" ? "active" : ""}
        >
          내 프레임
        </S.NavLink>
        <S.NavLink
          href="/qna"
          isSpecial={false}
          onClick={() => handleClick("/qna")}
          className={activeLink === "Q & A" ? "active" : ""}
        >
          Q & A
        </S.NavLink>
            </S.Nav>
            <S.Logo onClick={()=>navigate('/')}><img src={MufiLogo}/></S.Logo>
            <S.Login onClick={()=>navigate('/login')}><IcUser/><div>{userName ? `${userName}님, 환영합니다` : "로그인 해주세요"}</div></S.Login>
        </S.HeaderWrapper>
    );
}

export default Header;
