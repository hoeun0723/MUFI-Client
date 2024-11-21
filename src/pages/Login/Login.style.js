import styled from "styled-components";

export const LoginWrapper =styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
width:100%;
height:100vh;
`;

export const Login = styled.div`
${({ theme }) => theme.fonts.b_48};
margin-bottom: 9.5rem;

`;

export const LoginContext = styled.div`
${({ theme }) => theme.fonts.r_32_60};
margin-bottom: 4.5rem;
`;

export const BtnLoginComplete = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
background-color: ${({ theme }) => theme.colors.dark_red};
width: 60rem;
height:9rem;
color: white;
${({ theme }) => theme.fonts.b_32};
border-radius: 10px;
`;