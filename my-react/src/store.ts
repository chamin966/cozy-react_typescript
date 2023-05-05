import { configureStore } from '@reduxjs/toolkit';
import productsInCartReducer from 'Slices/productsInCartSlice';
import orderReducer from 'Slices/orderSlice';

export const store = configureStore({
  reducer: {
    cartReducer: productsInCartReducer,
    orderReducer: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
