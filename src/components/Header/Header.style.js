import styled from "styled-components";

export const HeaderWrapper = styled.header`
${({ theme: { mixin } }) => mixin.flexBox({ align: 'center'})};
width:100%;
height:11rem;
background-color: white;
padding: 0 6rem;
box-shadow: 0 2px 5px gray;
`;

export const Logo = styled.div`
display: flex;
margin : 0 60.6rem 0 11.3rem;
`;

export const NavWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({justify:'space-between', align: 'center'})};
width:65.8rem;
height:11rem;
margin : 0 0 0 3rem;
`;

export const NavBtn = styled.div`
${({ theme }) => theme.fonts.r_20};
color: ${({ theme }) => theme.colors.black};
`;
export const NavRedBtn = styled.div`
${({ theme }) => theme.fonts.r_20};
color: ${({ theme }) => theme.colors.dark_red};
`;

export const LoginPageBtn = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ align: 'center'})};
gap: 1.4rem;
height: 4.4rem;
${({ theme }) => theme.fonts.b_20};
color: ${({ theme }) => theme.colors.gray};
`;