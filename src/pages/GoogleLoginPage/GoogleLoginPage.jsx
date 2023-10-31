import { useEffect, useRef } from 'react';

import { useUserGoogleSignInMutation } from '../../redux/features/authEndpoints';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/features/userToken';

const GoogleLoginPage = () => {
  const [searchParams] = useSearchParams();
  const [loginGoogle, { data }] = useUserGoogleSignInMutation();
  const dispatch = useDispatch();
  const onlyOne = useRef(true);

  useEffect(() => {
    const email = searchParams.get('email');
    if (email && onlyOne.current) {
      onlyOne.current = false;
      loginGoogle({ email });
    }
  }, [loginGoogle, searchParams]);

  useEffect(() => {
    if (data && data.token) {
      dispatch(setToken(data.token));
    }
  }, [data, dispatch]);

  return <div>Loading ....</div>;
};

export default GoogleLoginPage;
