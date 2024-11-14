import React, { useState } from 'react';
import * as S from './Gallery.style';
import SlideMenu from '../../components/SlideMenu/SlideMenu';
import GalleryPhoto from '../../components/GalleryPhoto/GalleryPhoto';

function Gallery() {
    const photos = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        image: `catphoto_${index + 1}`
    }));

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
    };

    const displayedPhotos = Array.from({ length: 5 }, (_, index) => {
        const photoIndex = (currentIndex + index) % photos.length;
        return photos[photoIndex];
    });

    return (
        <S.GalleryWrapper>
            <S.PhotoContainerWrapper>
                <S.ArrowButton onClick={handlePrev} className="left">
                    <S.LeftIcon />
                </S.ArrowButton>

                <S.PhotoContainer>
                    {displayedPhotos.map((photo, index) => (
                        <GalleryPhoto
                            key={photo.id}
                            image={photo.image}
                            opacity={index === 0 || index === 4 ? 0.5 : 1}
                        />
                    ))}
                </S.PhotoContainer>

                <S.ArrowButton onClick={handleNext} className="right">
                    <S.RightIcon />
                </S.ArrowButton>
            </S.PhotoContainerWrapper>

            <SlideMenu totalPhotos={photos.length} currentIndex={currentIndex} />
        </S.GalleryWrapper>
    );
}

export default Gallery;
