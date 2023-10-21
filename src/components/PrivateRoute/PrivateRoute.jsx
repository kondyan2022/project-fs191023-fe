// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/authSlice';

const PROFILE_FILLED = false;

export const PrivateRoute = ({
  isLoggedIn = false,
  selfCall = false,
  children,
}) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);

  const profileFilled = PROFILE_FILLED;
  return isLoggedIn ? (
    selfCall || profileFilled ? (
      children
    ) : (
      <Navigate to="/profile" />
    )
  ) : (
    <Navigate to="/welcome" />
  );
};
