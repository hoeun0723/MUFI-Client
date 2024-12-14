import styled from "styled-components";
import PencilIconImage from '../../assets/png/BiSolidPencil.png';
import WaitingIcon from '../../assets/png/BiMessageRounded.png';
import CompleteIcon from '../../assets/png/BiMessageRoundedCheck.png';

// 공통 Wrapper 스타일
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '130rem'};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5rem;
  padding: 5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  position: relative;
  margin: ${({ marginTop, marginBottom }) => `${marginTop || '10rem'} 0 ${marginBottom || '20rem'}`};

  @media (max-width: 768px) {
    padding: 4rem;
    max-width: 110rem;
  }

  @media (max-width: 480px) {
    padding: 3rem;
    max-width: 90rem;
  }
`;

export const QnAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light_grey};
  width: 100%;
  height: 100%;
  position: relative;

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
  margin: 10.7rem 0;
  width: 100%;

  @media (max-width: 768px) {
    gap: 10rem;
    margin: 7rem 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5rem;
    margin: 5rem 0;
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
  display: flex;
  flex-direction: column;
  gap: ${({ activeTab }) => (activeTab === "FAQ" ? "3.9rem" : "8rem")};
  width: 100%;
  max-width: 120rem;
  align-items: center;
  margin-bottom: 7.9rem;

  @media (max-width: 768px) {
    gap: ${({ activeTab }) => (activeTab === "FAQ" ? "3rem" : "6rem")};
    max-width: 90rem;
  }

  @media (max-width: 480px) {
    gap: ${({ activeTab }) => (activeTab === "FAQ" ? "2rem" : "4rem")};
    max-width: 80rem;
  }
`;

// 공통 버튼 스타일
const Button = styled.button`
  border: none;
  border-radius: 4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.white};
`;

export const BackButton = styled(Button)`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin: 10rem 0 -8rem 29rem;
  align-self: flex-start;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 20rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-left: 10rem;
  }
`;

export const SaveButton = styled(Button)`
  width: 50rem;
  height: 10rem;
  background-color: #000;
  color: white;
  ${({ theme }) => theme.fonts.b_36_60}
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
  border: 0.2rem solid rgba(0, 0, 0, 0.5);
  border-radius: 4rem;
  background: #FFFFFF;
  box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  margin: 0 24rem -3rem 24rem;

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
  width: 100%;
  height: 45rem;
  padding: 2rem;
  font-size: 4rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.5);
  border-radius: 4rem;
  background: #FFFFFF;
  box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  resize: none;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    height: 40rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    height: 35rem;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 3.8rem;
  gap: 1rem;
`;

export const PageDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#49BEBA" : "#ccc")};
  cursor: pointer;

  &:hover {
    background-color: #49BEBA;
  }
`;
