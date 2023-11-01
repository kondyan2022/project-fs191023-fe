import { useDispatch, useSelector } from 'react-redux';
import {
  useGetCurrentUserQuery,
  useUserLogOutMutation,
} from '../redux/features/authEndpoints';
import { logOut } from '../redux/features/userToken';
import { selectToken } from '../redux/selectors';
import { useTokenExpirationCheck } from './controlCurrentUser';
// custom Hook
export const handleCurrentUser = () => {
  const dispatch = useDispatch();
  const [routeLogout] = useUserLogOutMutation();
  const isTokenExist = useSelector(selectToken);
  //
  const { data, error, ...rest } = useGetCurrentUserQuery({
    skip: !isTokenExist,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true, // time ? 600 - 1000
  });

  if (!isTokenExist) {
    return { data: null };
  }
  if (isTokenExist) {
    const isTokenExpired = useTokenExpirationCheck(isTokenExist);
    if (isTokenExpired || error) {
      routeLogout(isTokenExist);
      dispatch(logOut());
    }
  }

  // ----------------------------------------------------------------
  const isLoading = rest.status === 'loading';
  const isSuccess = rest.status === 'success';
  const isFetching = rest.status === 'fetching';
  const isError = rest.status === 'error';

  return { data, error, isSuccess, isLoading, isError, isFetching };
};

// #########################################################################################
