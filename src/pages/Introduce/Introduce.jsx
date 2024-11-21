import * as S from './Introduce.style';
import MufiLogo from '../../assets/svg/무피로고.svg';
import MuinfilmLogo from '../../assets/png/image 2.png';
import HistoryImage from '../../assets/svg/회사 연혁.svg';
import PortfolioImage from '../../assets/svg/스크린샷 2024-11-10 오후 4.48.21 1.svg'; 



function Introduce () {
    return (
        <S.IntroduceWrapper>
            <S.BackgroundText>munifilm</S.BackgroundText>
            <S.DescriptionText>
                MUFI는 오프라인 무인사진관 서비스를 소셜 네트워크 서비스로 확장하여 고객에게 더 많은 소비 가치를 제공합니다.
                <br />
                이를 통해 모든 오프라인 공간을 스마트 비즈니스 플랫폼으로 전환하며, 디지털 혁신을 가속화합니다.
            </S.DescriptionText>

            <S.LogoSection>
                <S.LogoTitle>로고 소개</S.LogoTitle>
                <S.LogoSubtitle>BRAND LOGO</S.LogoSubtitle>
                <S.LogoContainer>
                    <S.LogoImage src={MufiLogo} alt="무피로고" />
                    <S.LogoImage src={MuinfilmLogo} alt="image 2" />
                </S.LogoContainer>
            </S.LogoSection>
            
            <S.TimelineSection>
                {console.log("HistorySection is rendering")}
                <S.TimelineTitle>회사 연혁</S.TimelineTitle>
                <S.TimelineSubtitle>BRAND LINE</S.TimelineSubtitle>
                <S.HistoryImage src={HistoryImage} alt="회사 연혁" />
            </S.TimelineSection>

            <S.PortfolioSection>
                <S.PortfolioTitle>포트폴리오</S.PortfolioTitle>
                <S.PortfolioSubtitle>BRAND PORTFOLIO</S.PortfolioSubtitle>
                <S.PortfolioImage src={PortfolioImage} alt="스크린샷 2024-11-10 오후 4.48.21 1" />

                <S.InfoBox>
                    <S.InfoText>
                        <S.InfoTitle>대학교</S.InfoTitle>
                        고려대, 서원대, 충북대, 청주대, 동국대, 건국대, 단국대, 경북대, 세종대 등 13개교
                    </S.InfoText>
                    <S.InfoText>
                        <S.InfoTitle>고등학교</S.InfoTitle>
                        한국디지털미디어고등학교, 청주여자상업고등학교 등 2개교
                    </S.InfoText>
                </S.InfoBox>
            </S.PortfolioSection>

        </S.IntroduceWrapper>
    )
}
export default Introduce;