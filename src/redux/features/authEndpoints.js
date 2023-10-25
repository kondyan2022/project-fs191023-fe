import { userSplitApi } from './userApi/fitnesApi';

const authApiSlice = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => `users/current`, // /api/v1/auth/profile
      keepUnusedDataFor: 10,
      providesTags: ['userAuth'],
    }),
    getUserDiary: builder.query({
      query: (id) => `users/diary/${id}`,
      providesTags: ['userAuth'],
    }),
    userSignUp: builder.mutation({
      query: (newCredential) => ({
        url: `users/register`,
        method: 'POST',
        body: newCredential,
      }),
      invalidatesTags: ['userAuth'],
    }),
    userSignIn: builder.mutation({
      query: (credential) => ({
        url: `users/login`,
        method: 'POST',
        body: credential,
      }),
      invalidatesTags: ['userAuth'],
    }),
    userLogOut: builder.mutation({
      query: () => ({
        url: `users/logout/`,
        method: 'POST',
      }),
      invalidatesTags: ['userAuth', 'exercises', 'products'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUserSignUpMutation,
  useUserSignInMutation,
  useUserLogOutMutation,
} = authApiSlice;
