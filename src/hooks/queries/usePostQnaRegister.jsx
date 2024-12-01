import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/api';


export const postQnaregister = async (body) => {
    const response =  await post('api/qna/register', body);
    return response.data;
};

const usePostQnaRegister = () => {
    const mutation = useMutation({
        mutationFn: postQnaregister,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return mutation;
};
export default usePostQnaRegister;