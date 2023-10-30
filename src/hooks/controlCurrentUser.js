import { useGetCurrentUserQuery } from '../redux/features/authEndpoints';
import { selectToken } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

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
