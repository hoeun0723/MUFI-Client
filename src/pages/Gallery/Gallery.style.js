import styled from 'styled-components';
import { AiTwotoneLeftCircle, AiTwotoneRightCircle } from "react-icons/ai";

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
    margin: 0 13rem;

    &.left {
        left: 1rem;
    }

    &.right {
        right: 1rem;
    }
`;

export const LeftIcon = styled(AiTwotoneLeftCircle)`
    color: #000000;
    font-size: 10rem;
`;

export const RightIcon = styled(AiTwotoneRightCircle)`
    color: #000000;
    font-size: 10rem;
`;
