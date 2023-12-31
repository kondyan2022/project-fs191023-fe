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
        url: `exercises/search`,
        method: 'GET',
        params,
      }),
      providesTags: ['exercises'],
      invalidatesTags: ['exercises'],
    }),
  }),
});

export const {
  useGetAllExercisesQuery,
  useGetGroupExercisesQuery,
  useGetExercisesByFilterQuery,
} = exercisesApiEndpoints;
