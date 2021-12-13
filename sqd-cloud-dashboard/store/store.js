import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { api, ofsApi } from '../app/services/api';
import { authSlice } from './auth.slice';
import { appSlice } from './app.slice';

const persistedState = typeof window !== 'undefined' && localStorage.getItem('state');
const preloadedState = persistedState ? JSON.parse(persistedState) : {};

const logger = createLogger({ collapsed: true });

// Create store
export const store = configureStore({
  preloadedState,
  reducer: {
    [api.reducerPath]: api.reducer,
    [ofsApi.reducerPath]: ofsApi.reducer,
    app: appSlice.reducer,
    auth: authSlice.reducer,
  },
  devTools: true, // TODO: depending on env
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  typeof window !== 'undefined' && localStorage.setItem('state', JSON.stringify(store.getState()));
});
