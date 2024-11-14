import styled from "styled-components";

export const ReservationWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.b_55_60}
    width:100%;
    height: calc(100vh - 11rem);
    background-color: ${({ theme }) => theme.colors.white};;  
`;

export const ReservContainerTop = styled.div`

`;