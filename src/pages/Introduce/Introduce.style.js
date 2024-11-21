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
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.light_gray};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 43rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -14.1px;
  opacity: 1; /* opacity를 제거하여 진하게 표시 */
  z-index: -1; /* 배경처럼 보이도록 뒤로 배치 */
  width: calc(100% - 9.6rem);
`;
//소개글1//
export const DescriptionText = styled.div`
  position: absolute;
  top: 45%; /* BackgroundText 아래 적절한 위치 조정 */
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 2.8rem; 
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: calc(100% - 9.6rem); /* 양쪽에 4.8rem씩 간격 */
`;
//로고 소개 BRAND LOGO
export const LogoSection = styled.div`
  text-align: left;
  padding-top: 32%;
  padding-left: 9rem; /* 왼쪽에 간격 추가 */
  position: relative;
  width: 100%;
`;

export const LogoTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pretendard Variable";
  font-size: 6.4rem;
  font-weight: 800;
  line-height: normal;
`;

export const LogoSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.5rem; /* 상단 텍스트와의 간격 */
`;
//로고 이미지
export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 80rem; /* 컨테이너 최대 너비 */
  margin: 2rem 0 0 9rem; /* 위아래 간격 조정 */
`;

export const LogoImage = styled.img`
  max-width: 100%; /* 이미지 크기 제한 */
  height: auto;
  &:first-child {
    margin-right: 4rem; /* 왼쪽 로고와 오른쪽 로고 사이 간격 */
  }
  /* 두 번째 이미지에 배경색 추가 */
  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.black};; /* 원하는 배경색 코드로 변경 */
    padding: 1rem; /* 배경색과 이미지 사이 간격 */
    border-radius: 0.5rem; /* 모서리를 둥글게 하고 싶다면 추가 */
`;
//회사 연혁
export const TimelineSection = styled.div`
  text-align: left;
  padding-top: 5%; /* LogoSection과의 간격을 조정 */
  padding-left: 9rem;
  z-index: 1; /* 이 값을 추가해 보세요 */
  position: relative; /* z-index를 동작시키기 위해 필요 */
`;
export const TimelineTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pretendard Variable";
  font-size: 6.4rem;
  font-weight: 800;
  line-height: normal;
`;
export const TimelineSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.5rem;
`;
export const HistoryImage = styled.img`
  display: block;
  margin: 7rem auto; /* 이미지 중앙 정렬 및 위아래 간격 */
  max-width: 95%; /* 이미지 최대 너비 */
  height: auto; /* 비율 유지 */
`;
//포트폴리오
export const PortfolioSection = styled.div`
  text-align: left;
  margin-top: 5rem; /* 이전 섹션과의 간격 */
  padding-left: 9rem; /* 왼쪽 정렬 */
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PortfolioTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pretendard Variable";
  font-size: 6.4rem;
  font-weight: 800;
  line-height: normal;
`;
export const PortfolioSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.5rem;
`;
export const PortfolioImage = styled.img`
  display: block;
  margin: 6.9rem 0;
  max-width: 95%; /* 이미지 최대 너비 */
  height: auto; /* 비율 유지 */
`;
//대학교,고등학교
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  /*텍스트를 가운데 정렬*/
  justify-content: center;
  margin: 10rem auto; /* 위아래 간격 */
  padding: 4rem; /* 박스 내부 여백 */
  width: 95%; /* 박스 너비 */
  max-width: 120rem; /* 최대 너비 */
  border: 1px solid ${({ theme }) => theme.colors.gray}; /* 테두리 */
  border-radius: 1rem; /* 둥근 모서리 */
  background-color: ${({ theme }) => theme.colors.white}; /* 배경색 */
  position: relative; /* z-index가 동작하도록 설정 */
  z-index: 1; /* 다른 요소보다 위에 표시 */
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.8;
  text-align: center; /* 중앙 정렬 */
  margin: 0.5rem 0; /* 각 문단 간격 */

`;

export const InfoTitle = styled.span`
  font-weight: 700; /* 강조 텍스트 */
  color: ${({ theme }) => theme.colors.black};
  display: block; /* 제목과 내용이 줄바꿈 되도록 설정 */
  margin-bottom: 0.5rem; /* 제목과 내용 사이 간격 */
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
