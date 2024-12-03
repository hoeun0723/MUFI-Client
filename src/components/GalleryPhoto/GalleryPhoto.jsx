import React from 'react';
import * as S from './GalleryPhoto.style';
import blackframe from '../../assets/png/blackframe.png';

function GalleryPhoto({ image, opacity, onClick }) {
    return (
        <S.GalleryPhotoWrapper style={{ opacity }} onClick={onClick}>
            <S.FrameImage src={blackframe} alt="black frame" />
            <S.PhotoImage src={image} alt="photo" />
        </S.GalleryPhotoWrapper>
    );
}

export default GalleryPhoto;
