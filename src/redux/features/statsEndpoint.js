import { userSplitApi } from './userApi/fitnesApi';

const statsApiEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => `stats`,
    }),
    providesTags: ['diary'],
  }),
});

export const { useGetStatsQuery } = statsApiEndpoints;
