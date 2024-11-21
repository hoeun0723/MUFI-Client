import * as S from './BtnKakaoLogin.style';
import { kakaoURL } from '../../utils/login';
import KakaoLogin from '../../assets/png/KakaoLogin.png';

const handleLogin = () => {
  window.location.href = kakaoURL;
};

function BtnKakaoLogin() {
  return (
    <S.ButtonWrapper
      onClick={() => {
        handleLogin();
      }}
    >
      <img src={KakaoLogin}/>
    </S.ButtonWrapper>
  );
}

export default BtnKakaoLogin;
