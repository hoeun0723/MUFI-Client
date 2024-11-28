import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/api';

export const postReservForm = async (body) => {
    const response =  await post('/api/reservation/register', body);
    return response.data;
};

const usePostReservForm = () => {
    const mutation = useMutation({
        mutationFn: postReservForm,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return mutation;
};
export default usePostReservForm