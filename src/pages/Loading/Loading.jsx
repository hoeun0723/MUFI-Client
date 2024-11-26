import * as S from './Loading.style';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/lottie/loadingLottie.json';

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.LottieWrapper>
        <Lottie 
          animationData = {loadingLottie}
        />
      </S.LottieWrapper>
s
    </S.LoadingWrapper>
  );
}

export default Loading;
