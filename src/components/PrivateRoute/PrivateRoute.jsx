import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { hasProfile } from '../../redux/selectors';

// import { getIsLoggedIn } from 'redux/authSlice';

// const PROFILE_FILLED = true;

export const PrivateRoute = ({
  isLoggedIn = false,
  selfCall = false,
  children,
}) => {
  const profileFilled = useSelector(hasProfile);

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
