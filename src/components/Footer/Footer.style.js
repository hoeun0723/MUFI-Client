import styled from "styled-components";

export const FooterWrapper = styled.footer`
display: flex;
  justify-content: space-between;
  align-items: flex-start;
width: 100%;
height:52rem;
background-color: ${({ theme }) => theme.colors.black};
color: white;

@media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem;
  }
`;

export const DeveloperSection = styled.div`
display: flex;
flex-direction: column;

@media (max-width: 768px) {
  width: 100%;
  justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;


export const InfoText = styled.p`
  ${({ theme }) => theme.fonts.r_17_44_5};
  margin-left: 8rem;
  width: 65rem;
  color: rgba(255, 255, 255, 0.50);

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    ${({ theme }) => theme.fonts.r_15};
  }
`;

export const Developers = styled.div`
display: flex;
width: 80%;
  margin-bottom: 4rem;
  position: relative;
  top: 15rem;
  ${({ theme }) => theme.fonts.r_40};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 0;
  }

  @media (max-width: 480px) {
    ${({ theme }) => theme.fonts.r_30};
  }
`;

export const DeveloperInfo = styled.div`
  display: flex;
  width: 80%;
  position: relative;
  top: 15rem;
  margin: 2rem 0;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.r_17};
  color: rgba(255, 255, 255, 0.70);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 0;
  }

  & > span {
    text-align: right;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  position: relative;
  top: 3.5rem;
  right: 20rem;
  gap: 1.5rem;
  ${({ theme }) => theme.fonts.r_17};

  @media (max-width: 768px) {
    right: 0;
    justify-content: center;
    top: 0;
    margin-bottom: 2rem;
  }
`;

export const Links = styled.div`
  display: flex;
  position: relative;
  right: 5rem;
  justify-content: space-between;
 
  ${({ theme }) => theme.fonts.r_17};
  color: rgba(255, 255, 255, 0.70);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    right: 0;
  }

  & > p {
    cursor: pointer;
    ${({ theme }) => theme.fonts.r_17};
    width: 17rem;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      width: auto;
      text-align: center;
    }
  }
`;


export const Logo = styled.div`
display: flex;
margin-top: 7rem;
  margin-left: 8rem;
  img {
    width: 300px;
    height: 168.75px;

    @media (max-width: 768px) {
      width: 250px;
      height: auto;
    }

    @media (max-width: 480px) {
      width: 200px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    margin-left: 0;
    justify-content: center;
  }
`;