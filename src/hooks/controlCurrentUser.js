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

function convertSecondsToUserFriendlyFormat(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const formattedTime = `${hours} годин ${minutes} хвилин ${seconds} секунд`;
  return formattedTime;
}

export const useTokenExpirationCheck = (ExtToken, checkInterval = 60000) => {
  // const token = 'token';
  const decoded = jwtDecode(ExtToken);
  const timeNow = Date.now();
  const { exp, iat, id } = decoded;
  // ********************************

  const liveTimeToken = exp / 1000;

  const restTime = liveTimeToken - timeNow;

  // const formattedTime = `${hours} годин ${minutes} хвилин ${remainingSeconds} секунд`;
  console.log('Time token: ', liveTimeToken);
  const liveToken = convertSecondsToUserFriendlyFormat(exp);
  console.log('Time token: ', liveToken);
  console.log('Diferences: ', restTime);
  console.log('Deecoded token: ', exp, iat, id);
};
