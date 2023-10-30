import { userSplitApi } from './userApi/fitnesApi';

const diaryEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDiary: builder.query({
      query: (dayData) => `users/diary/${dayData}`,
      providesTags: ['userAuth'],
    }),
    addDairyExercises: builder.mutation({
      query: (exercise) => ({
        url: `diary/exercise`,
        method: 'POST',
        body: exercise,
      }),
    }),
    delteDairyExercises: builder.mutation({
      query: (exerciseData) => ({
        url: `diary/exercise`,
        method: 'DELETE',
        body: exerciseData,
      }),
    }),
    //
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

export const {
  useGetUserDiaryQuery,
  useAddDairyExercisesMutation,
  useAddDiaryProductsMutation,
  useDeleteDiaryProductsMutation,
  useDelteDairyExercisesMutation,
} = diaryEndpoints;
