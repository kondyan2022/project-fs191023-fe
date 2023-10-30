import { check } from 'prettier';
import { useGetCurrentUserQuery } from '../redux/features/authEndpoints';
import { selectToken } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/features/userToken';
import { useUserLogOutMutation } from '../redux/features/authEndpoints';

export const getCurrentUserHook = (queryKey, queryFn, options = {}) => {
  const isToken = useSelector(selectToken);

  const { data, error, ...args } = useGetCurrentUserQuery(
    queryKey,
    () => {
      if (!isToken) {
        // перевірити чи є токен
        throw new Error('No token available');
      }
      return queryFn();
    },
    { ...options, retry: false },
  );

  const isLoading = args.status === 'loading';
  const isSuccess = args.status === 'success';
  const isError = args.status === 'error';
  console.log('Inside custom hook');

  return { ...args };
  //   return {
  //     data,
  //     error,
  //     isLoading,
  //     isSuccess,
  //     isError,
  //   };
};

const useTokenExpirationControl = (token, checkInterval = 60000) => {
  const dispatch = useDispatch();
  const clearGlobalState = useSelector(selectToken);
  const [userLogOut] = useUserLogOutMutation();
};
