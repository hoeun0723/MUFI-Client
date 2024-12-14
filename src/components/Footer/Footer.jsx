import * as S from './Footer.style';
import MufiLogo from '../../assets/png/MufiLogoWhite.png';
import { IcInsta, IcKakao } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

function Footer () {

  const navigate = useNavigate();

    return (
        <S.FooterWrapper>
            
            <div>
            <S.Logo><img src={MufiLogo}/></S.Logo>
            <S.InfoText>대표 : 정종현</S.InfoText>
            <S.InfoText>사업자등록번호: 275-63-00540</S.InfoText>
            <S.InfoText>통신판매업: 제 2023-홍북홍주-0912</S.InfoText>
            <S.InfoText>사업장주소: 충청북도 홍주시 시문구 무심서로 377-3 인문사회관 b115호 (28674)</S.InfoText>
            <S.InfoText>전화번호 : 010-5547-0355</S.InfoText>
            <S.InfoText>COPYRIGHT © MUFI. ALL RIGHTS RESERVED.</S.InfoText>
            </div>

        <S.DeveloperSection>
            <div>
            <S.SocialIcons>
                <a href='https://url.kr/5bi34w'><IcKakao/></a>
                <a href='https://www.instagram.com/team_mufi/'><IcInsta/></a>
            </S.SocialIcons>
            <S.Links>
                <p>서비스 이용약관</p>
                <p>개인정보 처리방침</p>
                <p>데이터 서비스 이용약관</p>
                <p>이용자 권리 및 유의사항</p>
            </S.Links>
            </div>
            
            
            <div>
                <S.Developers onClick={()=>navigate('/admin')}>Developers</S.Developers>
                <S.DeveloperInfo>
                <div>양재원</div>
                <span>yjw5970@naver.com</span>
                <span>프론트엔드 웹 개발</span>
                </S.DeveloperInfo>
            <S.DeveloperInfo>
                <div>왕호은</div>
                <span>hoeun0723@naver.com</span>
                <span>웹 개발 및 서버 배포</span>
            </S.DeveloperInfo>
            <S.DeveloperInfo>
                <div>정하윤</div>
            <span>sumhilj@gmail.com</span>
            <span>웹 디자인 및 개발</span>
            </S.DeveloperInfo>
            </div>

            </S.DeveloperSection>
        </S.FooterWrapper>
    );
}

export default Footer;