import React from 'react';
import * as S from './SlideMenu.style';

function SlideMenu({ totalPhotos, currentIndex }) {
    const circles = Array.from({ length: 5 }, (_, index) => {
        const isActive = index === currentIndex % 5;
        return (
            <S.Circle key={index} isActive={isActive} />
        );
    });

    return <S.SlideMenuWrapper>{circles}</S.SlideMenuWrapper>;
}

export default SlideMenu;
