// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/authSlice';
// import PropTypes from 'prop-types';

export const PublicRoute = ({
  children,
  restricted = false,
  isLoggedIn = false,
}) => {
  //   const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn && restricted ? <Navigate to="/" /> : children;
};

// PublicRoute.propTypes = { restricted: PropTypes.bool };
