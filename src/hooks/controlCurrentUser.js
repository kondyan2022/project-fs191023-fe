import { useDispatch } from 'react-redux';
import { logOut } from '../redux/features/userToken'; // очищення глобального стейту
import { useUserLogOutMutation } from '../redux/features/authEndpoints';
import { useJwt } from 'react-jwt';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

// export const useTokenExpirationCheck = (token, checkInterval = 60000) => {
//   const dispatch = useDispatch();
//   const [userLogOut] = useUserLogOutMutation(); // хук логаута користувача
//   const { isExpired } = useJwt(() => {});

//   const checkTokenExpiration = () => {
//     if (token) {
//       console.log('IS EXPIRED TOKEN', ':', isExpired);
//       if (isExpired) {
//         // Токен протух, викликаємо функцію для виходу
//         userLogOut();
//         dispatch(logOut());
//       }
//     }
//   };

//   useEffect(() => {
//     checkTokenExpiration();
//     // Почати періодичну перевірку стану токену
//     const intervalId = setInterval(checkTokenExpiration, checkInterval);
//     // Зупинити перевірку при виході з компонента
//     return () => clearInterval(intervalId);
//   }, [checkInterval, userLogOut, dispatch]);
// };

export const useTokenExpirationCheck = (ExtToken, checkInterval = 60000) => {
  const token = 'token';
  const decoded = jwtDecode(ExtToken);
  const { exp, iat, id } = decoded;
  console.log('Deecoded token: ', decoded);

  console.log('Deecoded token: ', exp, iat, id);
};
