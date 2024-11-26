import { useEffect, useState } from 'react';
import Loading from '../../../pages/Loading/Loading';
import useGetLoginToken from '../../../hooks/queries/useGetLoginToken';
import usePostLoginToken from '../../../hooks/queries/usePostLoginToken';

function LoginCallback() {
  const [loginToken, setLoginToken] = useState('');

  const handleLoginToken = (token) => {
    setLoginToken(token);
  };

  const getMutation = useGetLoginToken({ handleLoginToken });
  const postMutation = usePostLoginToken();

  useEffect(() => {
    loginToken === '' ? getMutation.mutate() : postMutation.mutate(loginToken);
  }, [loginToken]);

  return <Loading />;
}

export default LoginCallback;
