import { useDispatch, useSelector } from 'react-redux';
import {
  useGetCurrentUserQuery,
  useUserLogOutMutation,
} from '../redux/features/authEndpoints';
import { jwtDecode } from 'jwt-decode';
import { logOut } from '../redux/features/userToken';
import { selectToken } from '../redux/selectors';
import { useTokenExpirationCheck } from './controlCurrentUser';
// custom Hook
export const handleCurrentUser = () => {
  const dispatch = useDispatch();
  const [routeLogout] = useUserLogOutMutation();
  const isTokenExist = useSelector(selectToken);
  const { data, error, ...rest } = useGetCurrentUserQuery(isTokenExist, {
    skip: !isTokenExist,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  if (isTokenExist) {
    const decoded = jwtDecode(isTokenExist);
    const timeNow = Date.now();
    const { exp, iat, id } = decoded;
    const liveTimeToken = exp * 1000;
    const isTokenExpired = liveTimeToken - timeNow <= 0 ? true : false;

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
