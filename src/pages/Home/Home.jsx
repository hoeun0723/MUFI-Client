import React, { useState, useEffect } from 'react';
import * as S from './Home.style';
import ExampleA from '../../assets/png/homeEx1.png';
import ExampleB from '../../assets/png/homeEx2.png';
import ExampleC from '../../assets/png/homeEx3.png';

function Start() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const images = [ExampleA, ExampleC, ExampleB];
    const maxIndex = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
                setFade(true);
            }, 400);
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
                <S.HomeArticle
                    src={images[currentIndex]}
                    fade={fade}
                />
                <S.CustomSlideMenuWrapper>{circles}</S.CustomSlideMenuWrapper>
            </S.HomeArticleWrapper>
            <S.ChatButton />
        </S.HomeWrapper>
    );
}

export default Start;
