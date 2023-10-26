import { userSplitApi } from './userApi/fitnesApi';

const productsApiEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
      providesTags: ['products'],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApiEndpoints;
