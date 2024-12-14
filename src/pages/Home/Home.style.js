import styled from "styled-components";
import ChatButtonSvg from '../../assets/svg/ChatButton.svg';

export const HomeWrapper = styled.div`
    ${({ theme }) => theme.fonts.b_55_60}
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 11rem);
    background-color: ${({ theme }) => theme.colors.dark};

    

    @media (max-width: 768px) {
        ${({ theme }) => theme.fonts.b_40_50};
        height: calc(100vh - 8rem);
    }

    @media (max-width: 480px) {
        ${({ theme }) => theme.fonts.b_30_40};
        height: calc(100vh - 6rem);
    }
`;


export const HomeArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        margin-top: 1.5rem;
    }

    @media (max-width: 480px) {
        margin-top: 1rem;
    }
`;

export const HomeArticle = styled.img`
    height: auto;
    max-width: 50rem;
    max-height: 100%;
    object-fit: contain;

    opacity: ${({ fade }) => (fade ? 1 : 0)}; 
    transition: opacity 0.5s ease-in-out; 

    @media (max-width: 768px) {
        max-width: 40rem;
    }

    @media (max-width: 480px) {
        max-width: 30rem;
    }
`;

export const CustomSlideMenuWrapper = styled.div`
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 1rem 0;

    @media (max-width: 768px) {
        gap: 2rem;
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const CustomCircle = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 2.5px solid ${({ isActive }) => (isActive ? '#EA4343' : '#FFFFFF')};

    @media (max-width: 768px) {
        width: 1rem;
        height: 1rem;
        border-width: 2px;
    }

    @media (max-width: 480px) {
        width: 0.8rem;
        height: 0.8rem;
        border-width: 1.5px;
    }
`;

export const ChatButton = styled.button`
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    width: 12rem;
    height: 12rem;
    background: url(${ChatButtonSvg}) no-repeat center/cover;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 9rem;
        height: 9rem;
        bottom: 3rem;
        right: 3rem;
    }

    @media (max-width: 480px) {
        width: 7rem;
        height: 7rem;
        bottom: 2rem;
        right: 2rem;
    }
`;
