import { userSplitApi } from './userApi/fitnesApi';

const productsApiEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
      providesTags: ['products'],
    }),
    getGroupProduct: builder.query({
      query: () => `products/categories`,
      providesTags: ['products'],
    }),
    getProductByFilter: builder.query({
      query: (params) => ({
        url: `products/search`,
        method: 'GET',
        params,
        providesTags: ['products'],
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetGroupProductQuery,
  useGetProductByFilterQuery,
} = productsApiEndpoints;
