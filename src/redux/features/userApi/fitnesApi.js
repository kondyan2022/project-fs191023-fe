import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSplitApi = createApi({
  reducerPath: 'fitnesApi',
  baseQuery: fetchBaseQuery({
    // базовий урл нашого бекенду
    baseUrl: 'https://power-plus-service.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      // збираємо хедер, додаємо токен якщо токен існує у стейті, інакше повертаємо хедер без токена
      const token = getState().token.token; // тягнемо токен зі стору
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['userAuth', 'exercises', 'products'],

  endpoints: () => ({}), // розбив АРІ на дві частини, для чистоти коду
});
