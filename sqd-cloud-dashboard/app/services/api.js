import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../config';
import { RootState } from '../../store/store';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const accessToken = getState().auth.token;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/access-token',
        method: 'POST',
        body: credentials,
      }),
    }),

    signup: builder.mutation({
      query: (credentials) => ({
        url: 'auth/sign-up',
        method: 'POST',
        body: credentials,
      }),
    }),

    me: builder.mutation({
      query: () => ({ url: 'auth/current-user', method: 'GET' }),
    }),

    createWP: builder.mutation({
      query: (stackInfo) => ({
        url: 'http://localhost:3000/api/swarmpit/stacks/create',
        method: 'POST',
        body: stackInfo,
      }),
    }),

    deleteStackByName: builder.mutation({
      query: (name) => ({
        url: 'http://localhost:3000/api/swarmpit/stacks/delete',
        method: 'DELETE',
        body: { name },
      }),
    }),

    getStacksByType: builder.mutation({
      query: (apps) => ({
        url: `http://localhost:3000/api/swarmpit/stacks/${apps.reduce(
          (curr, prev, i) => (i == 0 ? prev : curr + '+' + prev),
          '',
        )}`,
        method: 'GET',
      }),
    }),
  }),
});

export const ofsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.OFS_API_URL}/v1`,
    prepareHeaders: (headers, { getState }) => {
      headers.set('appid', config.NEXT_PUBLIC_APP_ID);
      headers.set('secret', config.NEXT_PUBLIC_SECRET);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getExternalUser: builder.mutation({
      query: (userId) => ({ url: `/users/${userId}`, method: 'GET' }),
    }),

    createExternalUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
    }),

    getConsents: builder.mutation({
      query: (userId) => ({
        url: '/consents',
        method: 'GET',
        params: { userId },
      }),
    }),

    /**
     * After creating a consent, we need to fetch the data from the provider
     * This call tells the API to fetch the data from the provider
     */
    connectAccount: builder.mutation({
      query: (consentId) => ({
        url: `consents/${consentId}/connect`,
        method: 'PUT',
      }),
    }),

    createConsent: builder.mutation({
      query: (createConsentDto) => ({
        url: 'consents',
        method: 'POST',
        body: createConsentDto,
        headers: { provider: 'S1' },
      }),
    }),

    getAccounts: builder.mutation({
      query: (userId) => ({
        url: 'accounts',
        method: 'GET',
        params: { userId },
      }),
    }),

    getTransactions: builder.mutation({
      query: (userId) => ({
        url: 'transactions',
        method: 'GET',
        params: { userId },
      }),
    }),
  }),
});

export const {
  useGetExternalUserMutation,
  useCreateExternalUserMutation,
  useGetAccountsMutation,
  useGetConsentsMutation,
  useGetTransactionsMutation,
  useCreateConsentMutation,
  useConnectAccountMutation,
} = ofsApi;

export const {
  useLoginMutation,
  useSignupMutation,
  useMeMutation,
  useCreateWPMutation,
  useGetStacksByTypeMutation,
  useDeleteStackByNameMutation,
} = api;
