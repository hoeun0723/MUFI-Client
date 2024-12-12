import styled from "styled-components";

export const CustomFrameWrapper = styled.div`
width:100%;
min-height:auto;  /*요소를 추가했을 때 자연스럽게 추가되고 스크롤 할 수 있게*/ 
background-color: ${({ theme }) => theme.colors.black};
display: flex;
flex-direction: column; /* 요소들을 세로로 배치(앙 이거는 introduce페이지랑 같음!) */
align-items: center;
position: relative; 
padding: 10px; /* 기본 여백 추가 */
`;
//무.피.내.프.
export const Background = styled.div` 
  position: absolute;
  top: -2.5%; /* 페이지 상단에서 위치 조정 */
  left: 50%;
  transform: translateX(-50%) scaleX(1.1);
  color: rgba(255, 255, 255, 0.20);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 30rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -14.1px;
  opacity: 1; /* opacity를 제거하여 진하게 표시 */
  z-index: 1; /* 배경처럼 보이도록 뒤로 배치 */
  width: calc(100% - 9.6rem);
`;
//아래 설명
export const Description = styled.div`
  position: absolute;
  top: 20%; /* BackgroundText 아래 적절한 위치 조정 */
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.7rem; 
  font-style: normal;
  font-weight: 300;
  line-height: 3.5rem;
  width: calc(100% - 9.6rem); /* 양쪽에 4.8rem씩 간격 */
`;
//가운데 박스
export const CallToAction = styled.div`
  width: 90rem;
  height: 9rem;
  margin-top: 55rem; /* 헤더 아래 적절한 간격 추가 */
  padding: 3rem 14rem;
  background-color: #ffecec; /* 버튼 배경색 */
  border-radius: 15rem; /* 둥근 모서리 설정 */
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 3rem; /* 텍스트 크기 설정 */
  font-weight: 700; /* 텍스트 두께 설정 */
  color: ${({ theme }) => theme.colors.dark_red};
`;
//커스텀 부분을 한 그룹으로 만듬
export const FrameEditorWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* 좌-우로 균형 있게 배치 */
  align-items: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 3rem 0;
  margin: 10rem ;
  gap: 0.5rem;
`;
//왼쪽 아바타
export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  width: 45%; /* 전체 너비 중 약 20% */
`;
export const AvatarImage = styled.img`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
export const AvatarLabel = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: "Pretendard Variable";
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;
//생성아바타 이동
export const DraggableAvatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.colors.white};
  position: absolute; /* 드래그 시 위치 조정 가능 */
  cursor: grab; /* 마우스 커서를 손모양으로 변경 */
  &:active {
    cursor: grabbing; /* 드래그 중일 때 손 모양 */
  }
`;
//가운데 프레임
export const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 31rem; 
  background-color: ${(props) => props.bgColor || 'white'};
  padding: 2.5rem 10rem;
  padding-bottom: 8rem; /* 프레임 하단에 여백 추가 */
  position: relative;
  overflow: hidden; /* 프레임을 벗어난 요소 숨기기 */
`;

export const FrameLayer = styled.div`
  width: 26rem;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.black};
  margin: 0.5rem 0;
  &:last-child {
    margin-bottom: 10rem; /* 마지막 레이어 아래에 여백 추가 */
  }
`;
//오른쪽 색상선택
export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  width: 45%; /* 전체 너비 중 약 20% */
`;
export const FrameColorGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 나누기 */
  gap: 4rem; /* 버튼 간 간격 */
  align-items: center;
  justify-items: center;
  width: 30%; /* 그룹 너비 */
`;
export const FrameThemeGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 나누기 */
  gap: 4rem; /* 버튼 간 간격 */
  align-items: center;
  justify-items: center;
  width: 30%; /* 그룹 너비 */
`;
export const ColorOption = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color || "white"};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.white};
  &:hover {
    opacity: 0.8;
  }
`;
export const ThemeLabel = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: "Pretendard Variable";
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;
//두개 버튼
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem; /* 버튼 간 간격 */
  margin-top: -1rem; /* 위 요소와 간격 */
  width: 130rem; /* 그룹 전체 너비 */
  margin-bottom: 10rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; /* 아이콘과 버튼 간 간격 */
`;
export const ButtonIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const Button = styled.button`
  height: 7rem;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* 아이콘과 텍스트 간격 */
  padding: 1rem 4rem; /* 버튼 내부 간격 */
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ className }) =>
    className === 'download' ? '#e74c3c' : '#000'};
  font-family: "Pretendard Variable";
  font-size: 2rem;
  font-weight: 700;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 2.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ className }) =>
      className === 'download' ? '#e74c3c' : '#000'};
    color: ${({ className }) =>
      className === 'download' ? '#fff' : '#fff'};
  }
`;

/*
폰트r_20을 설정하고 싶으면
${({ theme }) => theme.fonts.b_36_60}
이렇게 적어주세요!

폰트 색상 gray를 설정하고 싶으면
color: ${({ theme }) => theme.colors.gray};
이렇게 적어주세요!

배경 색상 dark_red를 적용 하고 싶으면
background-color: ${({ theme }) => theme.colors.dark_red};
이렇게 적어주세요!
*/
