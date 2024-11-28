import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../apis/api';

export const GALLERY_QUERY_KEY = ['GALLERY_IMAGE_DATA'];

export const fetchGalleryImg = async () => {
    const response = await get('/api/gallery/image');
    return response.data;
};

const useGetGalleryImg = () => {
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: GALLERY_QUERY_KEY,
        queryFn: () => fetchGalleryImg(),
        onError: (error) => {
            console.error('Error fetching gallery images:', error);
        },
    });
    return { data, isLoading, isError };
};

export default useGetGalleryImg;
