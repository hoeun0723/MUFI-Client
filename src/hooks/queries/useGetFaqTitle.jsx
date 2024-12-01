//get faq title
import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../apis/api';

export const SUMMARY_QUERY_KEY = ['Faq_Title_Data'];

export const fetchFaqTitle = async () => {
    const response = await get('/api/faq/list');
    return response.data;
};

const useGetFaqTitle = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: SUMMARY_QUERY_KEY,
        queryFn: () => fetchFaqTitle(),
    });
    return  { data, isLoading, isError };
};

export default useGetFaqTitle;