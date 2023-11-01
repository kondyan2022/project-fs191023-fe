import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//
// const REACT_APP_API_URL = 'https://power-plus-service.onrender.com';
const REACT_APP_API_URL = 'http://localhost:3000';
//
export const userSplitApi = createApi({
  reducerPath: 'fitnesApi',
  baseQuery: fetchBaseQuery({
    // базовий урл нашого бекенду
    baseUrl: REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // збираємо хедер, додаємо токен якщо токен існує у стейті, інакше повертаємо хедер без токена
      const token = getState().token.token; // тягнемо токен зі стору
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['userAuth', 'groups', 'diary', 'exercises', 'products'],

  endpoints: () => ({}), // розбив АРІ на дві частини, для чистоти коду
});
