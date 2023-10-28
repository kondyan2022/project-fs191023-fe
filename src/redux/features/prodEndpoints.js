import { userSplitApi } from './userApi/fitnesApi';

const productsApiEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
      providesTags: ['products'],
    }),
    getGroupProduct: builder.query({
      query: () => `products/categories`,
      providesTags: ['groups'],
    }),
    getProductByFilter: builder.query({}),
  }),
});

export const { useGetAllProductsQuery, useGetGroupProductQuery } =
  productsApiEndpoints;
