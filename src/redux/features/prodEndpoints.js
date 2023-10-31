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
    getProductByFilter: builder.query({
      query: (params) => ({
        url: `products/search`,
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetGroupProductQuery,
  useGetProductByFilterQuery,
} = productsApiEndpoints;
