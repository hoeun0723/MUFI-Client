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

        // 로그아웃 상태가 되면 userName 등이 즉시 반영되도록 해두었습니다~
        const event = new Event('storage');
        window.dispatchEvent(event);

        navigate('/');
    }
    return (
        <S.LoginWrapper>
            <S.Login>LOGIN</S.Login>
            {!isToken ? (
                <>
                <S.LoginContext>카카오톡으로 간편하게 로그인하세요.</S.LoginContext>
                <BtnKakaoLogin />
                </>
            
            ) : (
                <>
                <S.LoginContext>환영합니다!</S.LoginContext>
                <S.BtnLoginComplete onClick={()=> navigate('/')}>메인으로 돌아가기</S.BtnLoginComplete>
                <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
                </>
            )}
        </S.LoginWrapper>
    )
};

export default Login;