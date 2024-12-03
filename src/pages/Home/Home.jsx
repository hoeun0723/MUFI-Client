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
      // Initialize Kakao SDK
      if (!window.Kakao.isInitialized()) {
          window.Kakao.init('54228aecdc9c2f3347b322d0cb9620d0');
          console.log('Kakao SDK Initialized:', window.Kakao.isInitialized());
      }
    }, []);

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

    const handleChatButtonClick = () => {
      if (window.Kakao && window.Kakao.Channel) {
          window.Kakao.Channel.chat({
              channelPublicId: '_aeFEG',
          });
      } else {
          console.error('Kakao SDK is not initialized or Kakao.Channel is unavailable.');
      }
    };

    return (
        <S.HomeWrapper>
            <S.HomeArticleWrapper>
                <S.HomeArticle
                    src={images[currentIndex]}
                    fade={fade}
                />
                <S.CustomSlideMenuWrapper>{circles}</S.CustomSlideMenuWrapper>
            </S.HomeArticleWrapper>
            <S.ChatButton onClick={handleChatButtonClick}/>
        </S.HomeWrapper>
    );
}

export default Start;
