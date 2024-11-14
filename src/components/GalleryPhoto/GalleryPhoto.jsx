import React from 'react';
import * as S from './GalleryPhoto.style';
import blackframe from '../../assets/png/blackframe.png';

function GalleryPhoto({ image, opacity }) {
    return (
        <S.GalleryPhotoWrapper style={{ opacity }}>
            <S.FrameImage src={blackframe} alt="black frame" />
            {/* 여기에 예시사진 */}
        </S.GalleryPhotoWrapper>
    );
}

export default GalleryPhoto;
