import styled from 'styled-components';

export const GalleryPhotoWrapper = styled.div`
    position: relative;
    width: 30rem;
    height: calc(100vh - 18rem);
    flex-shrink: 0;
    transition: opacity 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FrameImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
`;