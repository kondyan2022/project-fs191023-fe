// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// import { getIsLoggedIn } from 'redux/authSlice';

// const PROFILE_FILLED = true;

export const PrivateRoute = ({
  isLoggedIn = false,
  selfCall = false,
  children,
  profileFilled = false,
}) => {
  console.log('private route--->>>>>>', profileFilled);

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
