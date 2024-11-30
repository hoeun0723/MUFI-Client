import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../apis/api';

export const SUMMARY_QUERY_KEY = ['Qna_Title_Data'];

export const fetchQnatitle = async () => {
    const response = await get('/api/qna/list');
    return response.data;
};

const useGetQnaTitle = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: SUMMARY_QUERY_KEY,
        queryFn: () => fetchQnatitle(),
    });
    return  { data, isLoading, isError };
};

export default useGetQnaTitle;