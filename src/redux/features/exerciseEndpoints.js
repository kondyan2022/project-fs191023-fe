import { userSplitApi } from './userApi/fitnesApi';

const exercisesApiEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExercises: builder.query({
      query: () => `exercises`,
      providesTags: ['exercises'],
    }),
    getGroupExercises: builder.query({
      query: () => `exercises/exercisegroups`,
      providesTags: ['groups'],
    }),
    getExercisesByFilter: builder.query({
      query: (params) => ({
        url: `products/search`,
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const {
  useGetAllExercisesQuery,
  useGetGroupExercisesQuery,
  useGetExercisesByFilterQuery,
} = exercisesApiEndpoints;
