import styled from "styled-components";

export const FooterWrapper = styled.footer`
display: flex;
  justify-content: space-between;
  align-items: flex-start;
width: 100%;
height:52rem;
background-color: ${({ theme }) => theme.colors.black};
color: white;
`;

export const DeveloperSection = styled.div`
display: flex;
flex-direction: column;
`;


export const InfoText = styled.p`
  ${({ theme }) => theme.fonts.r_17_44_5};
  margin-left: 8rem;
  width: 65rem;
  color: rgba(255, 255, 255, 0.50);
`;

export const Developers = styled.div`
display: flex;
width: 80%;
  margin-bottom: 4rem;
  position: relative;
  top: 15rem;
  ${({ theme }) => theme.fonts.r_40};
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

  & > span {
    text-align: right;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  position: relative;
  top: 3.5rem;
  right: 20rem;
  gap: 1.5rem;
  ${({ theme }) => theme.fonts.r_17};
`;

export const Links = styled.div`
  display: flex;
  position: relative;
  right: 5rem;
  justify-content: space-between;
 
  ${({ theme }) => theme.fonts.r_17};
  color: rgba(255, 255, 255, 0.70);

  & > p {
    cursor: pointer;
    ${({ theme }) => theme.fonts.r_17};
    width: 17rem;

    &:hover {
      text-decoration: underline;
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
  }

`;