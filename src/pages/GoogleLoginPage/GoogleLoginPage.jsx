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
      const { token, user } = data;
      const isProfile = user.profile ? true : false;
      const action = { token, isProfile };
      dispatch(setToken(action));
    }
  }, [data, dispatch]);

  return <div>Loading ....</div>;
};

export default GoogleLoginPage;
