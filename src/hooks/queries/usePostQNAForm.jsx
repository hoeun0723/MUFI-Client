import { post } from '../../apis/api';
import { useMutation } from '@tanstack/react-query';

export const postQNAForm = async (body) => {
    const response =  await post('/api/qna/register', body);
    return response.data;
};

const usePostQNAForm = () => {
    const mutation = useMutation({
        mutationFn: postQNAForm,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return mutation;
};
export default usePostQNAForm