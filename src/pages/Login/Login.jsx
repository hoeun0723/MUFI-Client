import { useEffect } from "react";
import * as S from "./Login.style";
import BtnKakaoLogin from "../../components/KakaoLogin/BtnKakaoLogin";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const isToken = window.localStorage.getItem('LOGIN_TOKEN');
    useEffect(() => {
        console.log(isToken);
        console.log(localStorage.getItem('LOGIN_TOKEN'));
      }, []);

    const handleLogout = () => {
        localStorage.removeItem('LOGIN_TOKEN');
        localStorage.removeItem('LOGIN_REFRESH_TOKEN');
        localStorage.removeItem('MemberId');
        localStorage.removeItem('USER_NAME');
        navigate('/');
    }
    return (
        <S.LoginWrapper>
            <S.Login>Login</S.Login>
            {!isToken ? (
                <>
                <S.LoginContext>카카오톡으로 간편하게 로그인하세요.</S.LoginContext>
                <BtnKakaoLogin />
                </>
            
            ) : (
                <>
                <S.LoginContext>환영합니다.</S.LoginContext>
                <S.BtnLoginComplete onClick={()=> navigate('/')}>메인으로 돌아가기</S.BtnLoginComplete>
                </>
            )}
            <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
        </S.LoginWrapper>
    )
};

export default Login;