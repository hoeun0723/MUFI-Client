import styled from 'styled-components';


export const IntroduceWrapper = styled.div`
width:100%;
height:auto; /*스크롤을 위해 변경*/
display: flex;
flex-direction: column; /* 요소들을 세로로 배치 */
align-items: center;


`;
//munifilm
export const BackgroundText = styled.div` 
  position: absolute;
  top: -3%; /* 페이지 상단에서 위치 조정 */
  color: ${({ theme }) => theme.colors.light_gray};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 40rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -14.1px;
  opacity: 1; /* opacity를 제거하여 진하게 표시 */
  z-index: -1; /* 배경처럼 보이도록 뒤로 배치 */

  @media (max-width: 768px) {
    font-size: 25rem;
    top: -5%;
  }

  @media (max-width: 480px) {
    font-size: 18rem;
    top: -8%;
  }
`;
//소개글1//
export const DescriptionText = styled.div`
  position: absolute;
  top: 55%; /* BackgroundText 아래 적절한 위치 조정 */
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 2.8rem; 
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: calc(100% - 9.6rem); /* 양쪽에 4.8rem씩 간격 */

  @media (max-width: 768px) {
    font-size: 2.2rem;
    top: 40%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    top: 20%;
  }
`;
//로고 소개 BRAND LOGO
export const LogoSection = styled.div`
  text-align: left;
  padding-top: 55rem;
  padding-left: 9rem; /* 왼쪽에 간격 추가 */
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 30rem;
    padding-left: 5rem;
  }

  @media (max-width: 480px) {
    padding-top: 20rem;
    padding-left: 2rem;
  }
`;

export const LogoTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pretendard Variable";
  font-size: 6.4rem;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const LogoSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.5rem; /* 상단 텍스트와의 간격 */

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
//로고 이미지
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem; /* 위아래 간격 조정 */
  gap: 15rem;

  @media (max-width: 768px) {
    gap: 10rem;
  }

  @media (max-width: 480px) {
    gap: 5rem;
  }
`;

export const LogoImage = styled.img`
  width: 50rem;
  /* 두 번째 이미지에 배경색 추가 */
  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.black};; /* 원하는 배경색 코드로 변경 */
    padding: 1rem; /* 배경색과 이미지 사이 간격 */

  }
  
  @media (max-width: 768px) {
    width: 35rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
  }
`;
//회사 연혁
export const TimelineSection = styled.div`
  text-align: left;
  padding-top: 5%; /* LogoSection과의 간격을 조정 */
  padding-left: 9rem;

  @media (max-width: 768px) {
    padding-left: 5rem;
  }

  @media (max-width: 480px) {
    padding-left: 2rem;
  }
`;
export const TimelineTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pretendard Variable";
  font-size: 6.4rem;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;
export const TimelineSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
export const HistoryImage = styled.img`
  display: block;
  margin: 7rem auto; /* 이미지 중앙 정렬 및 위아래 간격 */
  max-width: 95%; /* 이미지 최대 너비 */
  height: auto; /* 비율 유지 */

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 5rem auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 3rem auto;
  }
`;
//포트폴리오
export const PortfolioSection = styled.div`
  text-align: left;
  margin-top: 5rem; /* 이전 섹션과의 간격 */
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;

export const PortfolioTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pretendard Variable";
  font-size: 6.4rem;
  font-weight: 800;
  line-height: normal;
  margin-left: 9rem;

  @media (max-width: 768px) {
    font-size: 5rem;
    margin-left: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-left: 2rem;
  }
`;
export const PortfolioSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.5rem;
  margin-left: 9rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-left: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-left: 2rem;
  }
`;
export const PortfolioImage = styled.img`
  display: block;
  margin: 6.9rem 0;
  height: auto; /* 비율 유지 */
  margin-left: 8rem;

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 5rem 0;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 480px) {
    max-width: 70%;
    margin: 3rem 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
//대학교,고등학교
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  /*텍스트를 가운데 정렬*/
  justify-content: center;
  margin: 10rem auto; /* 위아래 간격 */
  padding: 5rem; /* 박스 내부 여백 */
  max-width: 130rem; /* 최대 너비 */
  border: 1px solid #000000; /* 테두리 */
  border-radius: 4rem; /* 둥근 모서리 */
  background-color: ${({ theme }) => theme.colors.white}; /* 배경색 */
  position: relative; /* z-index가 동작하도록 설정 */

  @media (max-width: 768px) {
    padding: 4rem;
    margin: 7rem auto;
  }

  @media (max-width: 480px) {
    padding: 3rem;
    margin: 5rem auto;
  }
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.8;
  text-align: center; /* 중앙 정렬 */
  margin: 0.5rem 0; /* 각 문단 간격 */

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

`;

export const InfoTitle = styled.span`
  font-weight: 700; /* 강조 텍스트 */
  color: ${({ theme }) => theme.colors.black};
  display: block; /* 제목과 내용이 줄바꿈 되도록 설정 */
  margin-bottom: 1rem; /* 제목과 내용 사이 간격 */

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;


/*
폰트r_20을 설정하고 싶으면
${({ theme }) => theme.fonts.r_20}
이렇게 적어주세요!

폰트 색상 gray를 설정하고 싶으면
color: ${({ theme }) => theme.colors.gray};
이렇게 적어주세요!

배경 색상 dark_red를 적용 하고 싶으면
background-color: ${({ theme }) => theme.colors.dark_red};
이렇게 적어주세요!
*/
