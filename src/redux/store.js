import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: productReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
