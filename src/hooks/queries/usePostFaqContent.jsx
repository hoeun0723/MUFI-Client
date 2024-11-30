import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/api';

export const postFaqcontent = async (body) => {
    const response =  await post('/api/faq/content', body);
    return response.data.data;
};

const usePostFaqContent = () => {
    const mutation = useMutation({
        mutationFn: postFaqcontent,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return mutation;
};
export default usePostFaqContent;