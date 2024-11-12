import * as S from './Footer.style';
import MufiLogo from '../../assets/png/MufiLogoWhite.png';
import { IcInsta, IcKakao } from '../../assets/svg';

function Footer () {

    return (
        <S.FooterWrapper>
            <S.Logo><img src={MufiLogo} style={{width:'300px',height: '168.75px'}}/></S.Logo>
            <S.ServiceContent>
                <S.SnsNav>
                    <a href='https://url.kr/5bi34w'><IcKakao/></a>
                    <a href='https://www.instagram.com/team_mufi/'><IcInsta/></a>
                </S.SnsNav>
                <S.Terms>
                    <S.TermContent>서비스 이용약관</S.TermContent>
                    <S.TermContent>|</S.TermContent>
                    <S.TermContent>개인정보 처리방침</S.TermContent>
                    <S.TermContent>|</S.TermContent>
                    <S.TermContent>데이터 서비스 이용약관</S.TermContent>
                    <S.TermContent>|</S.TermContent>
                    <S.TermContent>이용자 권리 및 유의사항</S.TermContent>
                </S.Terms>
            </S.ServiceContent>
            
            <S.AdditionalContent>
                <S.CompanyInfo>
                    대표 : 정종현<br/>
                    사업자등록번호 : 275-63-00540 사업자정보확인 통신판매업: 제 2023-충북청주-0912<br/>
                    사업장소재지 : 충청북도 청주시 서원구 무심서로 377-3 인문사회관 b115호 (28674)<br/>
                    전화번호 : 010-5547-0355<br/>
                    COPYRIGHT ⓒ MUFI. ALL RIGHTS RESERVED.<br/>
                    </S.CompanyInfo>
                <S.DeveloperInfo>
                    <span>Developers</span>
                    <S.Develeopers>
                        <S.Developer><div>양재원</div><div>yjw5970@naver.com</div><span>프론트엔드 웹 개발</span></S.Developer>
                        <S.Developer><div>왕호은</div><div>hoeun0723@naver.com</div><span>웹 개발 및 서버 배포</span></S.Developer>
                        <S.Developer><div>정하윤</div><div>sumhillj@gmail.com</div><span>웹 디자인 및 개발</span></S.Developer>
                    </S.Develeopers>
                </S.DeveloperInfo>
            </S.AdditionalContent>
        </S.FooterWrapper>
    );
}

export default Footer;