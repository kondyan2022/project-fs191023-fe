import { jwtDecode } from 'jwt-decode';

export const useTokenExpirationCheck = (ExtToken) => {
  if (!ExtToken) {
    return null;
  }
  // ********************************
  const decoded = jwtDecode(ExtToken);
  const timeNow = Date.now();
  const { exp } = decoded;
  // ********************************
  const liveTimeToken = exp * 1000;
  const expiredTime = liveTimeToken - timeNow;
  // ****************************************************************

  if (expiredTime > 0) {
    return false;
  }

  return true;
};
