import { userSplitApi } from './userApi/fitnesApi';

const diaryEndpoints = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getDiary: builder.query({
      query: (dayData) => `/diary/${dayData}`,
      providesTags: ['diary'],
    }),
    addDairyExercises: builder.mutation({
      query: (exercise) => ({
        url: `diary/exercise`,
        method: 'POST',
        body: exercise,
      }),
      invalidatesTags: ['diary'],
    }),
    deleteDairyExercises: builder.mutation({
      query: (exerciseData) => ({
        url: `diary/exercise`,
        method: 'DELETE',
        body: exerciseData,
      }),
      invalidatesTags: ['diary'],
    }),
    //
    addDiaryProducts: builder.mutation({
      query: (product) => ({
        url: `diary/product`,
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['diary'],
    }),
    deleteDiaryProducts: builder.mutation({
      query: (prodData) => ({
        url: `diary/product`,
        method: 'DELETE',
        body: prodData,
      }),
      invalidatesTags: ['diary'],
    }),
  }),
});

export const {
  useGetDiaryQuery,
  useAddDairyExercisesMutation,
  useAddDiaryProductsMutation,
  useDeleteDairyExercisesMutation,
  useDeleteDiaryProductsMutation,
} = diaryEndpoints;
