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
  }),
});

export const { useGetAllExercisesQuery, useGetGroupExercisesQuery } =
  exercisesApiEndpoints;
