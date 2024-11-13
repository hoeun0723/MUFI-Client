import styled from "styled-components";

export const HeaderWrapper = styled.header`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify:'space-between',align: 'center'})};
  
  height:11rem;
  padding: 1rem 5rem;
  padding-left: 8rem;
  background-color: white;
  box-shadow: 0 2px 5px gray;
`;

export const Logo = styled.div`
display: flex;
position: relative;
left:-10%;
`;

export const Nav = styled.nav`
${({ theme: { mixin } }) => mixin.flexBox({align: 'center'})};
height:11rem;
  gap: 3rem;
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
`;
export const Login = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ align: 'center'})};
gap: 1.4rem;
height: 4.4rem;
${({ theme }) => theme.fonts.b_20};
color: ${({ theme }) => theme.colors.gray};
`;