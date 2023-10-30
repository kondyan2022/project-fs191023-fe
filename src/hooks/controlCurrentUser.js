import { check } from 'prettier';
import { useGetCurrentUserQuery } from '../redux/features/authEndpoints';
import { selectToken } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/features/userToken'; // очищення глобального стейту
import { useUserLogOutMutation } from '../redux/features/authEndpoints';
import { useEffect, useState } from 'react';
import React from 'react';
import { useJwt } from 'react-jwt';
const token = 'Your JWT';

// export const getCurrentUserHook = (queryKey, queryFn, options = {}) => {
//   const isToken = useSelector(selectToken);

//   const { data, error, ...args } = useGetCurrentUserQuery(
//     queryKey,
//     () => {
//       if (!isToken) {
//         // перевірити чи є токен
//         throw new Error('No token available');
//       }
//       return queryFn();
//     },
//     { ...options, retry: false },
//   );

//   const isLoading = args.status === 'loading';
//   const isSuccess = args.status === 'success';
//   const isError = args.status === 'error';
//   console.log('Inside custom hook');

//   return { ...args };
//   //   return {
//   //     data,
//   //     error,
//   //     isLoading,
//   //     isSuccess,
//   //     isError,
//   //   };
// };

const ExpirationControl = ({ children }) => {
  const dispatch = useDispatch();
  const tokenInState = useSelector(selectToken); // токен
  const [userLogOut] = useUserLogOutMutation(); // хук логаута користувача
  const { decodedToken, isExpired } = useJwt(tokenInState);
  //
  if (isExpired) {
    userLogOut(tokenInState);
    dispatch(logOut());
  }

  // const isValidToken = isExpired(tokenInState);
  console.log('Decoded token: ', decodedToken);
  console.log('Token is Expired: ', isExpired);

  return children;
};

// import { useState, useEffect } from 'react';
// import { useLogout } from './useLogout'; // Припустимо, що у вас є окремий хук для виходу

// const useTokenExpirationCheck = (token, checkInterval = 60000) => {
//   // const logout = useLogout(); // Отримати функцію для виходу користувача

//   useEffect(() => {
//     let intervalId;
//     const checkTokenExpiration = () => {
//       // Перевірити тут стан токену, наприклад, час його закінчення
//       if (token && token.expiresAt <= Date.now()) {
//         // Токен протух, викликаємо функцію для виходу
//         // logout();
//       }
//     };
//     // Почати періодичну перевірку стану токену
//     intervalId = setInterval(checkTokenExpiration, checkInterval);

//     // Зупинити перевірку при виході з компонента
//     return () => clearInterval(intervalId);
//   }, [token, checkInterval, logout]);
// };

export default ExpirationControl;
