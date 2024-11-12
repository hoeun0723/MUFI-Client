import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import { IcUser } from '../../assets/svg';
import MufiLogo from '../../assets/png/MufiLogoBlack.png';

function Header() {
    const navigate = useNavigate();
    const navLoginPage = ()=> {
        navigate('/login');
    }

    return (
        <S.HeaderWrapper>
            <S.NavWrapper>
                <S.NavBtn onClick={() => navigate('/introduce')}>
                기업소개
                </S.NavBtn>
                <S.NavBtn onClick={() => navigate('/gallery')}>
                갤러리
                </S.NavBtn>
                <S.NavRedBtn onClick={() => navigate('/reservation')}>
                견적 문의
                </S.NavRedBtn>
                <S.NavRedBtn onClick={() => navigate('/custom-frame')}>
                내 프레임
                </S.NavRedBtn>
                <S.NavBtn onClick={() => navigate('/qna')}>
                QnA
                </S.NavBtn>
            </S.NavWrapper>
            <S.Logo><img src={MufiLogo}/></S.Logo>
            <S.LoginPageBtn onClick={()=>navLoginPage}><IcUser/><div>로그인 해주세요</div></S.LoginPageBtn>
        </S.HeaderWrapper>
    );
}

export default Header;
