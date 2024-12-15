import styled from "styled-components";

export const LoginWrapper =styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
width:100%;
height: calc(100vh - 11rem);
`;

export const Login = styled.div`
${({ theme }) => theme.fonts.b_48};
margin-bottom: 7rem;


`;

export const LoginContext = styled.div`
${({ theme }) => theme.fonts.r_32_60};
margin-bottom: 7rem;
font-weight: 200;
`;

export const BtnLoginComplete = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
background-color: ${({ theme }) => theme.colors.dark_red};
width: 55rem;
height:8rem;
color: white;
font-size: 3rem;
font-family: pretendard;
border-radius: 10px;
font-weight: 700;
cursor: pointer;
`;

export const Logout = styled.button`
${({ theme }) => theme.fonts.b_20};

font-weight: 400;
font-size: 2rem;
color: #000000;
opacity: 0.5;
position: relative;
bottom: 10rem;
background-color: transparent;
color: #616161;
top: 4rem;
text-decoration: underline;
`;