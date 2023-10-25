import { userSplitApi } from './userApi/fitnesApi';

const authApiSlice = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegUserProfile: builder.query({
      query: () => `users/current`, // /api/v1/auth/profile
      keepUnusedDataFor: 10,
      providesTags: ['userAuth'],
    }),
    userRegister: builder.mutation({
      query: (newCredential) => ({
        url: `users/signup/`,
        method: 'POST',
        body: newCredential,
      }),
      invalidatesTags: ['userAuth'],
    }),
    userSignIn: builder.mutation({
      query: (credential) => ({
        url: `users/login/`,
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
  useGetRegUserProfileQuery,
  useUserRegisterMutation,
  useUserSignInMutation,
  useUserLogOutMutation,
} = authApiSlice;
