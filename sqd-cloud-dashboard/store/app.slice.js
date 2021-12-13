import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
