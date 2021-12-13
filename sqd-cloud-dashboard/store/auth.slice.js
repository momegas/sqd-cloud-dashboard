import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api, ofsApi } from '../app/services/api';

const initialState = {
  token: null,
  user: null,
  externalUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addMatcher(api.endpoints.me.matchFulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addMatcher(ofsApi.endpoints.getExternalUser.matchFulfilled, (state, action) => {
      state.externalUser = action.payload;
    });
  },
});

export const selectIsLoggedIn = (state) => !!state.auth.token;

export const selectUser = (state) => state.auth.user;

export const selectExternalUser = (state) => state.auth.externalUser;
