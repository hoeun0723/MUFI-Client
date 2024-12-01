import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/api';

export const postQnacontent = async (body) => {
    const response =  await post('/api/qna/content', body);
    return response.data.data;
};

const usePostQnaContent = () => {
    const mutation = useMutation({
        mutationFn: postQnacontent,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return mutation;
};
export default usePostQnaContent;