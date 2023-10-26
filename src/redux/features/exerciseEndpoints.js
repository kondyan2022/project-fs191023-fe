import { userSplitApi } from './userApi/fitnesApi';

const exercisesApiEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExercises: builder.query({
      query: () => `exercises`,
      providesTags: ['exercises'],
    }),
  }),
});

export const { useGetAllExercisesQuery } = exercisesApiEndpoints;
