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
`;

export const HomeArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const HomeArticle = styled.img`
    height: auto;
    max-width: 50rem;
    max-height: 100%;
    object-fit: contain;

    opacity: ${({ fade }) => (fade ? 1 : 0)}; 
    transition: opacity 0.5s ease-in-out; 
`;

export const CustomSlideMenuWrapper = styled.div`
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 1rem 0;
`;

export const CustomCircle = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 2.5px solid ${({ isActive }) => (isActive ? '#EA4343' : '#FFFFFF')};
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
`;
