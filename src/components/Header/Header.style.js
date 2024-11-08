import styled from "styled-components";

export const HeaderWrapper = styled.header`
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-around', align: 'center'})};
width:100%;
height:11rem;
background-color: white;
border: 1px solid black;
`;

export const NavBtn = styled.div`
width: 15rem;
${({ theme }) => theme.fonts.r_20}
`;