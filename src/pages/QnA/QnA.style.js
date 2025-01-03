import styled from "styled-components";
import PencilIconImage from '../../assets/png/BiSolidPencil.png';
import WaitingIcon from '../../assets/png/BiMessageRounded.png';
import CompleteIcon from '../../assets/png/BiMessageRoundedCheck.png';


export const QnAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light_grey};
  width: 100%;
  height: 100%;
  position: relative;
  font-family: pretendard;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const TitleGroup = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 15.4rem;
  margin-top: 10.7rem; /*중앙*/
  margin-bottom: 10.7rem; 
  width: 100%;

  @media (max-width: 768px) {
    gap: 10rem;
    margin-top: 7rem;
    margin-bottom: 7rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

export const SectionTitle = styled.div`
  ${({ theme }) => theme.fonts.r_48}
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#000" : "#888")};
  cursor: pointer;

  @media (max-width: 768px) {
    ${({ theme }) => theme.fonts.r_36}
  }

  @media (max-width: 480px) {
    ${({ theme }) => theme.fonts.r_28}
  }
`;

export const Divider = styled.div`
  width: 0.1rem;
  height: 3.6rem;
  background-color: #ccc;

  @media (max-width: 768px) {
    height: 3rem;
  }

  @media (max-width: 480px) {
    height: 2.5rem;
  }
`;

export const QuestionGroup = styled.div`
  font-family: pretendard;
  display: flex;
  flex-direction: column;
  gap: ${({ activeTab }) => (activeTab === "FAQ" ? "3.9rem" : "8rem")}; /* FAQ 탭과 Q&A 탭 간격 조정 */
  width: 100%;
  max-width: 120rem;
  height: auto;
  align-items: center;
  position: relative;
  margin-bottom: ${({ activeTab }) => (activeTab === "FAQ" ? "7.9rem" : "7.9rem")}; /* FAQ와 푸터 사이 간격 조정 */
  @media (max-width: 768px) {
    gap: ${({ activeTab }) => (activeTab === "FAQ" ? "3rem" : "6rem")};
    max-width: 90rem;
  }

  @media (max-width: 480px) {
    gap: ${({ activeTab }) => (activeTab === "FAQ" ? "2rem" : "4rem")};
    max-width: 80rem;
  }

`;

//faq버튼 부븐
export const FaqDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 120rem;
  height: 66rem;
  background-color: #ffffff;
  border-radius: 4rem;
  border: 1.5px #000000 solid;
  padding: 5rem;
  margin-bottom: 7rem;
  margin-top: 10rem;

  @media (max-width: 768px) {
    padding: 4rem;
    height: 70rem;
    max-width: 100rem;
  }

  @media (max-width: 480px) {
    padding: 3rem;
    height: auto;
    max-width: 90rem;
  }
`;

export const BackButton = styled.button`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  background: none;
  border: none;
  cursor: pointer;
  margin-top:10rem;
  margin-bottom: -8rem;
  margin-left: 10%;
  align-self: flex-start; /* 부모 컨테이너 기준 왼쪽 정렬 */
  z-index: 10; /* 다른 요소 위에 표시되도록 설정 */
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 20rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-left: 10rem;
  }
`;

export const FaqDetailTitle = styled.h2`
  font-size: 3.3rem;
  font-weight: 400;
  margin-bottom: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.black};
  margin: 2rem 0;
  z-index: 1; /* 다른 요소 위에 보이도록 설정 */
  position: relative; /* 위치 설정 */

  @media (max-width: 768px) {
    margin: 2.5rem 0;
  }

  @media (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const FaqDetailContent = styled.p`
  font-size: 2.4rem;
  line-height: 3rem;
  color: #000000;
  margin-top:5rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

//qna쪽
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;
  padding-bottom: 2rem; /* 질문 박스와 답변 상태 사이 간격 조정 */
  margin-bottom: -5rem;

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
    margin-bottom: -4rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 1rem;
    margin-bottom: -3rem;
  }
`;

export const AnswerStatus = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  font-family: pretendard;
  color: ${({ answered }) => (answered ? '#EA4343' : '#000000')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const StatusIcon = styled.span`
  width: 3.3rem;
  height: 3.3rem;
  margin-right: 1rem;
  margin-left: 4rem;
  background-size: cover;
  background-image: url(${({ answered }) => answered ? CompleteIcon : WaitingIcon});

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const QuestionBox = styled.button`
  width: 100%;
  max-width: 144rem;
  height: 14rem;
  flex-shrink: 0;
  border-radius: 4rem;
  border: 1.5px #000000 solid;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding: 4rem;
  font-family: pretendard;
  font-size: 2.7rem;
  font-weight: 300;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 12rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    height: 10rem;
    padding: 1rem;
  }
`;

//작성등록
export const WriteButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 19.5rem;
  right: 13%;
  ${({ theme }) => theme.fonts.xb_27_60}
  font-weight: 600;
  cursor: pointer;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    top: 16rem;
    right: 12rem;
  }

  @media (max-width: 480px) {
    top: 14rem;
    right: 10rem;
  }
`;

export const PencilIcon = styled.span`
  width: 3.3rem;
  height: 3.3rem;
  background-image: url(${PencilIconImage});
  background-size: cover;
  display: inline-block;
`;

export const Input = styled.input`
  font-family: pretendard;
  width: 90%;
  height: 10rem;
  padding: 5rem;
  font-size: 2.5rem;
  border-radius: 4rem;
  border: 1.5px #000000 solid;
  background-color: #FFFFFF;
  flex-shrink: 0; /* 크기 유지 */
  font-weight: 400;

  ::placeholder {
      color: #000000;
      opacity: 0.5;
    }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    height: 8rem;
    margin: 0 20rem -2.5rem 20rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    height: 7rem;
    margin: 0 15rem -2rem 15rem;
  }
`;

export const TextArea = styled.textarea`
  margin-top: -4rem;
  width: 90%;
  height: 40rem;
  padding: 5rem;
  font-size: 2.5rem;
  border: 1.5px #000000 solid;
  border-radius: 4rem;
  background-color: #FFFFFF;
  font-weight: 400;
  font-family: pretendard;
  resize: none; /* 크기 조절 비활성화 */
  flex-shrink: 0; /* 크기 유지 */

  ::placeholder {
      color: #000000;
      opacity: 0.5;
    }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    height: 40rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    height: 35rem;
  }
`;

export const SaveButton = styled.button`
  height: 8rem;
  width: 55rem;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 2.5rem;
  font-size: 3rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center; /* 버튼을 중앙에 배치 */
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
    height: 8rem;
  }

  @media (max-width: 480px) {
    width: 35rem;
    height: 7rem;
  }
`;

//qna버튼부분
export const QnADetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 120rem;
  height: ${({ isAnswered }) => (isAnswered ? "auto" : "40rem")}; /* 답변 대기 시 높이 조정 */
  background-color: #ffffff;
  border-radius: 4rem;
  border: 1.5px #000000 solid;
  padding: 5rem;
  position: relative;
  margin-bottom: 20rem;
  margin-top: 10rem;

  @media (max-width: 768px) {
    padding: 4rem;
    max-width: 110rem;
  }

  @media (max-width: 480px) {
    padding: 3rem;
    max-width: 90rem;
  }
`;

export const AnswerWrapper = styled.div`
  display: flex;
  align-items: center; /* 세로축 중앙 정렬 */
  justify-content: space-between; /* 가로축 왼쪽 정렬 */
  width: 100%;
  max-width: 125rem;
  padding: 2rem; /* 내부 여백 */
  gap: 3rem; /* 로고와 텍스트 박스 사이 간격 */
  margin-top: -17rem; /* 위 요소와 간격 */
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -15rem;
    margin-bottom: 8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: -12rem;
    margin-bottom: 6rem;
  }
`;

export const AnsweredBox = styled.div`
  flex-direction: column;
  padding: 10rem; //검정박스 위아래 조정
  background-color: #2E2E2E;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4rem;
  width: 100%;
  max-width: 110rem;
  text-align: left;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  height: 4rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 8rem;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    padding: 6rem;
    font-size: 18px;
  }
`;
export const LogoImage = styled.img`
  flex-direction: column;
  width: 16rem; /* 로고 크기 */
  height: 16rem;
  object-fit: cover; /* 이미지를 박스에 맞게 조정 */
  border-radius: 50%; /* 원형으로 표시 */
  flex-shrink: 0; /* 로고 크기 고정 */

  @media (max-width: 768px) {
    width: 15rem;
    height: 15rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 10rem;
  }
`;

//흰색박스 글자 폰트
export const QnADetailTitle = styled.h2`
  font-size: 3.3rem;
  font-weight: 400;
  margin-bottom: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const QnADetailContent = styled.p`
  font-size: 2.4rem;
  line-height: 3rem;
  color: #000000;
  margin-top:5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }
`;

//아래 페이지 네이션
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 4rem;
  margin-bottom: 4rem;
`;

export const PageDot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#EA4343' : '#000000')};
  cursor: pointer;
  &:hover {
    background-color: #EA4343;
  }
`;

