import styled from "styled-components";

export const HeaderWrapper = styled.header`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column'})};
width:100%;
height:11rem;
background-color: white;
border: 1px solid black;
`;

export const NavBtn = styled.div`
width: 15rem;

`;