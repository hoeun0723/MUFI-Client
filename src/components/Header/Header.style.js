import styled from "styled-components";

export const HeaderWrapper = styled.header`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify:'space-between',align: 'center'})};
  
  height:11rem;
  padding: 1rem 5rem;
  padding-left: 8rem;
  background-color: white;
  box-shadow: 0 2px 5px gray;

  @media (max-width: 768px) {
    height: 9rem;
    padding: 0.8rem 3rem;
    padding-left: 5rem;
  }

  @media (max-width: 480px) {
    height: 15rem;
    padding: 0.5rem 2rem;
    padding-left: 3rem;
  }
`;

export const Logo = styled.div`
display: flex;
position: sticky;
right: 44.5%;

img {
    height: auto;

    @media (max-width: 768px) {
      width: 10rem;
    }

    @media (max-width: 480px) {
      width: 13rem;
    }
  }

  @media (max-width: 768px) {
    left: -5%;
  }

  @media (max-width: 480px) {
    left: 0;
  }
`;

export const Nav = styled.nav`
${({ theme: { mixin } }) => mixin.flexBox({align: 'center'})};
height:11rem;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    flex-direction:column;
    gap: 1rem;
  }
`;

export const NavLink = styled.a`
${({ theme }) => theme.fonts.r_20};
  text-decoration: none;
  color: ${({ theme, isSpecial }) => 
    isSpecial ? theme.colors.dark_red : theme.colors.black};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.dark_red};
  }

  &.active {
    ${({ theme }) => theme.fonts.b_20};
  }

  @media (max-width: 768px) {
    ${({ theme }) => theme.fonts.b_12};
  }

  @media (max-width: 480px) {
    width: 100%;
    ${({ theme }) => theme.fonts.b_12};
  }
`;
export const Login = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ align: 'center'})};
gap: 1.4rem;
height: 4.4rem;
${({ theme }) => theme.fonts.b_20};
color: ${({ theme }) => theme.colors.gray};
font-weight: 600;
cursor: pointer;

@media (max-width: 768px) {
    gap: 1rem;
    height: 3.8rem;
    ${({ theme }) => theme.fonts.b_12};
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    height: 3.2rem;
    ${({ theme }) => theme.fonts.b_12};
  }
`;