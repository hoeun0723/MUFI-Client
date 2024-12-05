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
`;

export const TitleGroup = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 15.4rem;
  margin-top: 10.7rem; /*중앙*/
  margin-bottom: 10.7rem; 
  width: 100%;
`;

export const SectionTitle = styled.div`
  ${({ theme }) => theme.fonts.r_48}
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#000" : "#888")};
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 0.1rem;
  height: 3.6rem;
  background-color: #ccc;
`;

export const QuestionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ activeTab }) => (activeTab === "FAQ" ? "3.9rem" : "8rem")}; /* FAQ 탭과 Q&A 탭 간격 조정 */
  width: 100%;
  max-width: 120rem;
  height: auto;
  align-items: center;
  position: relative;
  margin-bottom: ${({ activeTab }) => (activeTab === "FAQ" ? "7.9rem" : "7.9rem")}; /* FAQ와 푸터 사이 간격 조정 */
`;

//faq버튼 부븐
export const FaqDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 130rem; /* QuestionGroup과 동일한 너비 */
  height: 80rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4rem;
  padding: 5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 7.9rem;
  margin-top: 10.7rem;
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
  margin-left: 29rem; /* 왼쪽 여백 */
  align-self: flex-start; /* 부모 컨테이너 기준 왼쪽 정렬 */
  z-index: 10; /* 다른 요소 위에 표시되도록 설정 */
`;

export const FaqDetailTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  margin: 3rem 0;
  z-index: 1; /* 다른 요소 위에 보이도록 설정 */
  position: relative; /* 위치 설정 */
`;

export const FaqDetailContent = styled.p`
  font-size: 2.4rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.dark_grey};
  margin-top:5rem;
`;

//qna쪽
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;
  padding-bottom: 2rem; /* 질문 박스와 답변 상태 사이 간격 조정 */
  margin-bottom: -6rem;
`;

export const AnswerStatus = styled.div`
  font-size: 4rem;
  color: ${({ answered }) => (answered ? 'darkred' : 'black')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const StatusIcon = styled.span`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  background-size: cover;
  background-image: url(${({ answered }) => answered ? CompleteIcon : WaitingIcon});
`;

export const QuestionBox = styled.button`
  width: 100%;
  max-width: 144rem;
  height: 14rem;
  flex-shrink: 0;
  border-radius: 4rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 2rem;
  padding-botton: 4rem;
  ${({ theme }) => theme.fonts.r_32_60}
  cursor: pointer;
`;

//작성등록
export const WriteButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 19.5rem;
  right: 15rem;
  ${({ theme }) => theme.fonts.xb_27_60}
  cursor: pointer;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PencilIcon = styled.span`
  width: 3.3rem;
  height: 3.3rem;
  background-image: url(${PencilIconImage});
  background-size: cover;
  display: inline-block;
`;

export const Input = styled.input`
  width: 100%;
  height: 9.252rem;
  padding: 2rem;
  font-size: 4rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.5); /* 반투명 테두리 추가 */
  border-radius: 4rem;
  background: #FFFFFF;
  box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  margin: 0 24rem -3rem 24rem;
  flex-shrink: 0; /* 크기 유지 */
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 45rem;
  padding: 2rem;
  font-size: 4rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.5); /* 반투명 테두리 */
  border-radius: 4rem;
  background: #FFFFFF;
  box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  resize: none; /* 크기 조절 비활성화 */
  flex-shrink: 0; /* 크기 유지 */
`;

export const SaveButton = styled.button`
  width: 50rem;
  height: 10rem;
  background-color: #000;
  color: white;
  ${({ theme }) => theme.fonts.b_36_60}
  border: none;
  border-radius: 4rem;
  cursor: pointer;
  align-self: center; /* 버튼을 중앙에 배치 */
  margin-top: 2rem;
`;

//qna버튼부분
export const QnADetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 130rem;
  height: ${({ isAnswered }) => (isAnswered ? "auto" : "40rem")}; /* 답변 대기 시 높이 조정 */
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5rem;
  padding: 5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  position: relative;
  margin-bottom: 20rem;
  margin-top: 10rem;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  align-items: center; /* 세로축 중앙 정렬 */
  justify-content: space-between; /* 가로축 왼쪽 정렬 */
  width: 100%;
  max-width: 130rem;
  border-radius: 5rem; 
  padding: 2rem; /* 내부 여백 */
  gap: 3rem; /* 로고와 텍스트 박스 사이 간격 */
  margin-top: -17rem; /* 위 요소와 간격 */
  margin-bottom: 10rem;
`;

export const AnsweredBox = styled.div`
  flex-direction: column;
  padding: 10rem; //검정박스 위아래 조정
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5rem;
  width: 100%;
  max-width: 110rem;
  text-align: left;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const LogoImage = styled.img`
  flex-direction: column;
  width: 20rem; /* 로고 크기 */
  height: 20rem;
  object-fit: cover; /* 이미지를 박스에 맞게 조정 */
  border-radius: 50%; /* 원형으로 표시 */
  flex-shrink: 0; /* 로고 크기 고정 */
`;

//흰색박스 글자 폰트
export const QnADetailTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

export const QnADetailContent = styled.p`
  font-size: 2.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.dark_grey};
  margin-top:5rem;
  margin-bottom: -10rem;
`;

//아래 페이지 네이션
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  margin-bottom: 3.8rem;
`;

export const PageDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#49BEBA" : "#ccc")};
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #49BEBA;
  }
`;

