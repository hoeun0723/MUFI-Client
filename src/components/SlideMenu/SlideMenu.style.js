import styled from 'styled-components';

export const SlideMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin: 2rem;
`;

export const Circle = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 2.5px solid ${({ isActive }) => (isActive ? '#000000' : '#EA4343')};
`;
