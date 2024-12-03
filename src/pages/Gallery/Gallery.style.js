import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const GalleryWrapper = styled.div`
    ${({ theme }) => theme.fonts.b_55_60}
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 11rem);
    background-color: ${({ theme }) => theme.colors.light_gray};
`;

export const PhotoContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 5rem;
`;

export const PhotoContainer = styled.div`
    display: flex;
    gap: 6rem;
    transition: transform 0.5s cubic-bezier(0.5, 1, 0.5, 1);
    justify-content: center;
    position: relative;
`;

export const ArrowButton = styled.button`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    margin: 0 10%;
    background-color: unset; 
    box-shadow: none; 

    &.left {
        left: 1rem;
    }

    &.right {
        right: 1rem;
    }
`;

export const LeftIcon = styled(IoIosArrowBack)`
    color: #000000;
    font-size: 10rem;
`;

export const RightIcon = styled(IoIosArrowForward)`
    color: #000000;
    font-size: 10rem;
`;

export const FullScreenOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
`;

export const FullScreenImage = styled.img`
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    opacity: 1;
`;
