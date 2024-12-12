import styled from "styled-components";
import ReservButton from '../../assets/png/inqButton.png';
import DistLine from '../../assets/png/DistLine.png';
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

export const ReservationWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const ReservContainerTop = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }

  @media (max-width: 480px) {
    align-items: center;
    width: 100%;
  }
`;

export const SharedCalendar = styled.div`
  width: 50rem;
  height: 50rem;
  border: 2px solid none;

  @media (max-width: 768px) {
    width: 40rem;
    height: 40rem;
  }

  @media (max-width: 480px) {
    width: 30rem;
    height: 30rem;
  }
`;

export const TopHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoMessage = styled.p`
  font-size: 2rem;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    display: none;
    font-size: 1.6rem;
  }
`;

export const QuickInquire = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  gap: 8rem;
  margin-bottom: 11rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    gap: 5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    gap: 3rem;
    margin-bottom: 8rem;
  }
`;

export const QuickInquireIcons = styled.div`
  display: flex;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.dark_red};

  svg {
    width: 6rem;
    height: 6rem;

    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }

    @media (max-width: 480px) {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const SelectDate = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;

  select {
    font-size: 1.4rem;
    padding: 0.5rem;
    width: 14rem;
    height: 4rem;
    border-radius: 0;
    border: 1.4px solid #000000;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      width: 12rem;
      height: 3.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      width: 10rem;
      height: 3rem;
    }
  }
`;

export const InfoMessageDate = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.dark_red};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ReservContainerMiddle = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  margin-top: 4rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const ReservationForm = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  input {
    width: 58rem;
    height: 6rem;
    font-size: 1.5rem;
    padding: 0.8rem;
    border: 1px solid #000000;
    background-color: #ffffff;
    color: #000000;

    ::placeholder {
      color: #000000;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      width: 48rem;
      height: 5rem;
    }

    @media (max-width: 480px) {
      width: 38rem;
      height: 4rem;
    }
  }

  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 58rem;
    height: 6rem;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.8rem;
    background-color: ${({ theme }) => theme.colors.light_gray};
    color: #000000;
    cursor: pointer;
    border: 1px solid #000000;
    border-radius: 999px;
    text-align: center;

    @media (max-width: 768px) {
      width: 48rem;
      height: 5rem;
    }

    @media (max-width: 480px) {
      width: 38rem;
      height: 4rem;
    }
  }
`;

export const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 2rem 0;
  width: 58rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #000000;

    @media (max-width: 768px) {
      width: 1.8rem;
      height: 1.8rem;
    }

    @media (max-width: 480px) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  input {
    width: 16rem;
    text-align: center;

    @media (max-width: 768px) {
      width: 14rem;
    }

    @media (max-width: 480px) {
      width: 12rem;
    }
  }
`;

export const CheckContainer = styled.div`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 400;
  margin-top: 4rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  strong {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const DetailCheck = styled.div`
  margin-top: 3rem;
  font-size: 1.8rem;
  line-height: 2rem;
  text-align: left;
  line-height: 4rem;
  margin-bottom: 6rem;

  strong {
    font-weight: 700;
  }
`;

export const DistanceCheck = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  font-weight: 400;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.dark_red};

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const DistanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 37rem;

  @media (max-width: 768px) {
    gap: 25rem;
  }

  @media (max-width: 480px) {
    gap: 15rem;
  }
`

export const StyledDeliveryTruck = styled(CiDeliveryTruck)`
  width: 6rem;
  height: 6rem;
  color: ${({ theme }) => theme.colors.dark_red};

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 480px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const StyledLine = styled.div`
  background-image: url(${DistLine});
  width: 45rem;
  height: 5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 35rem;
    height: 4rem;
  }

  @media (max-width: 480px) {
    width: 25rem;
    height: 3rem;
  }
`

export const StyledUserIcon = styled(AiOutlineUser)`
  width: 6rem;
  height: 6rem;
  color: ${({ theme }) => theme.colors.dark_red};

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 480px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const EstimateCheck = styled.div`
  margin-bottom: 3rem;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: row;
  gap: 12rem;
  align-items: center;
  justify-content: center;
`;

export const EstimateText = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
`;

export const EstimateAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  opacity: 0.5;
`;

export const EstimateInfo = styled.p`
  font-size: 1.4rem;
  color: #000000;
  opacity: 0.5;
`;

export const InquiryButton = styled.button`
  position: relative;
  left: 35%;
  width: 18rem;
  height: 8rem;
  background-image: url(${ReservButton});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin-bottom: 5rem;
`;

export const ReservContainerBottom = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 10rem;
  margin-bottom: 8rem;
`;

export const TermsTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const TermsAndCond = styled.p`
  font-size: 1.4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  border: 2px solid #2f16ff;
`;

export const ErrorMessage = styled.p`
  text-align: left;
  color: red;
  margin-top: -1rem;
  font-size: 1.2rem;
  font-weight: 700;
`;