import { userSplitApi } from './userApi/fitnesApi';

const authApiSlice = userSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => `users/current`, // /api/v1/auth/profile
      providesTags: ['userAuth'],
    }),
    uploadUserAvatar: builder.mutation({
      query: (file) => {
        console.log(file);
        const avatarFormData = new FormData();
        avatarFormData.append('avatar', file);
        return {
          url: `/users/avatars`,
          method: 'PATCH',
          body: avatarFormData,
          formData: true,
        };
      },
      invalidatesTags: ['userAuth'],
    }),
    userSignUp: builder.mutation({
      query: (newCredential) => ({
        url: `users/register`,
        method: 'POST',
        body: newCredential,
      }),
      invalidatesTags: ['userAuth', 'diary'],
    }),
    userSignIn: builder.mutation({
      query: (credential) => ({
        url: `users/login`,
        method: 'POST',
        body: credential,
      }),
      invalidatesTags: ['userAuth', 'products', 'diary'],
    }),
    userGoogleSignIn: builder.mutation({
      query: (credential) => ({
        url: `users/googlelogin`,
        method: 'POST',
        body: credential,
      }),
      invalidatesTags: ['userAuth', 'products', 'diary'],
    }),
    userDataUpdate: builder.mutation({
      query: (updateData) => ({
        url: `users`,
        method: 'PUT',
        body: updateData,
      }),
      invalidatesTags: ['userAuth', 'products', 'diary'],
    }),
    userLogOut: builder.mutation({
      query: () => ({
        url: `users/logout/`,
        method: 'POST',
      }),
      invalidatesTags: ['userAuth', 'exercises', 'products', 'diary'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUploadUserAvatarMutation,
  useUserSignUpMutation,
  useUserSignInMutation,
  useUserDataUpdateMutation,
  useUserLogOutMutation,
  useUserGoogleSignInMutation,
} = authApiSlice;
