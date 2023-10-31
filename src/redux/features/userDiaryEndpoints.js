import { userSplitApi } from './userApi/fitnesApi';

const diaryEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDiary: builder.query({
      query: (dayData) => `/diary/${dayData}`,
      providesTags: ['userAuth'],
    }),
    addDairyExercises: builder.mutation({
      query: (exercise) => ({
        url: `diary/exercise`,
        method: 'POST',
        body: exercise,
      }),
    }),
    delteDairyExercises: builder.mutation({}),
    addDiaryProducts: builder.mutation({
      query: (product) => ({
        url: `diary/product`,
        method: 'POST',
        body: product,
      }),
    }),
    deleteDiaryProducts: builder.mutation({
      query: (prodData) => ({
        url: `diary/product`,
        method: 'DELETE',
        body: prodData,
      }),
    }),
  }),
});

export const { useGetUserDiaryQuery,useDeleteDiaryProductsMutation,useDelteDairyExercisesMutation } = diaryEndpoints;
