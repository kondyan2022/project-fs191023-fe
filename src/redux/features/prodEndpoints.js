import { userSplitApi } from './userApi/fitnesApi';

export const productsApiEndpoints = userSplitApi.injectEndpoints({
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
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems, { arg }) => {
        currentCache.results =
          arg.page === 0
            ? [...newItems.results]
            : [...currentCache.results, ...newItems.results];
      },
      forceRefetch({ currentArg, previousArg }) {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
      providesTags: ['products'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetGroupProductQuery,
  useGetProductByFilterQuery,
} = productsApiEndpoints;
