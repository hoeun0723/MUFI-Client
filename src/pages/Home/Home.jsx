import React, { useState, useEffect } from 'react';
import * as S from './Home.style';
import Example from '../../assets/png/homeexample.png';

function Start() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Example, null, Example];
    const maxIndex = images.length;

    // 5초마다 currentIndex 업데이트합니다~
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
        }, 5000);

        return () => clearInterval(interval); 
    }, [maxIndex]);

    const circles = Array.from({ length: 3 }, (_, index) => {
        const isActive = index === currentIndex;
        return <S.CustomCircle key={index} isActive={isActive} />;
    });

    return (
        <S.HomeWrapper>
            <S.HomeArticleWrapper>
                <S.HomeArticle src={images[currentIndex]} />
                <S.CustomSlideMenuWrapper>{circles}</S.CustomSlideMenuWrapper>
            </S.HomeArticleWrapper>
            <S.ChatButton />
        </S.HomeWrapper>
    );
}

export default Start;
